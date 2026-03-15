'use client';

import { useRouter } from 'next/navigation';

const categoryStyles = {
  'سباك':         'bg-sky-50   hover:bg-sky-100   border-sky-200   text-sky-800',
  'كهربائي':      'bg-yellow-50 hover:bg-yellow-100 border-yellow-200 text-yellow-800',
  'نجار':         'bg-amber-50  hover:bg-amber-100  border-amber-200  text-amber-800',
  'فني تكييف':    'bg-cyan-50   hover:bg-cyan-100   border-cyan-200   text-cyan-800',
  'دهان':         'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-800',
  'صيانة منزلية': 'bg-green-50  hover:bg-green-100  border-green-200  text-green-800',
};

export default function CategoryCard({ category }) {
  const router = useRouter();
  const style = categoryStyles[category.key] || 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800';

  function handleClick() {
    router.push(`/results?service=${encodeURIComponent(category.key)}`);
  }

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all active:scale-95 cursor-pointer w-full ${style}`}
    >
      <span className="text-3xl leading-none">{category.icon}</span>
      <span className="font-bold text-sm text-center leading-tight">{category.label}</span>
      <span className="text-xs text-center leading-snug opacity-70 hidden sm:block">{category.description}</span>
    </button>
  );
}
