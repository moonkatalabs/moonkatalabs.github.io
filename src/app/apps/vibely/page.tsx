import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vibely - Music Visualizer",
  description: "The ultimate music visualizer app in your pocket. Make your music stand out on social media with stunning visuals - effortlessly",
};

export default function VibelyPage() {
  return (
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

      <section>
        <h3 className="text-xl font-semibold mb-4">Contact</h3>
        <br />
        <a href="mailto:contact@moonkata.com" className="text-[#7A78FF]">
          contact@moonkata.com
        </a>
      </section>

      <footer className="flex items-center justify-center gap-2">
        <Link href="/" className="text-[#7A78FF]">
          Home
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
  );
}
