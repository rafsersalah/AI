import './globals.css';

export const metadata = {
  title: 'مهني قريب | دليل الخدمات المنزلية',
  description: 'ابحث عن مهنيين موثوقين في منطقتك — سباكة، كهرباء، نجارة، تكييف، دهان، وصيانة منزلية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
