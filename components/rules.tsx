import { draftNotice, rules } from "@/lib/content";

export function Rules() {
  return (
    <section id="syarat" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[16rem_1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">09</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-5xl">
            Syarat Penyertaan
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gold-2">{draftNotice}</p>
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {rules.map((rule, index) => (
            <li id={rule.id} key={rule.id} className="grid gap-4 py-8 md:grid-cols-[4rem_1fr]">
              <span className="font-serif text-2xl text-gold">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl tracking-[-0.03em]">{rule.title}</h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{rule.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
