'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';
import SearchBox from '@/components/SearchBox';
import FilterChips from '@/components/FilterChips';
import ProfessionalCard from '@/components/ProfessionalCard';
import MapPlaceholder from '@/components/MapPlaceholder';
import EmptyState from '@/components/EmptyState';
import { professionals } from '@/data/professionals';
import Link from 'next/link';

export default function ResultsContent() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get('service') || '';
  const locationQuery = searchParams.get('location') || '';
  const [activeFilter, setActiveFilter] = useState(null);

  const filtered = useMemo(() => {
    let list = [...professionals];

    // Filter by service
    if (serviceQuery) {
      list = list.filter((p) =>
        p.profession.toLowerCase().includes(serviceQuery.toLowerCase()) ||
        serviceQuery.toLowerCase().includes(p.profession.toLowerCase())
      );
    }

    // Filter by location
    if (locationQuery) {
      list = list.filter((p) =>
        p.city.includes(locationQuery) ||
        p.neighborhoods.some((n) => n.includes(locationQuery)) ||
        p.coverageAreas.some((a) => a.includes(locationQuery))
      );
    }

    // Apply active filter
    switch (activeFilter) {
      case 'nearest':
        list = [...list].sort((a, b) => a.distanceKm - b.distanceKm);
        break;
      case 'top_rated':
        list = [...list].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case 'available':
        list = list.filter((p) => p.availableNow);
        break;
      case 'verified':
        list = list.filter((p) => p.verified);
        break;
      case 'cheapest':
        list = [...list].sort((a, b) => a.startingPrice - b.startingPrice);
        break;
      default:
        // Default: sort by rating
        list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [serviceQuery, locationQuery, activeFilter]);

  const summaryText = buildSummaryText(filtered.length, serviceQuery, locationQuery);

  return (
    <>
      <main className="flex-1 pb-8">
        {/* Sticky search bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-14 z-40">
          <div className="max-w-5xl mx-auto">
            <SearchBox variant="compact" initialService={serviceQuery} initialLocation={locationQuery} />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pt-5">
          {/* Summary */}
          <div className="mb-4">
            <h1 className="text-base font-bold text-gray-900">{summaryText}</h1>
          </div>

          {/* Filters */}
          <div className="mb-5">
            <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>

          {/* Desktop: split layout | Mobile: stacked */}
          <div className="flex gap-5 items-start">
            {/* Results */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <EmptyState
                  title="لم نجد نتائج"
                  description="جرّب تغيير كلمة البحث أو المنطقة، أو حاول البحث بكلمة أقل تحديداً."
                  action={
                    <Link
                      href="/results"
                      className="px-5 py-2.5 bg-blue-700 text-white font-bold rounded-xl text-sm hover:bg-blue-800 transition-colors"
                    >
                      عرض جميع المهنيين
                    </Link>
                  }
                />
              ) : (
                <div className="space-y-4">
                  {filtered.map((pro) => (
                    <ProfessionalCard key={pro.id} pro={pro} />
                  ))}
                </div>
              )}
            </div>

            {/* Map placeholder — desktop only */}
            <div className="hidden lg:block w-80 flex-shrink-0 sticky top-36">
              <MapPlaceholder
                city={locationQuery || 'الخرطوم'}
                neighborhoods={filtered.slice(0, 4).map((p) => p.city)}
                className="h-96"
              />
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3">
                <p className="text-xs text-blue-700 font-semibold text-center">
                  خريطة تقريبية — نطاق الخدمة
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function buildSummaryText(count, service, location) {
  if (count === 0) return 'لا توجد نتائج';
  const serviceStr = service || 'مهني';
  const locationStr = location ? ` قرب ${location}` : '';
  const countStr = `وجدنا ${count} ${serviceStr}`;
  return `${countStr}${locationStr}`;
}
