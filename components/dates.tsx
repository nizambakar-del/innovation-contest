import { SectionHeading } from "@/components/section-heading";
import { dates } from "@/lib/content";

export function Dates() {
  return (
    <section id="tarikh" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          index="06"
          eyebrow="Garis masa"
          title="Tarikh penting"
          intro="Hanya majlis pada 8 Ogos 2027 yang ditetapkan dalam taklimat ini. Tarikh lain ialah penanda indikatif sehingga pekeliling rasmi dikeluarkan."
        />
        <ol className="mx-auto mt-16 max-w-4xl border-l border-gold/40">
          {dates.map((item) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-3">
                <time className="font-serif text-2xl text-ink">{item.date}</time>
                <span
                  className={`text-[10px] tracking-[0.18em] uppercase ${
                    item.state === "Ditetapkan" ? "bg-gold px-2 py-1 text-night" : "border border-white/15 px-2 py-1 text-muted"
                  }`}
                >
                  {item.state}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 max-w-xl text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
