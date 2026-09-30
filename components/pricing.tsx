import Reveal from "@/components/Reveal";
import CustomSection from "@/components/section";

export type ServiceTier = {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
};

export type FeatureRow = {
  category?: string;
  featureName: string;
  tierValues: Record<string, boolean | string>;
};

type PricingProps = {
  title?: string;
  subtitle?: string;
  tiers: ServiceTier[];
  comparisonFeatures?: FeatureRow[];
};

export default function Pricing({
  title,
  subtitle,
  tiers,
  comparisonFeatures = [],
}: PricingProps) {
  return (
    <CustomSection background="gray">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-text md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-text-muted text-lg">{subtitle}</p>
      </div>

      {/* 1. Pricing Cards Grid */}
      <div  className={`mt-12 grid gap-8 items-stretch mx-auto ${
            tiers.length === 2
              ? "grid-cols-1 md:grid-cols-2 max-w-3xl"
              : tiers.length === 4
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-3 max-w-5xl"
          }`}>
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative flex flex-col p-8 rounded-2xl border ${
              tier.popular
                ? "border-primary bg-hero-bg text-hero-text shadow-lg scale-105 z-10"
                : "border-border bg-background shadow-sm"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-text-inverse text-xs font-semibold rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <h3
              className={`text-xl font-bold ${
                tier.popular ? "text-hero-text" : "text-text"
              }`}
            >
              {tier.name}
            </h3>

            <p
              className={`mt-2 text-sm ${
                tier.popular ? "text-hero-text/70" : "text-text-muted"
              }`}
            >
              {tier.description}
            </p>

            {/* Price */}
            <div className="mt-6 flex items-baseline">
              <span
                className={`text-4xl font-extrabold ${
                  tier.popular ? "text-hero-text" : "text-text"
                }`}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span
                  className={`ml-1 text-sm ${
                    tier.popular ? "text-hero-text/60" : "text-text-muted"
                  }`}
                >
                  {tier.period}
                </span>
              )}
            </div>

            {/* Bulleted Highlights */}
            <ul
              className={`mt-6 space-y-3 flex-1 text-sm ${
                tier.popular ? "text-hero-text/80" : "text-text-muted"
              }`}
            >
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="font-bold text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold transition ${
                tier.popular
                  ? "bg-primary text-text-inverse hover:bg-primary-hover"
                  : "bg-surface text-text hover:bg-border"
              }`}
            >
              {tier.ctaText}
            </button>
          </div>
        ))}
      </div>

      {/* 2. Responsive Comparison Table */}
      {comparisonFeatures.length > 0 && (
        <Reveal>
          <div className="mt-20">
            <h3 className="text-2xl font-heading font-bold text-center text-text mb-8">
              Compare Features
            </h3>

            {/* Horizontal scroll wrapper for mobile */}
            <Reveal delay={500}>
              <div className="overflow-x-auto bg-background border border-border rounded-2xl shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-border bg-surface">
                      <th className="p-4 font-semibold text-text w-2/5">
                        Feature
                      </th>
                      {tiers.map((tier) => (
                        <th
                          key={tier.id}
                          className="p-4 font-semibold text-text text-center"
                        >
                          {tier.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm text-text">
                    {comparisonFeatures.map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-surface transition-colors"
                      >
                        <td className="p-4 font-medium text-text">
                          {row.featureName}
                        </td>
                        {tiers.map((tier) => {
                          const val = row.tierValues[tier.id];
                          return (
                            <td key={tier.id} className="p-4 text-center">
                              {typeof val === "boolean" ? (
                                val ? (
                                  <span className="text-accent font-bold">
                                    ✓
                                  </span>
                                ) : (
                                  <span className="text-text-muted/50">—</span>
                                )
                              ) : (
                                <span>{val ?? "—"}</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </Reveal>
      )}
    </CustomSection>
  );
}