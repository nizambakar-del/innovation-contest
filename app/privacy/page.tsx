import type { Metadata } from "next";
import Link from "next/link";
import { eventInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dasar Privasi",
  description: "Cara laman Innovation Contest 2027 mengendalikan maklumat yang dimasukkan pada borang pratonton.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 md:px-10">
      <p className="text-[11px] tracking-[0.28em] text-gold uppercase">{eventInfo.organizer}</p>
      <h1 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-[-0.04em] md:text-6xl">
        Dasar Privasi
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
        <p>
          Laman ini ialah tapak maklumat untuk {eventInfo.name}. Borang penyertaan dan borang pertanyaan pada versi ini tidak menghantar data ke pelayan penganjur.
        </p>
        <p>
          Jika anda menekan simpan, nama, e-mel, telefon, organisasi dan teks yang anda tulis disimpan dalam localStorage pelayar pada peranti anda. Data itu tidak meninggalkan peranti melalui laman ini.
        </p>
        <p>
          Anda boleh memadamnya dengan membersihkan data laman pada pelayar. Menutup tetingkap tidak semestinya memadam localStorage.
        </p>
        <p>
          Apabila sistem rasmi dibuka, dasar privasi penganjur akan menerangkan tujuan pemprosesan, tempoh simpanan dan saluran untuk membuat pertanyaan. Dasar itu akan menggantikan nota pratonton ini.
        </p>
        <p>
          Laman ini tidak menggunakan papan iklan pihak ketiga dan tidak menjual data. Rakaman video latar ialah bahan domain awam NASA dan tidak mengandungi data peserta.
        </p>
        <p>
          <Link className="text-gold" href="/#utama">
            Kembali ke laman utama
          </Link>
        </p>
      </div>
    </article>
  );
}
