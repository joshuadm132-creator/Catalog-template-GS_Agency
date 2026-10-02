// components/category-strip.tsx
import Link from "next/link";
import { categories } from "@/config/products";
import Reveal from "@/components/Reveal";

type CategoryStripProps = {
  title: string;
  subtitle?: string;
  /** Icons for each category, keyed by category id */
  icons?: Record<string, string>;
};

export default function CategoryStrip({
  title,
  subtitle,
  icons = {},
}: CategoryStripProps) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text uppercase">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <Link
                href={`/products?category=${cat.id}`}
                className="
                  group flex flex-col items-center text-center gap-3
                  p-5 rounded-2xl border border-border bg-background
                  hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5
                  transition-all duration-300
                  h-full
                "
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                  {icons[cat.id] ?? cat.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-text group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}