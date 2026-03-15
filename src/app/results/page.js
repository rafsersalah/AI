import { Suspense } from 'react';
import ResultsContent from './ResultsContent';
import Header from '@/components/Header';
import { SkeletonCards } from '@/components/SkeletonCard';

export const metadata = {
  title: 'نتائج البحث | مهني قريب',
};

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Suspense fallback={<ResultsFallback />}>
        <ResultsContent />
      </Suspense>
    </div>
  );
}

function ResultsFallback() {
  return (
    <div className="flex-1 px-4 py-6 max-w-5xl mx-auto w-full">
      <div className="h-10 bg-gray-200 rounded-xl animate-pulse mb-4"></div>
      <div className="h-8 bg-gray-200 rounded animate-pulse w-48 mb-6"></div>
      <SkeletonCards count={4} />
    </div>
  );
}
