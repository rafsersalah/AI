'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ fontFamily: 'Cairo, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column', gap: '16px', background: '#fff', color: '#111' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>حدث خطأ غير متوقع</h2>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>نعتذر عن الإزعاج، يرجى المحاولة مجدداً.</p>
        <button
          onClick={reset}
          style={{ padding: '10px 24px', background: '#1d4ed8', color: '#fff', borderRadius: '12px', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700, border: 'none', cursor: 'pointer' }}
        >
          حاول مجدداً
        </button>
      </body>
    </html>
  );
}
