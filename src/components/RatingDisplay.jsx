'use client';

export default function RatingDisplay({ rating, reviewCount, size = 'sm', showCount = true }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const starSize = size === 'lg' ? 'text-lg' : 'text-sm';
  const textSize = size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className="flex items-center gap-1">
      <span className={`font-bold text-gray-900 ${textSize}`}>{rating.toFixed(1)}</span>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className={`${starSize} text-amber-400`}>★</span>
        ))}
        {hasHalf && <span className={`${starSize} text-amber-400`}>½</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className={`${starSize} text-gray-300`}>★</span>
        ))}
      </div>
      {showCount && (
        <span className={`text-gray-500 ${textSize}`}>({reviewCount})</span>
      )}
    </div>
  );
}
