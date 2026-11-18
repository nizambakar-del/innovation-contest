"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          autoRaf: true,
          lerp: 0.085,
          anchors: { offset: -84 },
          stopInertiaOnNavigate: true,
          prevent: (node) => Boolean(node.closest("[data-lenis-prevent]")),
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
