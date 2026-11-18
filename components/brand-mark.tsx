export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke="#d6b56d" strokeWidth="0.8" />
        <circle cx="24" cy="24" r="17.5" fill="none" stroke="#bf00ff" strokeWidth="0.4" opacity="0.8" />
        <path
          d="M16.5 15.5h15M18.2 15.5c.4 6.2 2.2 10.2 5.8 12.2 3.6-2 5.4-6 5.8-12.2M24 27.8v5.2M18 35.2h12"
          fill="none"
          stroke="#f4e4bf"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {compact ? null : (
        <span className="min-w-0 text-left leading-tight">
          <span className="block text-[10px] tracking-[0.22em] text-gold uppercase">
            Kementerian Komunikasi
          </span>
          <span className="block font-display text-[13px] tracking-[0.04em] text-ink">
            Anugerah Inovasi 2027
          </span>
        </span>
      )}
    </span>
  );
}
