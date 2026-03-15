export default function AvailabilityBadge({ availableNow, size = 'sm' }) {
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  if (availableNow) {
    return (
      <span className={`inline-flex items-center gap-1 ${padding} bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-semibold`}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        متاح الآن
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1 ${padding} bg-gray-100 text-gray-500 border border-gray-200 rounded-full font-medium`}>
      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
      غير متاح حالياً
    </span>
  );
}
