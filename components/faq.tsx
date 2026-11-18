"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="soalan" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">11</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">
            Soalan Lazim
          </h2>
        </div>
        <div className="border-t border-white/10">
          {faqs.map((item, index) => {
            const expanded = open === index;
            const panelId = `faq-${index}`;
            return (
              <div key={item.q} className="border-b border-white/10">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="font-display text-xl tracking-[-0.03em] md:text-2xl">{item.q}</span>
                    <Plus className={`h-5 w-5 shrink-0 text-gold transition-transform ${expanded ? "rotate-45" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} role="region" className={`grid transition-[grid-template-rows] duration-500 ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
