"use client";

import { useState, type FormEvent } from "react";
import {
  ShoppingCart,
  Truck,
  FileText,
  ClipboardList,
  List,
  MapPin,
  Store,
  Package,
  Clock,
  MessageSquare,
  Users,
  Zap,
  Handshake,
  Phone,
  Mail,
  Send,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Contact Form Component                                            */
/* ------------------------------------------------------------------ */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    console.log("Form submission (demo):", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle className="h-12 w-12 text-emerald-600" />
        <p className="text-xl font-semibold text-emerald-800">
          تم استلام طلبك (تجريبيًا).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* الاسم الكامل */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          الاسم الكامل <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
          placeholder="مثال: أحمد محمد"
        />
      </div>

      {/* رقم الهاتف */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          رقم الهاتف <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
          placeholder="0912 345 678"
        />
      </div>

      {/* الصفة */}
      <div>
        <label
          htmlFor="role"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          الصفة
        </label>
        <select
          id="role"
          name="role"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
        >
          <option value="صاحب بقالة">صاحب بقالة</option>
          <option value="مورد أو علامة">مورد أو علامة</option>
        </select>
      </div>

      {/* المنطقة */}
      <div>
        <label
          htmlFor="area"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          المنطقة / الحي
        </label>
        <input
          id="area"
          name="area"
          type="text"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
          placeholder="مثال: الخرطوم ٢ — بحري"
        />
      </div>

      {/* ملاحظات */}
      <div>
        <label
          htmlFor="notes"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          ملاحظات
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
          placeholder="أي معلومات إضافية…"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
      >
        <Send className="h-4 w-4" />
        إرسال
      </button>

      <p className="text-center text-xs text-slate-400">
        كل المعلومات هنا تجريبية (Placeholder).
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                         */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* ============================================================ */}
      {/*  HEADER                                                      */}
      {/* ============================================================ */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          {/* Brand */}
          <a
            href="#"
            className="text-lg font-bold text-indigo-700 sm:text-xl"
          >
            سوق النيل للجملة{" "}
            <span className="text-xs font-normal text-slate-400">
              (تجريبي)
            </span>
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
            <a href="#how" className="transition hover:text-indigo-600">
              كيف تعمل
            </a>
            <a href="#benefits" className="transition hover:text-indigo-600">
              الفوائد
            </a>
            <a href="#contact" className="transition hover:text-indigo-600">
              تواصل
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
            >
              اطلب تجربة
            </a>
          </nav>
        </div>
      </header>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            طلب الجملة والتوصيل — نموذج تجريبي
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            صفحة اختبار لفكرة منصة B2B لطلب المواد الاستهلاكية للبقالات داخل
            الخرطوم.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              <ShoppingCart className="h-4 w-4" />
              اطلب تجربة
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              كيف تعمل
            </a>
          </div>

          {/* Bullets */}
          <ul className="mt-10 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Zap className="h-5 w-5 shrink-0 text-indigo-500" />
              طلب سريع وبسيط
            </li>
            <li className="flex items-center gap-3">
              <Truck className="h-5 w-5 shrink-0 text-indigo-500" />
              توصيل حسب المسارات (مبدئيًا)
            </li>
            <li className="flex items-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-indigo-500" />
              فواتير وتتبع (مخطط)
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800">
            <strong>تنبيه:</strong> هذه نسخة تجريبية فقط — لا توجد طلبات حقيقية
            الآن.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                */}
      {/* ============================================================ */}
      <section id="how" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            كيف تعمل
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <ClipboardList className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-indigo-600">
                الخطوة ١
              </span>
              <h3 className="mt-1 text-lg font-bold text-slate-900">
                قدّم طلب الانضمام
              </h3>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <List className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-indigo-600">
                الخطوة ٢
              </span>
              <h3 className="mt-1 text-lg font-bold text-slate-900">
                نشاركك قائمة أصناف وأسعار تجريبية
              </h3>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-indigo-600">
                الخطوة ٣
              </span>
              <h3 className="mt-1 text-lg font-bold text-slate-900">
                نرتّب التوصيل حسب المنطقة (تجربة أولية)
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BENEFITS                                                    */}
      {/* ============================================================ */}
      <section id="benefits" className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            الفوائد
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Column A – للبقالة */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Store className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">للبقالة</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <Package className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  توفر أفضل (متوقع)
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  توصيل متوقع حسب المنطقة
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  تقليل وقت الاتصالات بالموردين
                </li>
              </ul>
            </div>

            {/* Column B – للمورد/العلامة */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  للمورد / العلامة
                </h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  طلب مجمّع من عدة بقالات
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  توصيل أكثر كفاءة
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                  بدء شراكة بشكل بسيط
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT FORM                                                */}
      {/* ============================================================ */}
      <section id="contact" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-lg px-4">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            تواصل معنا
          </h2>
          <p className="mt-2 text-center text-slate-500">
            سجّل اهتمامك وسنتواصل معك (تجريبي).
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER                                                      */}
      {/* ============================================================ */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 text-center text-sm text-slate-500">
          <p>صفحة تجريبية — 2026</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              واتساب: 0999 123 456
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              البريد: demo@example.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
