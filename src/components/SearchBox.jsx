'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox({ initialService = '', initialLocation = '', variant = 'hero' }) {
  const [service, setService] = useState(initialService);
  const [location, setLocation] = useState(initialLocation);
  const [locating, setLocating] = useState(false);
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (service.trim()) params.set('service', service.trim());
    if (location.trim()) params.set('location', location.trim());
    router.push(`/results?${params.toString()}`);
  }

  function handleGeolocate() {
    setLocating(true);
    // Simulated geolocation
    setTimeout(() => {
      setLocation('الخرطوم 2');
      setLocating(false);
    }, 1200);
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
            </svg>
          </div>
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="ما الخدمة؟"
            className="w-full pr-9 pl-3 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="المنطقة"
            className="w-full pr-9 pl-3 py-2.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-colors flex-shrink-0"
        >
          بحث
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 space-y-3">
      {/* Service input */}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
          </svg>
        </div>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="ما الخدمة التي تحتاجها؟"
          className="w-full pr-12 pl-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-colors"
        />
      </div>

      {/* Location input */}
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="المنطقة أو الحي"
          className="w-full pr-12 pl-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-colors"
        />
      </div>

      {/* Geo button */}
      <button
        type="button"
        onClick={handleGeolocate}
        disabled={locating}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-semibold transition-colors disabled:opacity-60"
      >
        {locating ? (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
        )}
        {locating ? 'جاري تحديد موقعك...' : 'استخدم موقعي الحالي'}
      </button>

      {/* Search button */}
      <button
        type="submit"
        className="w-full py-4 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold text-lg rounded-xl transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
        </svg>
        ابحث
      </button>
    </form>
  );
}
