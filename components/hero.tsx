import Link from "next/link";
import FadeRotator,{Marquee} from "@/components/FadeRotator";
import GrowthChart from "@/components/growthChart";
import { business } from "@/config/business";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="relative bg-[#0a1628] text-white overflow-hidden">
      {/* subtle radial glow behind the chart */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(59, 246, 230, 0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          {/* LEFT: Text */}
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-[0.2em]">
              {business.name}
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {title}
            </h1>

            <p className="mt-6 text-lg text-blue-100/70 max-w-lg leading-relaxed">
              {description}
            </p>

            {/* Rotating statements */}
            <div className="mt-10 h-8">
              <FadeRotator
                interval={3500}
                fadeDuration={500}
                items={[
                  <p key="1" className="text-blue-300 font-medium">
                    Don't be left behind.
                  </p>,
                  <p key="2" className="text-blue-300 font-medium">
                    Growth happens online.
                  </p>,
                  <p key="3" className="text-blue-300 font-medium">
                    Your competitors are already there.
                  </p>,
                ]}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-blue-400/30 text-blue-100 rounded-lg hover:bg-blue-400/10 transition font-medium"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* RIGHT: Chart */}
          <div className="relative">
            <p className="text-2xl font-semibold text-green-500 text-sm uppercase">Website Growht worldwide</p>
            <GrowthChart />
          
          </div>

        </div>
      </div>
    </section>
  );
}