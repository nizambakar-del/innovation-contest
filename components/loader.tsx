"use client";

import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";

export function Loader() {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <div
      className="loader-screen fixed inset-0 z-[90] flex items-center justify-center bg-night"
      role="status"
      onAnimationEnd={() => setDone(true)}
    >
      <div className="text-center">
        <div className="flex justify-center">
          <BrandMark compact />
        </div>
        <p className="mt-6 font-display text-2xl tracking-[-0.04em] text-ink">Innovation Contest</p>
        <p className="mt-2 text-[11px] tracking-[0.32em] text-gold uppercase">2027</p>
      </div>
    </div>
  );
}
