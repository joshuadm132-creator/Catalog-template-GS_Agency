// components/stats-band.tsx
import Reveal from "@/components/Reveal";

type Stat = {
  number: string;
  label: string;
};

type StatsBandProps = {
  stats: Stat[];
  background?: "white" | "gray" | "dark";
};

export default function StatsBand({
  stats,
  background = "gray",
}: StatsBandProps) {
  if (stats.length === 0) return null;

  const bgClass =
    background === "gray"
      ? "bg-surface"
      : background === "dark"
      ? "bg-hero-bg text-hero-text"
      : "bg-background";

  const numberClass =
    background === "dark" ? "text-hero-text" : "text-text";

  const labelClass =
    background === "dark" ? "text-hero-text/60" : "text-text-muted";

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p
                  className={`
                    text-5xl md:text-6xl lg:text-7xl
                    font-heading font-extrabold
                    tracking-tight leading-none
                    ${numberClass}
                  `}
                >
                  {stat.number}
                </p>
                <p
                  className={`
                    mt-4 text-xs md:text-sm
                    font-medium uppercase tracking-[0.15em]
                    ${labelClass}
                  `}
                >
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}