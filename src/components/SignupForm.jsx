'use client';

import { useState } from 'react';
import { categories } from '@/data/professionals';

export default function SignupForm() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    whatsapp: '',
    profession: '',
    city: '',
    neighborhoods: '',
    description: '',
    startingPrice: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  }

  function validate() {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'الاسم الكامل مطلوب';
    if (!form.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!form.profession) newErrors.profession = 'اختر نوع المهنة';
    if (!form.city.trim()) newErrors.city = 'المدينة مطلوبة';
    if (!form.terms) newErrors.terms = 'يجب الموافقة على الشروط';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Simulate submission
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-2">تم إرسال طلبك!</h3>
        <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
          شكراً لك <strong>{form.fullName}</strong>. سيتواصل معك فريقنا خلال 24 ساعة لإتمام تسجيل ملفك المهني.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ fullName:'',phone:'',whatsapp:'',profession:'',city:'',neighborhoods:'',description:'',startingPrice:'',terms:false }); }}
          className="mt-6 px-6 py-2.5 bg-sky-700 text-white font-bold rounded-xl hover:bg-sky-800 transition-colors text-sm"
        >
          تسجيل جديد
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Full name */}
      <Field label="الاسم الكامل" required error={errors.fullName}>
        <input
          type="text"
          value={form.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          placeholder="أحمد محمد علي"
          className={inputClass(errors.fullName)}
        />
      </Field>

      {/* Phone */}
      <div className="grid grid-cols-2 gap-3">
        <Field label="رقم الهاتف" required error={errors.phone}>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+249 9..."
            className={inputClass(errors.phone)}
            dir="ltr"
          />
        </Field>
        <Field label="رقم واتساب">
          <input
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update('whatsapp', e.target.value)}
            placeholder="+249 9..."
            className={inputClass()}
            dir="ltr"
          />
        </Field>
      </div>

      {/* Profession */}
      <Field label="نوع المهنة" required error={errors.profession}>
        <select
          value={form.profession}
          onChange={(e) => update('profession', e.target.value)}
          className={inputClass(errors.profession)}
        >
          <option value="">اختر مهنتك...</option>
          {categories.map((cat) => (
            <option key={cat.key} value={cat.key}>{cat.label}</option>
          ))}
        </select>
      </Field>

      {/* City */}
      <div className="grid grid-cols-2 gap-3">
        <Field label="المدينة" required error={errors.city}>
          <input
            type="text"
            value={form.city}
            onChange={(e) => update('city', e.target.value)}
            placeholder="الخرطوم"
            className={inputClass(errors.city)}
          />
        </Field>
        <Field label="سعر البداية (جنيه)">
          <input
            type="number"
            value={form.startingPrice}
            onChange={(e) => update('startingPrice', e.target.value)}
            placeholder="مثال: 200"
            min="0"
            className={inputClass()}
          />
        </Field>
      </div>

      {/* Neighborhoods */}
      <Field label="الأحياء التي تعمل فيها">
        <input
          type="text"
          value={form.neighborhoods}
          onChange={(e) => update('neighborhoods', e.target.value)}
          placeholder="مثال: الخرطوم 2، بحري، الكلاكلة"
          className={inputClass()}
        />
        <p className="text-xs text-gray-400 mt-1">افصل بين الأحياء بفاصلة</p>
      </Field>

      {/* Description */}
      <Field label="نبذة قصيرة عنك">
        <textarea
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="اكتب نبذة عن خبرتك وما تقدمه من خدمات..."
          rows={3}
          className={inputClass() + ' resize-none'}
        />
      </Field>

      {/* Photo upload (UI only) */}
      <div className="space-y-3">
        <Field label="صورة شخصية">
          <label className="flex items-center justify-center gap-2 w-full py-8 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-sky-400 hover:bg-sky-50 transition-colors bg-gray-50">
            <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <span className="text-sm text-gray-500">اضغط لرفع صورة</span>
            <input type="file" accept="image/*" className="sr-only" />
          </label>
        </Field>

        <Field label="صور الأعمال (اختياري)">
          <label className="flex items-center justify-center gap-2 w-full py-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-sky-400 hover:bg-sky-50 transition-colors bg-gray-50">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-sm text-gray-500">رفع صور الأعمال (حتى 5 صور)</span>
            <input type="file" accept="image/*" multiple className="sr-only" />
          </label>
        </Field>
      </div>

      {/* Location (simulated) */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">تحديد الموقع</label>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-xl text-sm text-gray-600 hover:border-sky-400 hover:text-sky-700 hover:bg-sky-50 transition-colors bg-gray-50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
          تحديد موقعك على الخريطة
        </button>
      </div>

      {/* Terms */}
      <div>
        <label className={`flex items-start gap-3 cursor-pointer group ${errors.terms ? 'text-red-600' : 'text-gray-700'}`}>
          <input
            type="checkbox"
            checked={form.terms}
            onChange={(e) => update('terms', e.target.checked)}
            className="mt-1 w-4 h-4 accent-sky-700 flex-shrink-0"
          />
          <span className="text-sm leading-relaxed">
            أوافق على{' '}
            <span className="text-sky-700 hover:underline cursor-pointer">شروط الاستخدام</span>
            {' '}و{' '}
            <span className="text-sky-700 hover:underline cursor-pointer">سياسة الخصوصية</span>
          </span>
        </label>
        {errors.terms && <p className="text-red-600 text-xs mt-1 mr-7">{errors.terms}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 text-white font-extrabold text-lg rounded-xl transition-colors"
      >
        سجل الآن
      </button>
    </form>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 mr-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full px-4 py-3 border rounded-xl text-base bg-gray-50 focus:outline-none focus:ring-2 focus:bg-white transition-colors ${
    error
      ? 'border-red-400 focus:ring-red-400'
      : 'border-gray-200 focus:ring-sky-500 focus:border-transparent'
  }`;
}
