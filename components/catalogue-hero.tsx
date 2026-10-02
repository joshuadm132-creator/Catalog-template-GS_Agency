// components/catalogue-hero.tsx
import Image from "next/image";
import Link from "next/link";

type CatalogueHeroProps = {
  eyebrow?: string;
  headline: string;
  description: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image?: string;
};

export default function CatalogueHero({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  image,
}: CatalogueHeroProps) {
  return (
    <section className="relative bg-hero-bg text-hero-text overflow-hidden">
      {/* Ambient red glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 40%, var(--color-primary), transparent 55%)",
          opacity: 0.18,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left: copy */}
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1]">
              {headline}
            </h1>

            <p className="mt-6 text-lg text-hero-text/75 leading-relaxed max-w-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={primaryCta.href}
                className="px-6 py-3 rounded-lg bg-primary text-text-inverse hover:bg-primary-hover transition font-semibold"
              >
                {primaryCta.text}
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="px-6 py-3 rounded-lg border border-hero-text/25 text-hero-text hover:bg-hero-text/10 transition font-semibold"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            {image ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-hero-text/5 border border-hero-text/10">
                <Image
                  src={image}
                  alt={headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-2xl bg-hero-text/5 border border-dashed border-hero-text/20 flex items-center justify-center">
                <p className="text-sm text-hero-text/40">
                  Product imagery coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}