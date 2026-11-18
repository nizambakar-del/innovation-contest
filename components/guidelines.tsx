import { draftNotice, guidelines } from "@/lib/content";

export function Guidelines() {
  return (
    <section id="garis-panduan" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">10</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Garis Panduan
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Dokumen inovasi perlu cukup jelas untuk dinilai oleh panel yang tidak berada di dalam pasukan anda. Butiran fail muktamad menyusul bersama sistem rasmi.
          </p>
          <p className="mt-4 text-sm text-gold-2">{draftNotice}</p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {guidelines.map((guide, index) => (
            <article key={guide.id} id={guide.id} className="border border-white/10 bg-white/[0.02] p-7">
              <p className="font-serif text-3xl text-gold">0{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.03em]">{guide.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                {guide.points.map((point) => (
                  <li key={point} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
