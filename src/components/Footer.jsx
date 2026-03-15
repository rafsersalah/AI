import Link from 'next/link';
import { categories } from '@/data/professionals';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-base">مهني قريب</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              دليلك الموثوق للعثور على المهنيين المحليين بسرعة وأمان.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">الخدمات</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.key}>
                  <Link
                    href={`/results?service=${encodeURIComponent(cat.key)}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">روابط</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="/results" className="text-sm text-gray-400 hover:text-white transition-colors">ابحث عن مهني</Link></li>
              <li><Link href="/join" className="text-sm text-gray-400 hover:text-white transition-colors">سجل كمهني</Link></li>
            </ul>
          </div>

          {/* For Pros */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">للمهنيين</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              سجل الآن واحصل على عملاء في منطقتك.
            </p>
            <Link
              href="/join"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
            >
              أضف خدمتك مجاناً
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2024 مهني قريب. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-gray-300 transition-colors">سياسة الخصوصية</span>
            <span className="cursor-pointer hover:text-gray-300 transition-colors">الشروط والأحكام</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
