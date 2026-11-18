import { About } from "@/components/about";
import { Categories } from "@/components/categories";
import { Contact } from "@/components/contact";
import { Criteria } from "@/components/criteria";
import { Dates } from "@/components/dates";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Guidelines } from "@/components/guidelines";
import { Hero } from "@/components/hero";
import { MouseTrail } from "@/components/mouse-trail";
import { Process } from "@/components/process";
import { Rules } from "@/components/rules";
import { VideoChapter } from "@/components/video-chapter";
import { WhyParticipate } from "@/components/why";
import { Winners } from "@/components/winners";
import { eventInfo } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventInfo.name,
  description: eventInfo.theme,
  startDate: eventInfo.ceremonyIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Millennium Ballroom, Le Méridien Hotel",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Putrajaya",
      addressCountry: "MY",
    },
  },
  organizer: {
    "@type": "Organization",
    name: eventInfo.organizerEn,
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <About />
      <MouseTrail />
      <Categories />
      <WhyParticipate />
      <Process />
      <Criteria />
      <Dates />
      <VideoChapter />
      <Winners />
      <Rules />
      <Guidelines />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
