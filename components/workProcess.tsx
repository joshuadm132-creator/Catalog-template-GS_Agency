import Reveal from "@/components/Reveal";

type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  youGet?: string[];
  weNeed?: string[];
};

type ProcessProps = {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
};

export default function Process({ title, subtitle, steps }: ProcessProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
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
        </Reveal>

        {/* Steps grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 120}>
              <div className="relative h-full flex flex-col p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow duration-300">
                {/* Step number */}
                <span className="text-4xl font-bold text-primary/25 font-mono leading-none">
                  {step.number}
                </span>

                <h3 className="mt-4 text-2xl font-heading font-bold text-text">
                  {step.title}
                </h3>

                <p className="mt-3 text-text-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Two checklists */}
                <div className="mt-6 pt-6 border-t border-border grid gap-6 sm:grid-cols-2 flex-1">
                  {step.youGet && step.youGet.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-accent uppercase tracking-wider">
                        You Get
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {step.youGet.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="text-accent font-bold leading-5">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.weNeed && step.weNeed.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">
                        We Need
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {step.weNeed.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="text-primary font-bold leading-5">
                              →
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}