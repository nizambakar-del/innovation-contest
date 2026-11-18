export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  invert = false,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) {
  return (
    <div className={invert ? "text-center" : "max-w-3xl"}>
      <p className="mb-4 flex items-center gap-3 text-[11px] tracking-[0.28em] text-gold uppercase">
        {index ? <span className="font-serif text-base tracking-normal normal-case">{index}</span> : null}
        <span className={invert ? "mx-auto" : ""}>{eyebrow}</span>
      </p>
      <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-balance text-ink">
        {title}
      </h2>
      {intro ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}
