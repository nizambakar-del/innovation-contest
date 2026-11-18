import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { eventInfo, navLinks } from "@/lib/content";

const channels = ["LinkedIn", "Instagram", "Facebook", "YouTube"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 pt-16 pb-8 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <BrandMark />
          <p className="max-w-sm font-serif text-4xl leading-none text-ink md:text-6xl">{eventInfo.theme}</p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Penganjur</p>
            <p className="mt-4 text-ink">{eventInfo.organizer}</p>
            <p className="text-sm text-muted">{eventInfo.organizerEn}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{eventInfo.venue}</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Pautan</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a className="text-sm text-muted hover:text-ink" href={`/${link.href}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Hubungan</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">E-mel</dt>
                <dd className="text-ink">Belum disiarkan</dd>
              </div>
              <div>
                <dt className="text-muted">Telefon</dt>
                <dd className="text-ink">Belum disiarkan</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Sosial</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Saluran sosial">
              {channels.map((channel) => (
                <li key={channel}>
                  <span
                    className="inline-flex border border-white/15 px-3 py-2 text-[11px] tracking-[0.14em] text-muted uppercase"
                    title={`${channel} belum diumumkan`}
                  >
                    {channel}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Akaun rasmi akan diumumkan.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2027 {eventInfo.organizer}. Hak cipta terpelihara.</p>
          <Link className="hover:text-ink" href="/privacy">
            Dasar Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}
