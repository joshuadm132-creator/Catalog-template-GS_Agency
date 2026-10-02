// components/cta-band.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

type CtaBandProps = {
  headline: string;
  description?: string;
  cta: { text: string; href: string };
  /** "dark" (default) or "primary" — a red CTA variant */
  variant?: "dark" | "primary";
};

export default function CtaBand({
  headline,
  description,
  cta,
  variant = "dark",
}: CtaBandProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`py-20 px-6 ${
        isPrimary ? "bg-primary text-text-inverse" : "bg-hero-bg text-hero-text"
      }`}
    >
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            {headline}
          </h2>

          {description && (
            <p
              className={`mt-4 text-lg leading-relaxed ${
                isPrimary ? "text-text-inverse/85" : "text-hero-text/70"
              }`}
            >
              {description}
            </p>
          )}

          <Link
            href={cta.href}
            className={`
              inline-flex items-center gap-2
              mt-8 px-7 py-3 rounded-lg
              font-semibold transition
              ${
                isPrimary
                  ? "bg-text-inverse text-primary hover:bg-text-inverse/90"
                  : "bg-primary text-text-inverse hover:bg-primary-hover"
              }
            `}
          >
            {cta.text}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}