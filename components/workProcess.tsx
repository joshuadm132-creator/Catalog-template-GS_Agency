// components/process.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

/* ============================================================
   Types — matches your existing Talos.tsx process block
   ============================================================ */

export type ProcessStep = {
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
  variant?: "cards" | "flow";
};

export default function Process({
  title,
  subtitle,
  steps,
  variant = "cards",
}: ProcessProps) {
  if (variant === "flow") {
    return <FlowProcess title={title} subtitle={subtitle} steps={steps} />;
  }
  return <CardProcess title={title} subtitle={subtitle} steps={steps} />;
}

/* ============================================================
   VARIANT 1 — CARDS
   ============================================================ */

function CardProcess({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
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

        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 100}>
              <div className="h-full p-6 rounded-2xl border border-border bg-surface">
                <span className="text-xs font-semibold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-heading font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   VARIANT 2 — FLOW (dark, scroll-driven, no arrows)
   ============================================================ */

function FlowProcess({
  title,
  subtitle,
  steps,
}: {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        {
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [steps.length]);

  return (
    <section className="relative bg-ligter-gr text-hero-text overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 30%, var(--color-primary), transparent 95%)",
          opacity: 0.32,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        {/* Header */}
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-accent">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-hero-text/70 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Vertical track line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-8 top-2 bottom-2 w-px bg-hero-text/10"
          />

          {/* Progress fill — grows to activeIndex */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-8 top-2 w-px bg-accent transition-all duration-700 ease-out"
            style={{
              height: `${
                steps.length > 1
                  ? (activeIndex / (steps.length - 1)) * 100
                  : 0
              }%`,
              maxHeight: "calc(100% - 1rem)",
            }}
          />

          <ol className="space-y-20 md:space-y-32">
            {steps.map((step, index) => (
              <StepNode
                key={step.id}
                step={step}
                index={index}
                isActive={index === activeIndex}
                registerRef={(el) => {
                  stepRefs.current[index] = el;
                }}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Individual step  heading font, green accent
   ============================================================ */

function StepNode({
  step,
  index,
  isActive,
  registerRef,
}: {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  registerRef: (el: HTMLLIElement | null) => void;
}) {
  return (
    <li ref={registerRef} id={step.id} className="scroll-mt-24">
      <div
        className={`
          grid md:grid-cols-[4rem_1fr] gap-6 md:gap-10
          transition-all duration-700 ease-out
          ${isActive ? "opacity-100 translate-y-0" : "opacity-40 md:opacity-30 translate-y-0"}
        `}
      >
        {/* Number bubble */}
        <div className="relative">
          <div
            className={`
              w-16 h-16 rounded-full flex items-center justify-center
              font-heading font-bold text-lg
              border-2 transition-all duration-500
              ${
                isActive
                  ? "border-accent bg-accent text-text-inverse shadow-[0_0_30px_-5px_var(--color-accent)]"
                  : "border-hero-text/20 bg-hero-bg text-hero-text/60"
              }
            `}
          >
            {step.number}
          </div>
        </div>

        {/* Content */}
        <div className="pt-1">
          <h3
            className={`
              text-2xl md:text-3xl font-mono transition-colors duration-500 uppercase
              ${isActive ? "text-accent" : "text-yellow-700"}
            `}
          >
            {step.title}
          </h3>

          <p className="mt-3 text-hero-text/70 leading-relaxed max-w-xl">
            {step.description}
          </p>

          {/* youGet / weNeed */}
          {(step.youGet?.length || step.weNeed?.length) && (
            <div
              className={`
                mt-6 grid sm:grid-cols-2 gap-6
                transition-opacity duration-700
                ${isActive ? "opacity-100" : "opacity-80"}
              `}
            >
              {step.youGet?.length ? (
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                    You get
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {step.youGet.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-hero-text/80"
                      >
                        <span className="text-accent shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {step.weNeed?.length ? (
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-yellow-500">
                    We need
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {step.weNeed.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-hero-text/70"
                      >
                        <span className="text-hero-text/40 shrink-0 mt-0.5">
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}