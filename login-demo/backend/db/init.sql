-- init.sql
-- Role: creates the database objects and one test user.
-- Run with:  psql -U postgres -f init.sql   (after creating the database)
--
-- Step 0 (once, in psql):  CREATE DATABASE logindb;
-- Then connect to it:      \c logindb

CREATE TABLE IF NOT EXISTS users (
    id       BIGSERIAL PRIMARY KEY,
    email    VARCHAR(255) NOT NULL UNIQUE,
    -- WARNING: plain-text password column, for this beginner demo ONLY.
    -- Real apps must store a BCrypt hash, never the raw password.
    password VARCHAR(255) NOT NULL,
    name     VARCHAR(255) NOT NULL
);

-- One test user you can log in with from the Android app:
--   email:    test@example.com
--   password: 123456
INSERT INTO users (email, password, name)
VALUES ('test@example.com', '123456', 'Test User')
ON CONFLICT (email) DO NOTHING;
