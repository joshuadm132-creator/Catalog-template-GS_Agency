"use client";

import { useEffect, useState, ReactNode } from "react";

type FadeRotatorProps = {
  items: ReactNode[];
  interval?: number;
  fadeDuration?: number;
  minHeight?: number;
};

export default function FadeRotator({
  items,
  interval = 3500,
  fadeDuration = 500,
  minHeight,
}: FadeRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    //donno what this is below
    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  return (
  <div className="grid">
    {items.map((item, i) => (
      <div
        key={i}
        style={{ transitionDuration: `${fadeDuration}ms` ,minHeight: minHeight ? `${minHeight}px` : undefined}}
        className={`
          col-start-1 row-start-1
          transition-opacity ease-in-out
          ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {item}
      </div>
    ))}
  </div>
);
}

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
};

export function Marquee({
  children,
  duration = 10,
  direction = "left",
}: MarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="w-max animate-marquee-fade"
        style={{
          animationDuration: `${duration}s`,
          animationDirection:
            direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
      </div>
    </div>
  );
}