"use client";

import { useEffect, useState, ReactNode } from "react";

type FadeRotatorProps = {
  items: ReactNode[];        // array of things to rotate through
  interval?: number;         // ms between switches, default 3000
  fadeDuration?: number;     // ms of fade transition, default 700
};

export default function FadeRotator({
  items,
  interval = 3500,
  fadeDuration = 500,
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
    <div className="relative">
      {items.map((item, i) => (
        <div
          key={i}
          style={{ transitionDuration: `${fadeDuration}ms` }}
          className={`
            transition-opacity ease-in-out
            ${i === index ? "opacity-100 relative" : "opacity-0 absolute inset-0 pointer-events-none"}
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
  speed?: number;       // seconds for one full loop, default 30
  direction?: "left" | "right";
};

export function Marquee({
  children,
  speed = 30,
  direction = "left",
}: MarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-max animate-marquee"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* Duplicate children so the loop looks seamless */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}