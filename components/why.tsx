"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { benefits, statPlaceholders } from "@/lib/content";

export function WhyParticipate() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((benefits.length - 1) / benefits.length) * 100}%`]);

  return (
    <section id="mengapa" className="border-t border-white/10">
      <div className="md:hidden">
        <div className="px-5 py-20">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">03 · Mengapa</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-[-0.04em]">
            Mengapa Anda Perlu Menyertai?
          </h2>
        </div>
        <ol>
          {benefits.map((benefit) => (
            <li key={benefit.index} className="border-t border-white/10 px-5 py-10">
              <p className="font-serif text-4xl text-gold">{benefit.index}</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em]">{benefit.title}</h3>
              <p className="mt-4 max-w-xl text-muted">{benefit.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div ref={ref} className="relative hidden md:block" style={{ height: `${benefits.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x, width: `${benefits.length * 100}vw` }} className="flex h-full">
            {benefits.map((benefit, index) => (
              <article key={benefit.index} className="flex h-full w-screen shrink-0 items-end px-10 pb-28">
                <div className="max-w-4xl">
                  {index === 0 ? (
                    <>
                      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">03 · Tatal ke kiri</p>
                      <h2 className="mt-4 mb-10 font-display text-[clamp(3rem,5vw,5.2rem)] leading-[0.92] font-semibold tracking-[-0.045em]">
                        Mengapa Anda Perlu Menyertai?
                      </h2>
                    </>
                  ) : (
                    <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                      {benefit.index} / 05
                    </p>
                  )}
                  <p className="font-serif text-6xl text-gold/80">{benefit.index}</p>
                  <h3 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{benefit.text}</p>
                </div>
              </article>
            ))}
          </motion.div>
          <div className="absolute inset-x-10 bottom-10 h-px bg-white/10">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-gold" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[11px] tracking-[0.24em] text-gold uppercase">Ruang angka rasmi</p>
          <p className="mt-3 max-w-2xl text-muted">
            Angka penyertaan, agensi dan pemenang tidak dipaparkan kerana belum diterbitkan. Tanda sempang di bawah ialah pemegang tempat, bukan anggaran.
          </p>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statPlaceholders.map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-6xl text-ink">{item.value}</dt>
                <dd className="mt-3 text-sm text-ink">{item.label}</dd>
                <p className="mt-1 text-sm text-muted">{item.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
