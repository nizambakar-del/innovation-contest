"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { EntryButton } from "@/components/entry-button";
import { useRegister } from "@/components/register-context";
import { navLinks } from "@/lib/content";
import { withBase } from "@/lib/base-path";
import { useLenis } from "lenis/react";

export function SiteNav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { open } = useRegister();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (menu || open) lenis.stop();
    else lenis.start();
  }, [lenis, menu, open]);

  function hrefFor(hash: string) {
    const onHome = pathname === "/" || pathname === "";
    return onHome ? hash : withBase(`/${hash}`);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || menu ? "border-b border-white/10 bg-night/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/#utama" className="shrink-0" aria-label="Innovation Contest 2027, ke halaman utama" onClick={() => setMenu(false)}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-4 min-[1400px]:flex" aria-label="Utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={hrefFor(link.href)}
              className="text-[11px] tracking-[0.14em] whitespace-nowrap text-muted uppercase transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <EntryButton className="hidden !min-h-11 !px-4 sm:inline-flex">Hantar Penyertaan</EntryButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-ink min-[1400px]:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu((value) => !value)}
          >
            <span className="sr-only">{menu ? "Tutup menu" : "Buka menu"}</span>
            {menu ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menu ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-night px-5 py-6 min-[1400px]:hidden" aria-label="Mudah alih">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={hrefFor(link.href)}
                  onClick={() => setMenu(false)}
                  className="block py-3 font-display text-3xl tracking-[-0.04em] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <EntryButton className="mt-6 w-full sm:hidden">Hantar Penyertaan</EntryButton>
        </nav>
      ) : null}
    </header>
  );
}
