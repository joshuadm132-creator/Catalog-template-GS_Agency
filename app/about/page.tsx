// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { business } from "@/config/business";
import AboutContent from "@/components/AboutContent";
import StatsBand from "@/components/stats-band";
import AwardsList from "@/components/awards-list";
import CtaBand from "@/components/cta-band";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: business.About.intro.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* ============================================================
          Section 1 — Hero (dark)
          ============================================================ */}
      <section className="relative bg-hero-bg text-hero-text overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 30%, var(--color-primary), transparent 55%)",
            opacity: 0.15,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            {/* Left: copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {business.About.intro.eyebrow}
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight leading-[1.05]">
                {business.About.intro.headline}
              </h1>

              <p className="mt-6 text-lg text-hero-text/75 leading-relaxed max-w-xl">
                {business.About.intro.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-lg bg-primary text-text-inverse hover:bg-primary-hover transition font-semibold"
                >
                  Browse Products
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg border border-hero-text/25 text-hero-text hover:bg-hero-text/10 transition font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: award image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-hero-text/5 border border-hero-text/10">
                <Image
                  src="/images/gs/award.png"
                  alt="National Quality Gold Winner award"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-center text-hero-text/50 uppercase tracking-wider">
                National Quality Gold Winner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 2 — Story (white) with pull quote
          ============================================================ */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase text-center">
              {business.About.title}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
            {/* Image */}
            <Reveal>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
                <Image
                  src={business.About.content[0].image ?? "/images/gs/award.png"}
                  alt={business.About.content[0].subtitle ?? "G & S Chemicals"}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={150}>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                  {business.About.content[0].subtitle}
                </p>

                {business.About.content[0].paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}

                {/* Pull quote */}
                {business.About.pullQuote && (
                  <blockquote className="mt-8 border-l-2 border-primary pl-6">
                    <p className="text-lg md:text-xl font-heading italic text-text leading-relaxed">
                      &ldquo;{business.About.pullQuote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          Section 3 — Stats (surface)
          ============================================================ */}
      <StatsBand stats={business.About.stats} background="gray" />

      {/* ============================================================
          Section 4 — Vision & Mission (white)
          ============================================================ */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Vision */}
          <Reveal>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                ◆
              </div>
              <h3 className="mt-6 text-2xl font-heading font-bold text-text">
                Our Vision
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                {business.About.vision}
              </p>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={150}>
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">
                ▲
              </div>
              <h3 className="mt-6 text-2xl font-heading font-bold text-text">
                Our Mission
              </h3>
              <p className="mt-4 text-text-muted leading-relaxed">
                {business.About.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          Section 5 — Awards (surface)
          ============================================================ */}
      <AwardsList
        title="Built on Excellence. Backed by Awards."
        subtitle="Our awards celebrate not just our products, but the people and passion behind them."
        awards={business.About.awards}
        background="gray"
      />

      {/* ============================================================
          Section 6 — CTA (dark)
          ============================================================ */}
      <CtaBand
        headline="Ready to place an order?"
        description="Browse our full range of TECHIAD products or send us a quote request directly."
        cta={{ text: "Browse Products", href: "/products" }}
        variant="dark"
      />
    </main>
  );
}