import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سوق النيل للجملة (تجريبي)",
  description: "صفحة تجريبية لمنصة B2B لطلب المواد الاستهلاكية للبقالات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
