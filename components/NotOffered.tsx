// components/NotOffered.tsx
import Reveal from "@/components/Reveal";

export type NotOfferedItem = {
  id: string;
  title: string;
  reason: string;
};

type NotOfferedProps = {
  title: string;
  intro?: string;
  items: NotOfferedItem[];
  closing?: string;
  background?: "white" | "gray" | "dark";
};

export default function NotOffered({
  title,
  intro,
  items,
  closing,
  background = "gray",
}: NotOfferedProps) {
  const bgClass =
    background === "gray"
      ? "bg-surface"
      : background === "dark"
      ? "bg-hero-bg text-hero-text"
      : "bg-background";

  const headingClass =
    background === "dark" ? "text-hero-text" : "text-text";
  const mutedClass =
    background === "dark" ? "text-hero-text/70" : "text-text-muted";

  return (
    <section className={`py-20 px-6 ${bgClass}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <Reveal>
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold ${headingClass}`}
          >
            {title}
          </h2>
          {intro && (
            <p className={`mt-6 text-lg leading-relaxed ${mutedClass}`}>
              {intro}
            </p>
          )}
        </Reveal>

        {/* Items */}
        <div className="mt-12 space-y-8">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <div className="pl-6 border-l-2 border-accent/60">
                <h3
                  className={`text-lg font-heading font-semibold ${headingClass}`}
                >
                  {item.title}
                </h3>
                <p className={`mt-2 leading-relaxed ${mutedClass}`}>
                  {item.reason}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing */}
        {closing && (
          <Reveal delay={items.length * 100 + 100}>
            <p
              className={`mt-12 pt-8 border-t border-border text-base italic leading-relaxed ${mutedClass}`}
            >
              {closing}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}