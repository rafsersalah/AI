import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import CategoryCard from '@/components/CategoryCard';
import ProfessionalCard from '@/components/ProfessionalCard';
import { professionals, categories } from '@/data/professionals';

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'مهنيون موثقون',
    desc: 'نتحقق من هوية المهني وخبرته قبل النشر',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'تقييمات حقيقية',
    desc: 'تقييمات من عملاء حقيقيين يمكنك الوثوق بها',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
      </svg>
    ),
    title: 'قريبون من موقعك',
    desc: 'اعثر على مهنيين في حيّك أو منطقتك مباشرة',
  },
];

const featured = professionals.slice(0, 6);

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-sky-700 to-sky-800 text-white px-4 pt-10 pb-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
                ابحث عن مهني قريب منك
                <span className="block text-sky-200">بسرعة وثقة</span>
              </h1>
              <p className="text-sky-100 text-base leading-relaxed max-w-md mx-auto">
                دليل المهنيين الموثوقين في منطقتك — سباكة، كهرباء، نجارة، تكييف، دهان وأكثر
              </p>
            </div>

            <SearchBox />
          </div>
        </section>

        {/* Categories */}
        <section className="px-4 pt-10 pb-8 max-w-5xl mx-auto">
          <div className="mt-2">
            <h2 className="text-xl font-extrabold text-gray-900 mb-1">تصفح الخدمات</h2>
            <p className="text-gray-500 text-sm mb-5">اختر الخدمة التي تحتاجها</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <CategoryCard key={cat.key} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="px-4 py-8 bg-gray-50 border-y border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                  <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{point.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured professionals */}
        <section className="px-4 py-10 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">مهنيون مميزون</h2>
              <p className="text-gray-500 text-sm mt-0.5">الأعلى تقييماً في منطقتك</p>
            </div>
            <a
              href="/results"
              className="text-sm text-sky-700 hover:text-sky-800 font-semibold flex items-center gap-1"
            >
              عرض الكل
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((pro) => (
              <ProfessionalCard key={pro.id} pro={pro} />
            ))}
          </div>
        </section>

        {/* CTA for professionals */}
        <section className="px-4 py-12 bg-sky-700 text-white">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-2">أنت مهني؟</h2>
            <p className="text-sky-100 mb-6 leading-relaxed">
              سجّل الآن واحصل على صفحة مهنية خاصة بك وعملاء جدد من منطقتك مجاناً.
            </p>
            <a
              href="/join"
              className="inline-block px-8 py-3.5 bg-white text-sky-700 font-extrabold rounded-xl hover:bg-sky-50 transition-colors text-base"
            >
              أضف خدمتك مجاناً
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
