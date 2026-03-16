import RatingDisplay from './RatingDisplay';

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ar-SD', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getInitials(name) {
  const parts = name.trim().split(' ');
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
}

const avatarColors = [
  'bg-sky-100 text-sky-700',
  'bg-purple-100 text-purple-700',
  'bg-green-100 text-green-700',
  'bg-orange-100 text-orange-700',
  'bg-pink-100 text-pink-700',
  'bg-teal-100 text-teal-700',
];

function getColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + hash;
  return avatarColors[hash % avatarColors.length];
}

export default function ReviewsList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-gray-500 text-sm py-4 text-center">لا توجد تقييمات بعد</p>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${getColor(review.author)}`}>
              {getInitials(review.author)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                <span className="text-gray-400 text-xs">{formatDate(review.date)}</span>
              </div>
              <div className="mt-1">
                <RatingDisplay rating={review.rating} showCount={false} size="sm" />
              </div>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
