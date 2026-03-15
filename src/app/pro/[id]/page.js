import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RatingDisplay from '@/components/RatingDisplay';
import VerificationBadge from '@/components/VerificationBadge';
import AvailabilityBadge from '@/components/AvailabilityBadge';
import ContactButtons from '@/components/ContactButtons';
import ReviewsList from '@/components/ReviewsList';
import MapPlaceholder from '@/components/MapPlaceholder';
import StickyContactBar from './StickyContactBar';
import { professionals } from '@/data/professionals';

export async function generateStaticParams() {
  return professionals.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const pro = professionals.find((p) => p.id === id);
  if (!pro) return { title: 'غير موجود' };
  return {
    title: `${pro.name} — ${pro.profession} | مهني قريب`,
    description: pro.description,
  };
}

const avatarColors = [
  'bg-blue-600', 'bg-purple-600', 'bg-green-600',
  'bg-orange-500', 'bg-pink-600', 'bg-teal-600',
  'bg-indigo-600', 'bg-red-600',
];

function getAvatarColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + hash;
  return avatarColors[hash % avatarColors.length];
}

function getInitials(name) {
  const parts = name.trim().split(' ');
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0].substring(0, 2);
}

export default async function ProPage({ params }) {
  const { id } = await params;
  const pro = professionals.find((p) => p.id === id);
  if (!pro) notFound();

  const bgColor = getAvatarColor(pro.name);
  const initials = getInitials(pro.name);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 pb-24 lg:pb-8">
        <div className="max-w-4xl mx-auto px-4 pt-6 lg:pt-8">
          <div className="lg:flex lg:gap-8 lg:items-start">
            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-5">

              {/* Profile card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold flex-shrink-0 text-white ${bgColor}`}>
                    {initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h1 className="text-xl font-extrabold text-gray-900 leading-tight">{pro.name}</h1>
                    <p className="text-blue-700 font-bold text-base mt-0.5">{pro.profession}</p>

                    <div className="mt-2">
                      <RatingDisplay rating={pro.rating} reviewCount={pro.reviewCount} size="lg" />
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <VerificationBadge verified={pro.verified} size="sm" />
                      <AvailabilityBadge availableNow={pro.availableNow} size="sm" />
                    </div>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {pro.city} — {pro.distanceKm} كم منك
                    </div>
                  </div>
                </div>

                {/* Desktop contact buttons */}
                <div className="mt-5 hidden lg:block">
                  <ContactButtons phone={pro.phone} whatsapp={pro.whatsapp} variant="icon" />
                </div>
                {/* Mobile contact buttons */}
                <div className="mt-5 lg:hidden">
                  <ContactButtons phone={pro.phone} whatsapp={pro.whatsapp} variant="icon" />
                </div>
              </div>

              {/* About */}
              <Section title="نبذة عن المهني">
                <p className="text-gray-700 leading-relaxed text-sm">{pro.description}</p>
              </Section>

              {/* Services */}
              <Section title="الخدمات التي يقدمها">
                <ul className="space-y-2">
                  {pro.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Coverage areas */}
              <Section title="المناطق التي يخدمها">
                <div className="flex flex-wrap gap-2">
                  {pro.coverageAreas.map((area, i) => (
                    <span key={i} className="px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </Section>

              {/* Pricing */}
              <Section title="الأسعار التقريبية">
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <svg className="w-8 h-8 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{pro.priceRange}</p>
                    <p className="text-gray-500 text-xs mt-0.5">السعر النهائي يعتمد على تقييم العمل على الموقع</p>
                  </div>
                </div>
              </Section>

              {/* Gallery placeholder */}
              <Section title="معرض الأعمال">
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="aspect-square bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">لم يرفع المهني صور أعمال بعد</p>
              </Section>

              {/* Reviews */}
              <Section title={`التقييمات (${pro.reviewCount})`}>
                <div className="flex items-center gap-4 mb-5 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-gray-900">{pro.rating.toFixed(1)}</p>
                    <div className="flex justify-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-lg ${i < Math.round(pro.rating) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-1">{pro.reviewCount} تقييم</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const count = pro.reviews.filter((r) => r.rating === star).length;
                      const pct = pro.reviews.length > 0 ? (count / pro.reviews.length) * 100 : 0;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 w-3">{star}</span>
                          <span className="text-amber-400 text-xs">★</span>
                          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }}></div>
                          </div>
                          <span className="text-xs text-gray-400 w-3">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <ReviewsList reviews={pro.reviews} />
              </Section>

              {/* Map */}
              <Section title="نطاق الخدمة">
                <MapPlaceholder city={pro.city} neighborhoods={pro.coverageAreas} className="h-52" />
              </Section>

            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0 sticky top-28 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-bold text-gray-700 mb-3">تواصل مع {pro.name}</p>
                <ContactButtons phone={pro.phone} whatsapp={pro.whatsapp} variant="icon" />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-800">
                <p className="font-bold mb-1">نصيحة</p>
                <p className="leading-relaxed text-xs text-blue-700">تواصل مع المهني واشرح المشكلة بالتفصيل للحصول على سعر دقيق.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky bottom bar — mobile */}
      <StickyContactBar phone={pro.phone} whatsapp={pro.whatsapp} name={pro.name} />

      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <h2 className="text-base font-extrabold text-gray-900 mb-4 pb-3 border-b border-gray-100">{title}</h2>
      {children}
    </div>
  );
}
