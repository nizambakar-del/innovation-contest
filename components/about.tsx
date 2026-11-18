import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { eventInfo, objectives } from "@/lib/content";

export function About() {
  return (
    <section id="mengenai" className="relative px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Mengenai anugerah"
            title="Mengiktiraf Inovasi. Meraikan Kecemerlangan."
          />
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              {eventInfo.name} ialah platform pengiktirafan {eventInfo.organizer} untuk idea yang lahir dalam sektor awam dan cukup matang untuk dikongsi di luar organisasi asalnya.
            </p>
            <p>
              Tema {eventInfo.theme} menegaskan satu peralihan: inovasi tidak dinilai semata-mata kerana ia baharu, tetapi kerana ia meningkatkan kecemerlangan, impaknya dapat diterangkan, dan ia boleh dikembangkan dengan bertanggungjawab.
            </p>
            <p>
              Majlis pada {eventInfo.ceremony} mengumpulkan pasukan yang terpilih di {eventInfo.venue}. Pentas itu ialah ruang pengiktirafan, dan juga ruang untuk agensi lain belajar daripada amalan yang sudah diuji.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden border border-white/10 bg-plum">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(191,0,255,0.35),transparent_46%),radial-gradient(circle_at_50%_70%,rgba(214,181,109,0.2),transparent_40%)]" />
            <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40 orbit" />
            <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/50 orbit-reverse" />
            <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />
            <div className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-night/80 font-serif text-gold">
              27
            </div>
            <div className="absolute right-6 bottom-6 left-6 border border-white/10 bg-night/70 p-5 backdrop-blur-md">
              <p className="text-[11px] tracking-[0.22em] text-gold uppercase">Tema</p>
              <p className="mt-2 font-serif text-3xl text-ink">{eventInfo.theme}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <ol className="mx-auto mt-20 grid max-w-[1440px] border-t border-white/10 md:grid-cols-5">
        {objectives.map((item, index) => (
          <li key={item.title} className="border-b border-white/10 px-0 py-8 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-r-0">
            <p className="font-serif text-3xl text-gold">0{index + 1}</p>
            <h3 className="mt-4 text-base leading-snug text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
