"use client";

import { ArrowUpRight } from "lucide-react";
import { useRegister } from "@/components/register-context";

type Variant = "gold" | "ghost";

export function EntryButton({
  children,
  variant = "gold",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { openRegister } = useRegister();

  return (
    <button
      type="button"
      onClick={openRegister}
      className={`btn ${variant === "gold" ? "btn-gold" : "btn-ghost"} ${className}`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
