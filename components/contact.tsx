"use client";

import { useState } from "react";
import { eventInfo } from "@/lib/content";

type Fields = { nama: string; emel: string; organisasi: string; mesej: string };
const empty: Fields = { nama: "", emel: "", organisasi: "", mesej: "" };

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [saved, setSaved] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: Partial<Fields> = {};
    if (values.nama.trim().length < 3) next.nama = "Masukkan nama.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emel)) next.emel = "Masukkan e-mel yang sah.";
    if (values.organisasi.trim().length < 2) next.organisasi = "Masukkan organisasi.";
    if (values.mesej.trim().length < 12) next.mesej = "Mesej terlalu pendek.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    try {
      const existing = JSON.parse(localStorage.getItem("ic2027-messages") ?? "[]") as unknown[];
      localStorage.setItem(
        "ic2027-messages",
        JSON.stringify([{ ...values, savedAt: new Date().toISOString() }, ...existing].slice(0, 20)),
      );
    } catch {
      // Keep the on-screen confirmation even if storage is blocked.
    }
    setSaved(true);
    setValues(empty);
  }

  return (
    <section id="hubungi" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">13 · Hubungan</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">
            Hubungi Kami
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Pertanyaan rasmi akan dijawab melalui saluran yang diumumkan oleh penganjur. Sehingga itu, borang ini hanya menyimpan mesej pada pelayar anda.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">Penganjur</dt>
              <dd className="mt-1 text-lg text-ink">{eventInfo.organizer}</dd>
              <dd className="text-muted">{eventInfo.organizerEn}</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">E-mel</dt>
              <dd className="mt-1 text-ink">Belum disiarkan</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">Telefon</dt>
              <dd className="mt-1 text-ink">Belum disiarkan</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">Majlis</dt>
              <dd className="mt-1 text-ink">{eventInfo.venue}</dd>
              <dd className="text-muted">{eventInfo.ceremony}</dd>
            </div>
          </dl>
        </div>

        {saved ? (
          <div className="border border-gold/40 bg-gold/10 p-8" role="status">
            <p className="font-display text-3xl tracking-[-0.03em]">Mesej disimpan pada pelayar ini.</p>
            <p className="mt-4 leading-relaxed text-muted">
              Ia belum dihantar ke peti masuk penganjur. Simpan pertanyaan anda sehingga e-mel rasmi disiarkan.
            </p>
            <button type="button" className="btn btn-ghost mt-6" onClick={() => setSaved(false)}>
              Tulis mesej lain
            </button>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={onSubmit} noValidate>
            <label>
              <span className="label">Nama</span>
              <input className={`field ${errors.nama ? "field-error" : ""}`} value={values.nama} onChange={(event) => setValues({ ...values, nama: event.target.value })} autoComplete="name" />
              {errors.nama ? <span className="mt-2 block text-sm text-[#e7a0a0]">{errors.nama}</span> : null}
            </label>
            <label>
              <span className="label">E-mel</span>
              <input className={`field ${errors.emel ? "field-error" : ""}`} type="email" value={values.emel} onChange={(event) => setValues({ ...values, emel: event.target.value })} autoComplete="email" />
              {errors.emel ? <span className="mt-2 block text-sm text-[#e7a0a0]">{errors.emel}</span> : null}
            </label>
            <label>
              <span className="label">Organisasi</span>
              <input className={`field ${errors.organisasi ? "field-error" : ""}`} value={values.organisasi} onChange={(event) => setValues({ ...values, organisasi: event.target.value })} />
              {errors.organisasi ? <span className="mt-2 block text-sm text-[#e7a0a0]">{errors.organisasi}</span> : null}
            </label>
            <label>
              <span className="label">Mesej</span>
              <textarea className={`field min-h-36 ${errors.mesej ? "field-error" : ""}`} value={values.mesej} onChange={(event) => setValues({ ...values, mesej: event.target.value })} />
              {errors.mesej ? <span className="mt-2 block text-sm text-[#e7a0a0]">{errors.mesej}</span> : null}
            </label>
            <button type="submit" className="btn btn-gold justify-self-start">
              Simpan mesej
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
