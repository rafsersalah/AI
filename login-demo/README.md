# Login Demo — Android (Kotlin + Compose + MVVM + Clean Architecture) ↔ Spring Boot + PostgreSQL

A complete, beginner-friendly **LOGIN ONLY** example. No register, no forgot-password,
no refresh tokens, no Room — just the full round trip:

```
Compose UI → ViewModel → UseCase → Repository interface → Repository impl
→ Retrofit → Spring Boot → PostgreSQL → back up the same chain → StateFlow → UI
```

## Folder layout

```
login-demo/
├── android/                      # Android Studio project
│   └── app/src/main/java/com/example/loginapp/
│       ├── MainActivity.kt       # entry point, wires ViewModel into LoginScreen
│       ├── ui/
│       │   ├── LoginScreen.kt    # Compose UI (fields, button, spinner, error text)
│       │   └── LoginUiState.kt   # one data class describing everything on screen
│       ├── viewmodel/
│       │   └── LoginViewModel.kt # StateFlow<LoginUiState>, viewModelScope, events
│       ├── domain/
│       │   ├── LoginUseCase.kt   # one business action: log in
│       │   ├── AuthRepository.kt # interface — domain doesn't know about Retrofit
│       │   ├── LoginResult.kt    # sealed class: Success(user) | Error(message)
│       │   └── User.kt           # clean domain model
│       ├── data/
│       │   ├── AuthRepositoryImpl.kt # real repository: calls Retrofit, maps DTO→domain
│       │   ├── AuthApi.kt            # Retrofit interface (POST api/auth/login)
│       │   ├── LoginRequest.kt       # JSON body we SEND
│       │   ├── LoginResponse.kt      # JSON body we RECEIVE
│       │   └── RetrofitClient.kt     # builds the single Retrofit instance
│       └── di/
│           └── AppModule.kt      # manual dependency injection (no Hilt)
└── backend/                      # Spring Boot project (Maven)
    ├── pom.xml
    ├── db/init.sql               # creates users table + one test user
    └── src/main/
        ├── java/com/example/loginbackend/
        │   ├── LoginBackendApplication.java # main()
        │   ├── User.java                    # JPA entity ↔ users table
        │   ├── UserRepository.java          # findByEmail → SQL SELECT
        │   ├── AuthService.java             # checks email + password
        │   ├── AuthController.java          # POST /api/auth/login
        │   ├── LoginRequest.java            # request DTO
        │   └── LoginResponse.java           # response DTO
        └── resources/application.properties # port + PostgreSQL config
```

## Where each object is created (manual DI, no Hilt)

| Object | Created in | How |
|---|---|---|
| Retrofit + `AuthApi` | `data/RetrofitClient.kt` | singleton `object`, built lazily once |
| `AuthRepositoryImpl` | `di/AppModule.kt` | once, given `RetrofitClient.authApi` |
| `LoginUseCase` | `di/AppModule.kt` | once, given the repository **interface** |
| `LoginViewModel` | `MainActivity.kt` | by Android, via `LoginViewModel.Factory(AppModule.loginUseCase)` |
| `LoginScreen` | `MainActivity.kt` | composable, receives the ViewModel |

The dependency direction is always **inward**: UI → ViewModel → domain ← data.
The domain layer never imports Retrofit or Compose.

## Exact JSON on the wire

Request Android sends (`POST http://10.0.2.2:8080/api/auth/login`):

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

Success response (HTTP 200):

```json
{
  "success": true,
  "message": "Login successful",
  "userId": 1,
  "email": "test@example.com",
  "name": "Test User"
}
```

Failure response (HTTP 200, `success:false` — kept simple for beginners;
production APIs usually return HTTP 401 instead):

```json
{
  "success": false,
  "message": "Invalid email or password",
  "userId": null,
  "email": null,
  "name": null
}
```

## How to run

### 1. PostgreSQL

```bash
psql -U postgres -c "CREATE DATABASE logindb;"
psql -U postgres -d logindb -f backend/db/init.sql
```

Test user: `test@example.com` / `123456`.
⚠️ The password is stored in **plain text only because this is a beginner demo**.
Real apps must store a **BCrypt hash** and compare with `passwordEncoder.matches(...)`.

### 2. Spring Boot backend

Edit `backend/src/main/resources/application.properties` if your Postgres
username/password differ, then:

```bash
cd backend
mvn spring-boot:run
```

Quick test without Android:

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'
```

### 3. Android app

Open `android/` in Android Studio and run on an **emulator**.
`RetrofitClient.BASE_URL` uses `http://10.0.2.2:8080/`, which is the emulator's
alias for your computer's localhost. On a real phone, change it to your
computer's LAN IP (e.g. `http://192.168.1.20:8080/`) — phone and computer must
be on the same Wi-Fi.

## Full execution path, step by step

1. **Button click** — user taps *Login* in `LoginScreen.kt`; the `onClick` lambda calls `viewModel.onLoginClick()`.
2. **ViewModel starts work** — `LoginViewModel.onLoginClick()` validates the fields, then launches a coroutine in `viewModelScope` and emits `LoginUiState(isLoading = true)` into the `MutableStateFlow`. The UI collects it and shows the spinner; the button is disabled because `enabled = !uiState.isLoading`.
3. **UseCase** — the coroutine calls `loginUseCase(email, password)`; the use case lowercases the email and calls `authRepository.login(...)` — it only knows the **interface**.
4. **Repository implementation** — `AuthRepositoryImpl.login()` builds a `LoginRequest` DTO and calls `authApi.login(request)`.
5. **Retrofit** — serializes `LoginRequest` to JSON with Gson and sends `POST /api/auth/login` to the server. Because `login()` is a `suspend` function, the coroutine pauses (the UI thread is never blocked).
6. **Spring Boot receives it** — `AuthController.login()` deserializes the JSON into the backend's `LoginRequest` DTO and calls `authService.login(email, password)`.
7. **PostgreSQL check** — `AuthService` calls `userRepository.findByEmail(...)`; Spring Data JPA runs `SELECT * FROM users WHERE email = ?` against the `users` table, then the service compares the password (plain text here, BCrypt in real apps).
8. **Backend responds** — the service returns `LoginResponse.ok(user)` or `LoginResponse.fail("Invalid email or password")`; Spring serializes it to JSON.
9. **Back in Android** — Retrofit deserializes the JSON into the app's `LoginResponse`; `AuthRepositoryImpl` maps it to the domain: `LoginResult.Success(User(...))` or `LoginResult.Error(message)` (network exceptions also become `LoginResult.Error`).
10. **ViewModel updates state** — the `when (result)` emits a new `LoginUiState`: either `loginSuccess = true, loggedInUserName = ...` or `errorMessage = ...`, with `isLoading = false`.
11. **UI updates** — `collectAsStateWithLifecycle()` receives the new state; Compose recomposes: spinner disappears, button re-enables, and the welcome text or red error appears.

## Optional (NOT included, on purpose): JWT

This demo returns only a success flag + user info, so the app knows the user
logged in but the server does not "remember" it. The standard next step is:
on success the backend generates a **JWT token**, returns it in `LoginResponse`,
and the app sends it in an `Authorization: Bearer <token>` header on later
requests. That is deliberately left out to keep the login itself simple.
