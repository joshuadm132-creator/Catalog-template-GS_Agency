// components/catalogue-about.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type CatalogueAboutProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  cta?: { text: string; href: string };
  image?: string;
  awardCaption?: string;
};

export default function CatalogueAbout({
  eyebrow,
  title,
  paragraphs,
  cta,
  image,
  awardCaption,
}: CatalogueAboutProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image column */}
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-text-muted/60 text-sm">
                    image coming soon
                  </div>
                )}
              </div>
              {awardCaption && (
                <p className="mt-3 text-xs text-center text-text-muted uppercase tracking-wider">
                  {awardCaption}
                </p>
              )}
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal delay={150}>
            <div>
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {eyebrow}
                </p>
              )}
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-bold text-text leading-tight">
                {title}
              </h2>
              <div className="mt-6 space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary text-text-inverse hover:bg-primary-hover transition font-semibold"
                >
                  {cta.text}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}