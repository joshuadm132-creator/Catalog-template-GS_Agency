// components/testimonials.tsx
import Reveal from "@/components/Reveal";

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location: string;
};

type TestimonialsProps = {
  title: string;
  subtitle?: string;
  items: Testimonial[];
};

export default function Testimonials({
  title,
  subtitle,
  items,
}: TestimonialsProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
          )}
        </div>

        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <figure className="h-full p-6 md:p-8 rounded-2xl border border-border bg-surface flex flex-col">
                <blockquote className="flex-1">
                  <p className="text-text leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <p className="font-heading font-semibold text-text">
                    {t.author}
                  </p>
                  <p className="mt-1 text-sm text-text-muted">{t.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}