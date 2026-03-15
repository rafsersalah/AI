export default function VerificationBadge({ verified, size = 'sm' }) {
  if (!verified) return null;

  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span className={`inline-flex items-center gap-1 ${padding} bg-green-50 text-green-700 border border-green-200 rounded-full font-semibold`}>
      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0l2 2h3v3l2 2-2 2v3h-3l-2 2-2-2H3v-3L1 8l2-2V3h3z" className="text-green-600"/>
        <path d="M6 8l1.5 1.5L10 6.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      موثق
    </span>
  );
}
