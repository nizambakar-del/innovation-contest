import { winners } from "@/lib/content";

export function Winners() {
  return (
    <section id="pemenang" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="mb-4 text-[11px] tracking-[0.28em] text-gold uppercase">08 · Galeri contoh</p>
          <h2 className="font-display text-[clamp(2.2rem,4.6vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.04em]">
            Inspirasi Daripada Pemenang Terdahulu
          </h2>
          <p className="mt-6 border border-gold/40 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-gold-2">
            Kandungan demonstrasi. Bukan pemenang sebenar. Tiada organisasi, projek atau hasil di bawah ini yang sebenar.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {winners.map((item, index) => (
            <article
              key={item.title}
              className={`grid overflow-hidden border border-white/10 bg-night-2 md:grid-cols-12 ${
                index === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`relative min-h-72 bg-gradient-to-br md:col-span-7 ${item.wash}`}>
                <div className="absolute inset-6 border border-white/15" />
                <div className="absolute top-10 left-10 text-[11px] tracking-[0.22em] text-white/80 uppercase">
                  Demonstrasi
                </div>
                <p className="absolute right-8 bottom-8 font-serif text-7xl text-white/15">0{index + 1}</p>
              </div>
              <div className="flex flex-col justify-between p-7 md:col-span-5 md:p-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-gold uppercase">{item.category}</p>
                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-4 text-sm text-muted">{item.organization}</p>
                </div>
                <p className="mt-8 leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
