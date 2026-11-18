import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="proses" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading index="04" eyebrow="Proses" title="Bagaimana Untuk Menyertai?" />
        </Reveal>
        <ol className="relative mt-16 grid gap-12 md:grid-cols-4">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-gold to-transparent md:block" aria-hidden="true" />
          {steps.map((step) => (
            <li key={step.index} className="relative">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-gold bg-night font-serif text-lg text-gold">
                {step.index}
              </span>
              <h3 className="mt-6 font-display text-2xl tracking-[-0.03em] text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
