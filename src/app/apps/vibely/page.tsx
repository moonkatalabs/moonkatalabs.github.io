import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Accordion, { AccordionItem } from "./Accordion";

export const metadata: Metadata = {
  title: "Vibely - Music Visualizer",
  description: "The ultimate music visualizer app in your pocket. Make your music stand out on social media with stunning visuals - effortlessly",
  keywords: "vibely,music visualizer,easy,audio,visualization,maker,viral,tiktok,spectrum,waveform,intro,editor,vizzy,vythm,superplay,ableton,youtube,spotify,soundcloud",
  authors: [{ name: "Aibek Mazhitov" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://moonkata.com/apps/vibely",
  },
  openGraph: {
    type: "website",
    url: "https://moonkata.com/apps/vibely",
    title: "Vibely - Music Visualizer",
    description: "The ultimate music visualizer app in your pocket. Make your music stand out on social media with stunning visuals - effortlessly",
    images: [
      {
        url: "https://moonkata.com/apps/vibelyassets/preview.png",
        width: 1200,
        height: 630,
        alt: "Vibely - Music Visualizer",
      },
    ],
    siteName: "Vibely",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibely - Music Visualizer",
    description: "The ultimate music visualizer app in your pocket. Make your music stand out on social media with stunning visuals - effortlessly",
    images: ["https://moonkata.com/apps/vibelyassets/preview.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Vibely",
  },
  other: {
    "apple-itunes-app": "app-id=6748889278",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vibely",
  description: "Transform your music with Vibely. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences.",
  url: "https://moonkata.com/apps/vibely",
  image: "https://moonkata.com/apps/vibelyassets/preview.png",
  applicationCategory: "MusicApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Aibek",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
};

export default function VibelyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="flex items-center justify-center bg-slate-900 p-2">
        <Link href="/" className="text-white">
          Moon Kata
        </Link>
      </section>
      <main className="w-full max-w-[500px] mx-auto px-5 pt-[100px] pb-[100px] space-y-[50px]">
        <section>
          <Image
            src="/legacy/vibely/assets/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <p className="opacity-50 mt-4">Vibely - Music Visualizer</p>
        </section>

        <section>
          <h1 className="text-3xl font-semibold mb-4">
            The ultimate music visualizer app in your pocket
          </h1>
          <br />
          <p className="opacity-50">
            Make your music stand out on social media with stunning visuals - effortlessly
          </p>
        </section>

        <video
          muted
          loop
          autoPlay
          playsInline
          poster="/legacy/vibely/assets/preview.png"
          preload="none"
          className="w-full max-w-[250px] rounded-[20px] mx-auto"
        >
          <source src="/legacy/vibely/assets/preview.webm" type="video/webm" />
          <source src="/legacy/vibely/assets/preview.mp4" type="video/mp4" />
        </video>

        <section>
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/legacy/vibely/assets/appstore.svg"
              alt="AppStore"
              width={150}
              height={44}
              className="mx-auto"
            />
          </a>
        </section>

        <section>
          <a
            href="https://apps.apple.com/app/id1528056717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/legacy/vibely/assets/qr.png"
              alt="QR"
              width={150}
              height={150}
              className="mx-auto rounded-[20px]"
            />
          </a>
        </section>

        <section id="known-issues" className="scroll-mt-[100px]">
          <h2 className="text-2xl font-semibold mb-6">Known issues</h2>
          
          <Accordion>
            <AccordionItem title="Video aspect ratio is 9:16">
              Some users have reported that changing the aspect ratio doesn't work while exporting. I'm working on the fix right now.
            </AccordionItem>

            <AccordionItem title="Video freezes">
              Sometimes video playback gets stuck. This is known issue introduced by iOS 26 and many developers reported this weird behaviour of AVPlayerLooper. Hopefully, Apple developers will fix this issue soon. As a workaround try adjusting the player progress bar, reloading the music or setting other background options to fix it. After doing this the player loads the correct state and you can keep creating audio visualizations.
            </AccordionItem>

            <AccordionItem title="Slow export">
              Currently exporting takes very long especially for longer audio files and high export settings like 60fsp/4k resolution. The rendering process is complex by its nature especially if there are lots of visual effects and visualizers playing simultaneously. However I'm working on optimizing the render pipeline and making it faster in future updates. Please be aware with me, I'm trying my best.
            </AccordionItem>

            <AccordionItem title="Export breaks on 100%">
              Some of you reported to me that export fails towards the end (100%) and the video is lost. The common reason is because your device storage is full. Try removing some media files from Photos app and cleaning the trash making more space for Vibely videos.
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <br />
          <a href="mailto:contact@moonkata.com" className="text-[#7A78FF]">
            contact@moonkata.com
          </a>
        </section>

        <footer className="flex items-center justify-center gap-2">
          <Link href="/" className="text-[#7A78FF]">
            Moon Kata
          </Link>
          <span>·</span>
          <Link href="/apps/vibely/privacy" className="text-[#7A78FF]">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/apps/vibely/terms" className="text-[#7A78FF]">
            Terms of Use
          </Link>
        </footer>
      </main>
    </>
  );
}
