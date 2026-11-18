"use client";

import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/base-path";

export function VideoChapter() {
  const wrap = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setReady(true);
      },
      { rootMargin: "240px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || !video.current) return;
    video.current.play().catch(() => setFailed(true));
  }, [ready]);

  return (
    <section ref={wrap} id="angkasa" className="relative min-h-screen overflow-hidden bg-night">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(191,0,255,0.28),transparent_32%),radial-gradient(circle_at_30%_70%,rgba(214,181,109,0.18),transparent_28%),#07040f]" />
      {ready && !failed ? (
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          muted
          loop
          playsInline
          preload="none"
          poster={withBase("/poster.svg")}
          onError={() => setFailed(true)}
        >
          <source src={withBase("/space.webm")} type="video/webm" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/25" />
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 py-24 md:px-10 md:py-28">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">07 · Di luar dewan</p>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] font-semibold tracking-[-0.05em]">
          The work leaves the room.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/90">
          Inovasi sektor awam tidak semestinya kekal di dalam bangunan tempat ia dicipta. Tema tahun ini mengajak pasukan membina sesuatu yang boleh difahami, digunakan dan dikembangkan dengan lebih luas.
        </p>
        <p className="mt-8 text-[11px] tracking-[0.16em] text-muted uppercase">
          Rakaman Stesen Angkasa Antarabangsa, NASA. Domain awam.
        </p>
      </div>
    </section>
  );
}
