"use client";

import { useState } from "react";
import { CategoryIcon } from "@/components/category-icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/lib/content";

export function Categories() {
  const [open, setOpen] = useState<string>(categories[0].id);

  return (
    <section id="kategori" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Enam laluan"
            title="Kategori Pertandingan"
            intro="Setiap kategori dinilai dengan kriteria yang sama, tetapi bukti yang paling meyakinkan berbeza mengikut sifat inovasi."
          />
        </Reveal>

        <div className="mt-14 border-b border-white/10">
          {categories.map((category) => {
            const expanded = open === category.id;
            const panelId = `kategori-${category.id}`;
            return (
              <article key={category.id} className="border-t border-white/10">
                <div className="grid items-center gap-6 py-7 md:grid-cols-[auto_1fr_auto] md:gap-10">
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-3xl text-gold">{category.index}</span>
                    <div className="[perspective:500px]">
                      <div className={`transition-transform duration-700 [transform-style:preserve-3d] ${expanded ? "[transform:rotateY(-16deg)_rotateX(8deg)]" : ""}`}>
                        <CategoryIcon id={category.id} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.04em] text-ink md:text-4xl">{category.title}</h3>
                    <p className="mt-3 max-w-2xl text-muted">{category.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="justify-self-start text-[12px] tracking-[0.18em] text-gold uppercase md:justify-self-end"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? "" : category.id)}
                  >
                    {expanded ? "Tutup" : "Ketahui lebih lanjut"}
                  </button>
                </div>
                <div id={panelId} className={`grid transition-[grid-template-rows] duration-500 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className={`mb-8 grid gap-6 bg-gradient-to-r ${category.tone} to-transparent p-6 md:grid-cols-2`}>
                      <p className="text-sm leading-relaxed text-ink">
                        <span className="mb-2 block text-[11px] tracking-[0.18em] text-gold uppercase">Sesuai untuk</span>
                        {category.suits}
                      </p>
                      <p className="text-sm leading-relaxed text-ink">
                        <span className="mb-2 block text-[11px] tracking-[0.18em] text-gold uppercase">Yang perlu ditekankan</span>
                        {category.emphasis}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
