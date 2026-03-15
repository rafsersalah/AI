import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

export const metadata = {
  title: 'سجل كمهني | مهني قريب',
  description: 'انضم إلى دليل المهنيين وابدأ باستقبال طلبات العملاء في منطقتك',
};

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'ظهور أكبر',
    desc: 'يراك آلاف العملاء الباحثين عن خدماتك في منطقتك',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'عملاء أكثر',
    desc: 'تواصل مباشر مع العملاء بدون وسيط أو عمولات مخفية',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'صفحة خاصة بك',
    desc: 'ملف مهني كامل مع خدماتك وتقييماتك وصورك',
  },
];

const stats = [
  { value: '+500',   label: 'مهني مسجل' },
  { value: '+2000',  label: 'عميل راضٍ' },
  { value: '6',      label: 'تخصصات' },
  { value: 'مجاناً', label: 'التسجيل' },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white px-4 py-12 text-center">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-600 rounded-full px-3 py-1.5 text-sm font-semibold mb-4 border border-blue-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              التسجيل مجاناً
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              اجعل عملك يصل
              <span className="block text-blue-200">لعملاء أكثر</span>
            </h1>
            <p className="text-blue-100 leading-relaxed text-base max-w-md mx-auto">
              سجّل ملفك المهني الآن وابدأ باستقبال طلبات العملاء في منطقتك مباشرةً، بدون رسوم ولا عمولات.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-gray-200 px-4 py-5">
          <div className="max-w-2xl mx-auto grid grid-cols-4 gap-2 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-xl font-extrabold text-blue-700">{s.value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="lg:flex lg:gap-12 lg:items-start">

            {/* Benefits — desktop sidebar, mobile above form */}
            <div className="lg:w-80 lg:flex-shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-28">
              <h2 className="text-lg font-extrabold text-gray-900 mb-4">لماذا تنضم إلينا؟</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-gray-200 p-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{b.title}</h3>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                    أم
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">أحمد محمد</p>
                    <p className="text-gray-500 text-xs">سباك — الخرطوم</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  &ldquo;منذ تسجيلي أصبحت أتلقى مكالمات يومياً من عملاء جدد في منطقتي.&rdquo;
                </p>
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">أنشئ ملفك المهني</h2>
                <p className="text-gray-500 text-sm mb-6">أكمل البيانات التالية وسيتواصل معك فريقنا خلال 24 ساعة</p>
                <SignupForm />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
