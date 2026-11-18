"use client";

import { useRef } from "react";

const frames = [
  { label: "01", className: "bg-[conic-gradient(from_120deg,#d6b56d,#1a0b2e,#bf00ff,#d6b56d)]" },
  { label: "02", className: "bg-[radial-gradient(circle_at_30%_30%,#f4e4bf,transparent_28%),linear-gradient(160deg,#2a1248,#07040f)]" },
  { label: "03", className: "bg-[linear-gradient(135deg,#07040f_25%,#d6b56d_25%,#d6b56d_28%,#07040f_28%,#07040f_50%,#bf00ff_50%,#bf00ff_53%,#07040f_53%)] bg-[length:28px_28px]" },
  { label: "04", className: "bg-[radial-gradient(circle,#d6b56d_1px,transparent_1.4px),linear-gradient(#14081f,#07040f)] bg-[length:14px_14px,auto]" },
  { label: "05", className: "bg-[linear-gradient(200deg,#bf00ff,#14081f_40%,#d6b56d)]" },
  { label: "06", className: "bg-[repeating-linear-gradient(90deg,#d6b56d_0_1px,transparent_1px_16px),linear-gradient(#1b1030,#07040f)]" },
  { label: "07", className: "bg-[radial-gradient(circle_at_70%_70%,#bf00ff,transparent_40%),linear-gradient(#3a2a12,#07040f)]" },
  { label: "08", className: "bg-[conic-gradient(from_40deg,#07040f,#d6b56d,#07040f,#bf00ff,#07040f)]" },
];

export function MouseTrail() {
  const pool = useRef<Array<HTMLDivElement | null>>([]);
  const cursor = useRef(0);
  const last = useRef({ x: -999, y: -999 });

  function onMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const dx = event.clientX - last.current.x;
    const dy = event.clientY - last.current.y;
    if (dx * dx + dy * dy < 78 * 78) return;
    last.current = { x: event.clientX, y: event.clientY };
    const node = pool.current[cursor.current % pool.current.length];
    cursor.current += 1;
    if (!node) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const turn = Math.round((Math.random() - 0.5) * 16);
    node.style.transition = "none";
    node.style.opacity = "1";
    node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${turn}deg) scale(0.72)`;
    requestAnimationFrame(() => {
      node.style.transition = "transform 700ms cubic-bezier(.22,1,.36,1), opacity 1s ease";
      node.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${turn}deg) scale(1)`;
    });
    window.setTimeout(() => {
      node.style.opacity = "0";
    }, 780);
  }

  return (
    <section
      id="jejak"
      className="relative h-[100svh] min-h-[640px] overflow-hidden border-y border-white/10 bg-night"
      onPointerMove={onMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,0,255,0.16),transparent_55%)]" />
      {frames.map((frame, index) => (
        <div
          key={frame.label}
          ref={(node) => {
            pool.current[index] = node;
          }}
          className={`pointer-events-none absolute top-0 left-0 h-44 w-32 opacity-0 shadow-2xl ${frame.className}`}
          aria-hidden="true"
        >
          <span className="absolute bottom-2 left-2 font-serif text-sm text-white/80">{frame.label}</span>
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Jejak visual</p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-ink">
          Idea bergerak apabila ia dikongsi.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Gerakkan kursor merentasi ruang ini. Bingkai yang muncul ialah komposisi abstrak, bukan gambar projek sebenar.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex gap-3 overflow-hidden px-5 py-5 md:hidden" aria-hidden="true">
        {frames.slice(0, 5).map((frame) => (
          <div key={frame.label} className={`h-24 w-16 shrink-0 ${frame.className}`} />
        ))}
      </div>
    </section>
  );
}
