import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moon Kata - Apps",
  description: "I'm Aibek, a solo-developer building some cool stuff. Explore my apps and discover what I've been building.",
  keywords: "moonkata,apps,developer,solo,developer,building,cool,stuff,explore,discover,building",
  authors: [{ name: "Aibek" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://moonkata.com/apps",
  },
}

export default function Home() {
  return (
    <main className="w-full max-w-[500px] mx-auto px-5 pt-[100px] pb-[100px] space-y-[50px]">
      <section>
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to Moon Kata - Apps 👋
        </h1>
        <p className="opacity-50">
          I&apos;m Aibek, a solo-developer building some cool stuff. Explore my apps and discover what I&apos;ve been building.
        </p>
      </section>

      <section className="space-y-8">
        <div className="border border-white/10 rounded-[20px] p-6 hover:border-white/20 transition-colors">
          <div className="flex flex-col items-center gap-4 mb-4">
            <Image
              src="/legacy/vibely/assets/logo.png"
              alt="Vibely Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold">Vibely</h2>
            <p className="text-sm opacity-50">Music Visualizer</p>
          </div>
          <p className="opacity-70 mb-4 text-sm">
            The ultimate music visualizer app in your pocket. Make your music stand out on social media with stunning visuals - effortlessly.
          </p>
          <Link
            href="/apps/vibely"
            className="inline-block text-[#7A78FF] hover:underline font-medium"
          >
            Learn more →
          </Link>
        </div>
        <div className="border border-white/10 rounded-[20px] p-6 hover:border-white/20 transition-colors">
          <div className="flex flex-col items-center gap-4 mb-4">
            <Image
              src="/legacy/slouly/assets/logo.png"
              alt="Slouly Logo"
              width={60}
              height={60}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold">Slouly</h2>
            <p className="text-sm opacity-50">Music Speed Changer</p>
          </div>
          <p className="opacity-70 mb-4 text-sm">
            Transform your music with Slouly. Easily adjust tempo, pitch, and effects. Extract tracks from videos and create unique sound experiences.
          </p>
          <Link
            href="/apps/slouly"
            className="inline-block text-[#7A78FF] hover:underline font-medium"
          >
            Learn more →
          </Link>
        </div>
      </section>

      <section>
        <p className="opacity-50 text-sm">
          Developed with ❤️ by Aibek
        </p>
      </section>
    </main>
  );
}
