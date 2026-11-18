export function CategoryIcon({ id }: { id: string }) {
  const common = "h-14 w-14";
  if (id === "digital") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <path d="M10 40 24 32l10 6 20-14" fill="none" stroke="#d6b56d" strokeWidth="1.4" />
        <rect x="14" y="16" width="22" height="16" rx="1" fill="none" stroke="#f4e4bf" strokeWidth="1.3" transform="skewY(-8)" />
        <rect x="26" y="24" width="22" height="16" rx="1" fill="rgba(191,0,255,.25)" stroke="#bf00ff" strokeWidth="1.2" />
        <circle cx="48" cy="18" r="2" fill="#d6b56d" />
      </svg>
    );
  }
  if (id === "pengurusan") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <circle cx="32" cy="18" r="5" fill="none" stroke="#f4e4bf" strokeWidth="1.3" />
        <circle cx="16" cy="44" r="5" fill="none" stroke="#d6b56d" strokeWidth="1.3" />
        <circle cx="48" cy="44" r="5" fill="rgba(191,0,255,.3)" stroke="#bf00ff" strokeWidth="1.3" />
        <path d="M32 23 18 39M32 23l14 16M21 44h22" fill="none" stroke="#d6b56d" strokeWidth="1.2" />
      </svg>
    );
  }
  if (id === "perkhidmatan") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <path d="M8 40c10-16 16-16 24-8s12 8 24-10" fill="none" stroke="#d6b56d" strokeWidth="1.5" />
        <path d="M12 46h28l8-8H20z" fill="rgba(214,181,109,.15)" stroke="#f4e4bf" strokeWidth="1.2" />
        <circle cx="50" cy="20" r="4" fill="none" stroke="#bf00ff" strokeWidth="1.3" />
      </svg>
    );
  }
  if (id === "produk") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <path d="M32 10 52 20 32 30 12 20Z" fill="rgba(214,181,109,.2)" stroke="#f4e4bf" strokeWidth="1.2" />
        <path d="M12 20v16l20 10V30" fill="rgba(191,0,255,.15)" stroke="#d6b56d" strokeWidth="1.2" />
        <path d="M52 20v16L32 46V30" fill="none" stroke="#bf00ff" strokeWidth="1.2" />
      </svg>
    );
  }
  if (id === "sosial") {
    return (
      <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
        <circle cx="22" cy="26" r="7" fill="none" stroke="#f4e4bf" strokeWidth="1.3" />
        <circle cx="42" cy="24" r="6" fill="none" stroke="#d6b56d" strokeWidth="1.3" />
        <circle cx="34" cy="42" r="6" fill="rgba(191,0,255,.25)" stroke="#bf00ff" strokeWidth="1.3" />
        <path d="M27 31c4 2 8 2 12-2M26 33l4 6M40 30l-3 7" fill="none" stroke="#d6b56d" strokeWidth="1.1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" className={common} aria-hidden="true">
      <path d="M32 10c8 10 14 16 14 26a14 14 0 0 1-28 0c0-10 6-16 14-26Z" fill="rgba(214,181,109,.12)" stroke="#d6b56d" strokeWidth="1.3" />
      <path d="M32 24c4 5 7 8 7 13a7 7 0 0 1-14 0c0-5 3-8 7-13Z" fill="rgba(191,0,255,.2)" stroke="#f4e4bf" strokeWidth="1" />
    </svg>
  );
}
