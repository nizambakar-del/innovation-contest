"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { categories } from "@/lib/content";
import { useRegister } from "@/components/register-context";

type Fields = {
  nama: string;
  emel: string;
  telefon: string;
  agensi: string;
  pasukan: string;
  kategori: string;
  tajuk: string;
  ringkasan: string;
  asal: boolean;
  privasi: boolean;
};

const empty: Fields = {
  nama: "",
  emel: "",
  telefon: "",
  agensi: "",
  pasukan: "",
  kategori: "",
  tajuk: "",
  ringkasan: "",
  asal: false,
  privasi: false,
};

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.nama.trim().length < 3) errors.nama = "Masukkan nama pegawai.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emel)) errors.emel = "Masukkan e-mel yang sah.";
  if (values.telefon.replace(/\D/g, "").length < 9) errors.telefon = "Masukkan nombor telefon.";
  if (values.agensi.trim().length < 2) errors.agensi = "Masukkan nama agensi.";
  if (values.pasukan.trim().length < 2) errors.pasukan = "Masukkan nama pasukan.";
  if (!values.kategori) errors.kategori = "Pilih satu kategori.";
  if (values.tajuk.trim().length < 4) errors.tajuk = "Masukkan tajuk inovasi.";
  if (values.ringkasan.trim().length < 40) errors.ringkasan = "Ringkasan perlu sekurang-kurangnya 40 aksara.";
  if (!values.asal) errors.asal = "Perakuan keaslian diperlukan.";
  if (!values.privasi) errors.privasi = "Persetujuan privasi diperlukan.";
  return errors;
}

export function RegisterDialog() {
  const { open, closeRegister } = useRegister();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [reference, setReference] = useState<string | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const root = panel.current;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = () =>
      Array.from(
        root?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), textarea, input, select") ?? [],
      );
    const timer = window.setTimeout(() => focusable()[0]?.focus(), 30);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeRegister();
      if (event.key !== "Tab" || !root) return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, closeRegister, reference]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const code = `IC27-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const record = { ...values, code, savedAt: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem("ic2027-entries") ?? "[]") as unknown[];
      localStorage.setItem("ic2027-entries", JSON.stringify([record, ...existing].slice(0, 20)));
    } catch {
      // Storage can be unavailable. The confirmation still shows for this session.
    }
    setReference(code);
  }

  function close() {
    closeRegister();
    setValues(empty);
    setErrors({});
    setReference(null);
  }

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          data-lenis-prevent
          className="max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-gold/30 bg-night p-6 shadow-2xl md:p-8"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-gold uppercase">Penyertaan dalam talian</p>
              <h2 id={titleId} className="mt-2 font-display text-4xl tracking-[-0.04em]">
                Hantar Penyertaan
              </h2>
            </div>
            <button type="button" onClick={close} className="text-[11px] tracking-[0.16em] text-muted uppercase">
              Tutup
            </button>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Ini pratonton borang. Butiran disimpan pada pelayar ini sahaja dan belum dihantar kepada penganjur. Rujukan yang terhasil bukan nombor penyertaan rasmi.
          </p>

          {reference ? (
            <div className="mt-8 border border-gold/40 bg-gold/10 p-6" role="status">
              <p className="text-[11px] tracking-[0.2em] text-gold uppercase">Disimpan pada pelayar ini</p>
              <p className="mt-3 font-serif text-4xl text-ink">{reference}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Rujukan pratonton. Ia tidak mengesahkan penerimaan oleh Kementerian Komunikasi.
              </p>
              <button type="button" className="btn btn-gold mt-6" onClick={close}>
                Kembali ke laman
              </button>
            </div>
          ) : (
            <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={onSubmit} noValidate>
              <Field label="Nama pegawai" error={errors.nama}>
                <input className={`field ${errors.nama ? "field-error" : ""}`} value={values.nama} onChange={(event) => update("nama", event.target.value)} autoComplete="name" />
              </Field>
              <Field label="E-mel rasmi" error={errors.emel}>
                <input className={`field ${errors.emel ? "field-error" : ""}`} type="email" value={values.emel} onChange={(event) => update("emel", event.target.value)} autoComplete="email" />
              </Field>
              <Field label="Telefon" error={errors.telefon}>
                <input className={`field ${errors.telefon ? "field-error" : ""}`} type="tel" value={values.telefon} onChange={(event) => update("telefon", event.target.value)} autoComplete="tel" />
              </Field>
              <Field label="Agensi" error={errors.agensi}>
                <input className={`field ${errors.agensi ? "field-error" : ""}`} value={values.agensi} onChange={(event) => update("agensi", event.target.value)} />
              </Field>
              <Field label="Nama pasukan" error={errors.pasukan}>
                <input className={`field ${errors.pasukan ? "field-error" : ""}`} value={values.pasukan} onChange={(event) => update("pasukan", event.target.value)} />
              </Field>
              <Field label="Kategori" error={errors.kategori}>
                <select className={`field ${errors.kategori ? "field-error" : ""}`} value={values.kategori} onChange={(event) => update("kategori", event.target.value)}>
                  <option value="">Pilih kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Tajuk inovasi" error={errors.tajuk}>
                  <input className={`field ${errors.tajuk ? "field-error" : ""}`} value={values.tajuk} onChange={(event) => update("tajuk", event.target.value)} />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Ringkasan" error={errors.ringkasan}>
                  <textarea className={`field min-h-32 ${errors.ringkasan ? "field-error" : ""}`} value={values.ringkasan} onChange={(event) => update("ringkasan", event.target.value)} />
                </Field>
              </div>
              <label className="flex items-start gap-3 text-sm text-muted md:col-span-2">
                <input type="checkbox" className="mt-1" checked={values.asal} onChange={(event) => update("asal", event.target.checked)} />
                <span>Saya memperakui inovasi ini adalah hasil pasukan yang dinamakan, dan maklumat yang diberi tidak mengandungi rahsia rasmi.</span>
              </label>
              {errors.asal ? <p className="text-sm text-[#e7a0a0] md:col-span-2">{errors.asal}</p> : null}
              <label className="flex items-start gap-3 text-sm text-muted md:col-span-2">
                <input type="checkbox" className="mt-1" checked={values.privasi} onChange={(event) => update("privasi", event.target.checked)} />
                <span>
                  Saya faham butiran ini disimpan pada pelayar dan belum dihantar kepada penganjur. Lihat{" "}
                  <Link href="/privacy" className="text-gold underline" onClick={close}>
                    dasar privasi
                  </Link>
                  .
                </span>
              </label>
              {errors.privasi ? <p className="text-sm text-[#e7a0a0] md:col-span-2">{errors.privasi}</p> : null}
              <div className="md:col-span-2">
                <button type="submit" className="btn btn-gold">
                  Simpan pratonton
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-[#e7a0a0]">{error}</span> : null}
    </label>
  );
}
