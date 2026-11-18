"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { EntryButton } from "@/components/entry-button";
import { eventInfo } from "@/lib/content";

const TrophyScene = dynamic(() => import("@/components/trophy-scene"), {
  ssr: false,
});

const facts = [
  { label: "Tarikh tutup penyertaan", value: eventInfo.closeDate, note: "Indikatif" },
  { label: "Tarikh majlis", value: eventInfo.ceremony, note: "Ditetapkan" },
  { label: "Lokasi", value: eventInfo.venue, note: "Putrajaya" },
];

export function Hero() {
  const pointer = useRef({ x: 0, y: 0 });
  const glow = useRef<HTMLDivElement>(null);

  function moveGlow(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    if (glow.current) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      glow.current.style.background = `radial-gradient(540px circle at ${x}px ${y}px, rgba(191,0,255,0.18), transparent 62%)`;
    }
  }

  return (
    <section id="utama" className="relative flex min-h-screen flex-col overflow-hidden" onPointerMove={moveGlow}>
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div ref={glow} className="pointer-events-none absolute inset-0" />
      <div className="grain pointer-events-none absolute inset-0" />
      <p aria-hidden="true" className="pointer-events-none absolute top-24 -left-4 font-serif text-[18vw] leading-none text-white/[0.035] select-none">
        2027
      </p>

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-8 px-5 pt-28 pb-8 md:grid-cols-2 md:px-10 md:pt-32">
        <div className="relative z-10 min-w-0">
          <p className="mb-6 text-[11px] tracking-[0.32em] text-gold uppercase">
            {eventInfo.organizerEn} · Putrajaya
          </p>
          <div className="mb-7 inline-flex items-center gap-3 border border-white/15 bg-white/[0.04] px-3.5 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.18em] text-muted uppercase">
              Status penyertaan · {eventInfo.status}
            </span>
          </div>
          <h1 className="font-display text-[clamp(3.1rem,5.4vw,5.6rem)] leading-[0.88] font-semibold tracking-[-0.05em] text-ink">
            <span className="block">Innovation</span>
            <span className="block">
              <span className="font-serif font-normal text-gold italic">Go </span>
              Global
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Platform pengiktirafan bagi menghargai idea kreatif, inovasi berimpak tinggi dan penyelesaian transformatif yang memacu kecemerlangan organisasi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <EntryButton>Hantar Penyertaan</EntryButton>
            <a className="btn btn-ghost" href="#kategori">
              Lihat Kategori Anugerah
            </a>
          </div>
          <a href="#mengenai" className="mt-6 inline-flex text-[12px] tracking-[0.22em] text-gold uppercase">
            Terokai Anugerah
          </a>
        </div>
        <div className="pointer-events-none relative h-[380px] min-w-0 sm:h-[460px] md:h-[620px]">
          <TrophyScene pointer={pointer} />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-night/70 backdrop-blur-md">
        <dl className="mx-auto grid max-w-[1440px] gap-px bg-white/10 md:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-night/80 px-5 py-5 md:px-10">
              <dt className="text-[11px] tracking-[0.2em] text-muted uppercase">{fact.label}</dt>
              <dd className="mt-2 font-serif text-2xl leading-snug text-ink md:text-[1.7rem]">{fact.value}</dd>
              <p className="mt-1 text-[11px] tracking-[0.16em] text-gold uppercase">{fact.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
