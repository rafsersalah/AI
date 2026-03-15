export default function MapPlaceholder({ city, neighborhoods = [], className = '' }) {
  return (
    <div className={`relative bg-gray-100 rounded-xl overflow-hidden border border-gray-200 ${className}`}>
      {/* Fake map grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Fake streets */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#64748b" strokeWidth="3"/>
          <line x1="55%" y1="0" x2="55%" y2="100%" stroke="#64748b" strokeWidth="4"/>
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#64748b" strokeWidth="2"/>
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#64748b" strokeWidth="4"/>
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#64748b" strokeWidth="2"/>
          <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#64748b" strokeWidth="3"/>
        </svg>
      </div>

      {/* Content overlay */}
      <div className="relative flex flex-col items-center justify-center h-full py-10 gap-3">
        <div className="bg-sky-700 rounded-full p-3 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
          <p className="font-bold text-gray-800 text-sm">{city}</p>
          {neighborhoods.length > 0 && (
            <p className="text-gray-500 text-xs mt-0.5">{neighborhoods.slice(0, 3).join(' • ')}</p>
          )}
          <p className="text-gray-400 text-xs mt-1">نطاق الخدمة</p>
        </div>
      </div>
    </div>
  );
}
