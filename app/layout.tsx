import type { Metadata } from "next";
import { Instrument_Serif, Outfit, Syne } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";
import { RegisterDialog } from "@/components/register-dialog";
import { RegisterProvider } from "@/components/register-context";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { eventInfo } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const description =
  "Platform pengiktirafan Kementerian Komunikasi bagi idea kreatif, inovasi berimpak tinggi dan penyelesaian transformatif. Majlis pada 8 Ogos 2027 di Putrajaya.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${eventInfo.name} | ${eventInfo.theme}`,
    template: `%s | ${eventInfo.name}`,
  },
  description,
  keywords: [
    "Innovation Contest 2027",
    "Anugerah Inovasi",
    "Kementerian Komunikasi",
    "Innovation Go Global",
    "Putrajaya",
  ],
  openGraph: {
    title: `${eventInfo.name} — ${eventInfo.theme}`,
    description,
    type: "website",
    locale: "ms_MY",
    siteName: eventInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${eventInfo.name} — ${eventInfo.theme}`,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ms" className={`${outfit.variable} ${syne.variable} ${instrument.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SmoothScroll>
          <RegisterProvider>
            <a
              href="#kandungan"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
            >
              Langkau ke kandungan
            </a>
            <Suspense fallback={null}>
              <SiteNav />
            </Suspense>
            <Loader />
            <main id="kandungan">{children}</main>
            <Footer />
            <RegisterDialog />
          </RegisterProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
