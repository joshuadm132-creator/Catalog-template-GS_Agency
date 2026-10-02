// components/partners-strip.tsx
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Partner = {
  name: string;
  src: string;
};

type PartnersStripProps = {
  title: string;
  subtitle?: string;
  logos: Partner[];
};

export default function PartnersStrip({
  title,
  subtitle,
  logos,
}: PartnersStripProps) {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-text">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-text-muted">{subtitle}</p>
          )}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
            {logos.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                title={partner.name}
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}