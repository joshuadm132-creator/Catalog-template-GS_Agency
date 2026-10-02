// components/awards-list.tsx
import Reveal from "@/components/Reveal";

type Award = {
  year: string;
  title: string;
  category?: string;
};

type AwardsListProps = {
  title: string;
  subtitle?: string;
  awards: Award[];
  background?: "white" | "gray" | "dark";
};

export default function AwardsList({
  title,
  subtitle,
  awards,
  background = "white",
}: AwardsListProps) {
  if (awards.length === 0) return null;

  const bgClass =
    background === "gray"
      ? "bg-surface"
      : background === "dark"
      ? "bg-hero-bg text-hero-text"
      : "bg-background";

  const headingClass =
    background === "dark" ? "text-hero-text" : "text-text";
  const mutedClass =
    background === "dark" ? "text-hero-text/60" : "text-text-muted";

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-heading font-bold ${headingClass}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-lg leading-relaxed ${mutedClass}`}>
              {subtitle}
            </p>
          )}
        </div>

        <ul className="mt-14 space-y-4">
          {awards.map((award, i) => (
            <Reveal key={`${award.year}-${award.title}-${i}`} delay={i * 60}>
              <li
                className={`
                  flex items-baseline gap-6 py-5
                  border-b ${background === "dark" ? "border-hero-text/10" : "border-border"}
                  ${i === 0 ? "" : ""}
                `}
              >
                {/* Year */}
                <span
                  className={`
                    shrink-0 w-16 md:w-20
                    text-2xl md:text-3xl font-heading font-bold
                    ${i === 0 ? "text-primary" : mutedClass}
                  `}
                >
                  {award.year}
                </span>

                {/* Title + category */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`
                      font-heading font-semibold
                      ${headingClass}
                    `}
                  >
                    {award.title}
                  </p>
                  {award.category && (
                    <p className={`mt-1 text-sm ${mutedClass}`}>
                      {award.category}
                    </p>
                  )}
                </div>

                {/* Trophy mark, most recent highlighted */}
                <span
                  aria-hidden="true"
                  className={`
                    shrink-0 text-lg
                    ${i === 0 ? "opacity-100" : "opacity-40"}
                  `}
                >
                  🏆
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}