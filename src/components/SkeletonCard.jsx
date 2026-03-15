export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 animate-pulse">
      <div className="flex gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div className="flex-1 space-y-2 pt-1">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-5 bg-gray-200 rounded-full w-14"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
          <div className="h-3 bg-gray-200 rounded w-2/5"></div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-4/5"></div>
      </div>
      <div className="mt-4 flex gap-2">
        <div className="h-9 bg-gray-200 rounded-xl flex-1"></div>
        <div className="h-9 bg-gray-200 rounded-xl flex-1"></div>
        <div className="h-9 bg-gray-200 rounded-xl flex-1"></div>
      </div>
    </div>
  );
}

export function SkeletonCards({ count = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
