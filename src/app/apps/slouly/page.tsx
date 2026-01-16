import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slouly - Music Speed Changer",
  description: "Transform your music with Slouly. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences. Try for free on iOS.",
  keywords: "music speed changer, tempo, pitch, reverb, audio effects, music app, iOS, music editing, audio processing",
  authors: [{ name: "Aibek" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://moonkata.com/apps/slouly",
  },
  openGraph: {
    type: "website",
    url: "https://moonkata.com/apps/slouly",
    title: "Slouly - Music Speed Changer",
    description: "Transform your music with Slouly. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences. Try for free on iOS.",
    images: [
      {
        url: "https://moonkata.com/apps/sloulyassets/preview.png",
        width: 1200,
        height: 630,
        alt: "Slouly - Music Speed Changer App Interface",
      },
    ],
    siteName: "Slouly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slouly - Music Speed Changer",
    description: "Transform your music with Slouly. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences. Try for free on iOS.",
    images: ["https://moonkata.com/apps/sloulyassets/preview.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Slouly",
  },
  other: {
    "apple-itunes-app": "app-id=6748889278",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Slouly",
  description: "Transform your music with Slouly. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences.",
  url: "https://moonkata.com/apps/slouly",
  image: "https://moonkata.com/apps/sloulyassets/preview.png",
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

export default function SloulyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full max-w-[500px] mx-auto px-5 pt-[100px] pb-[100px] space-y-[50px]">
        <section>
          <Image
            src="/legacy/slouly/assets/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <p className="opacity-50 mt-4">Slouly - Music Speed Changer</p>
        </section>

        <section>
          <h1 className="text-3xl font-semibold mb-4">
            Slow it down. Speed it up. Make it yours.
          </h1>
          <br />
          <p className="opacity-50">
            Easily adjust music tempo, pitch, and effects. Extract tracks from your videos and create unique sound experiences.
          </p>
        </section>

        <video
          muted
          loop
          autoPlay
          playsInline
          poster="/legacy/slouly/assets/preview.png"
          preload="none"
          className="w-full max-w-[250px] rounded-[20px] mx-auto"
        >
          <source src="/legacy/slouly/assets/preview.webm" type="video/webm" />
          <source src="/legacy/slouly/assets/preview.mp4" type="video/mp4" />
        </video>

        <section>
          <h2 className="text-2xl font-semibold">
            Slouly makes it simple to transform your music.
          </h2>
        </section>

        <section>
          <ul className="list-none space-y-2.5">
            <li>🎵 Change tempo without altering pitch</li>
            <li>🎚️ Adjust pitch to match your mood</li>
            <li>🌊 Add reverb for depth and space</li>
            <li>📂 Import from Files or extract audio from videos in Photos</li>
            <li>📈 Intuitive interface for creators, musicians, and everyday listeners</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">
            Try for free. Upgrade once to unlock exporting and save your masterpieces forever.
          </h2>
        </section>

        <section>
          <a
            href="https://apps.apple.com/app/id6748889278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/legacy/slouly/assets/appstore.svg"
              alt="AppStore"
              width={150}
              height={44}
              className="mx-auto"
            />
          </a>
        </section>

        <section>
          <a
            href="https://apps.apple.com/app/id6748889278"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2.5 inline-block rounded-[20px]"
          >
            <Image
              src="/legacy/slouly/assets/qr.svg"
              alt="QR"
              width={150}
              height={150}
              className="mx-auto"
            />
          </a>
        </section>

        <section>
          <p className="opacity-50">Developed with ❤️ by Aibek</p>
        </section>

        <footer className="flex items-center justify-center gap-2">
          <Link href="/" className="text-[#7A78FF]">
            Home
          </Link>
          <span>·</span>
          <Link href="/apps/slouly/privacy" className="text-[#7A78FF]">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/apps/slouly/terms" className="text-[#7A78FF]">
            Terms of Use
          </Link>
        </footer>
      </main>
    </>
  );
}
