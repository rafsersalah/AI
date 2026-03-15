'use client';

const filters = [
  { key: 'nearest',   label: 'الأقرب' },
  { key: 'top_rated', label: 'الأعلى تقييماً' },
  { key: 'available', label: 'متاح الآن' },
  { key: 'verified',  label: 'موثق' },
  { key: 'cheapest',  label: 'الأرخص' },
];

export default function FilterChips({ activeFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
      {filters.map((filter) => {
        const isActive = activeFilter === filter.key;
        return (
          <button
            key={filter.key}
            onClick={() => onFilterChange(isActive ? null : filter.key)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all active:scale-95 ${
              isActive
                ? 'bg-blue-700 text-white border-blue-700'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-700'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
