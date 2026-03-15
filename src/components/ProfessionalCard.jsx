'use client';

import Link from 'next/link';
import RatingDisplay from './RatingDisplay';
import VerificationBadge from './VerificationBadge';
import AvailabilityBadge from './AvailabilityBadge';
import ContactButtons from './ContactButtons';

const avatarColors = [
  ['bg-sky-600',   'text-white'],
  ['bg-purple-600', 'text-white'],
  ['bg-green-600',  'text-white'],
  ['bg-orange-500', 'text-white'],
  ['bg-pink-600',   'text-white'],
  ['bg-teal-600',   'text-white'],
  ['bg-indigo-600', 'text-white'],
  ['bg-red-600',    'text-white'],
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

export default function ProfessionalCard({ pro }) {
  const [bgColor, textColor] = getAvatarColor(pro.name);
  const initials = getInitials(pro.name);

  return (
    <article className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-md hover:border-gray-300 transition-all">
      {/* Top row: avatar + info */}
      <div className="flex gap-3">
        {/* Avatar */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 ${bgColor} ${textColor}`}>
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-gray-900 text-base leading-tight">{pro.name}</h3>
              <p className="text-sky-700 font-semibold text-sm mt-0.5">{pro.profession}</p>
            </div>
            <div className="flex flex-col items-end gap-1 flex-shrink-0">
              <VerificationBadge verified={pro.verified} size="sm" />
              <AvailabilityBadge availableNow={pro.availableNow} size="sm" />
            </div>
          </div>

          {/* Rating + distance */}
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <RatingDisplay rating={pro.rating} reviewCount={pro.reviewCount} size="sm" />
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-600 text-sm flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {pro.distanceKm} كم
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-2">{pro.description}</p>

      {/* Price */}
      <div className="mt-3 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
        <span className="text-sm text-gray-700">
          يبدأ من <span className="font-bold text-gray-900">{pro.startingPrice} جنيه</span>
        </span>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-2">
        <ContactButtons phone={pro.phone} whatsapp={pro.whatsapp} variant="compact" className="flex-1" />
        <Link
          href={`/pro/${pro.id}`}
          className="flex items-center justify-center px-3 py-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800 text-sm font-semibold rounded-lg transition-colors flex-shrink-0"
        >
          عرض التفاصيل
        </Link>
      </div>
    </article>
  );
}
