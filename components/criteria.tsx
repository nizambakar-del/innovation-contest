import { SectionHeading } from "@/components/section-heading";
import { criteria } from "@/lib/content";

export function Criteria() {
  return (
    <section id="kriteria" className="border-y border-white/10 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            index="05"
            eyebrow="Penilaian"
            title="Kriteria Penilaian"
            intro="Lima soalan yang sama dikenakan kepada setiap kategori. Panel mencari bukti, bukan kata sifat."
          />
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {criteria.map((item, index) => (
            <li key={item.title} className="grid gap-4 py-8 md:grid-cols-[4.5rem_1fr]">
              <span className="font-serif text-3xl text-gold">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl tracking-[-0.03em] text-ink md:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
