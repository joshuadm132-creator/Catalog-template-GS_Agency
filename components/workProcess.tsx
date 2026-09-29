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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        {/* Steps grid — 2 columns on desktop, more room per card */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 120}>
              <div className="relative h-full flex flex-col p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
                {/* Step number */}
                <span className="text-4xl font-bold text-blue-500/25 font-mono leading-none">
                  {step.number}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Two checklists side by side on wider screens */}
                <div className="mt-6 pt-6 border-t border-gray-100 grid gap-6 sm:grid-cols-2 flex-1">
                  {step.youGet && step.youGet.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        You Get
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {step.youGet.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-emerald-500 font-bold leading-5">
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
                      <h4 className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                        We Need
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {step.weNeed.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-blue-500 font-bold leading-5">
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