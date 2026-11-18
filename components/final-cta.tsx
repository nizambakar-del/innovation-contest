import { EntryButton } from "@/components/entry-button";

export function FinalCta() {
  return (
    <section id="penutup" className="relative overflow-hidden px-5 py-32 md:px-10 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,181,109,0.22),transparent_58%)]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-1/2 h-[40vw] w-[70vw] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-[11px] tracking-[0.32em] text-gold uppercase">12 · Seruan</p>
        <h2 className="mt-6 font-display text-[clamp(3.2rem,8vw,7rem)] leading-[0.88] font-semibold tracking-[-0.05em]">
          Future Innovation
          <span className="mt-2 block font-serif font-normal text-gold italic">Start Here</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Jangan biarkan idea hebat hanya menjadi perancangan. Ketengahkan inovasi anda dan jadilah sebahagian daripada perubahan.
        </p>
        <div className="mt-10">
          <EntryButton>Hantar Penyertaan Sekarang</EntryButton>
        </div>
      </div>
    </section>
  );
}
