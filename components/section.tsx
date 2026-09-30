import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "dark" | "none";
};

export default function CustomSection({
  children,
  className = "",
  containerClassName = "",
  background = "white",
}: SectionProps) {
  const bgClass =
    background === "white"
      ? "bg-background text-text"
      : background === "gray"
      ? "bg-surface text-text"
      : background === "dark"
      ? "bg-hero-bg text-hero-text"
      : "";

  return (
    <section className={`py-20 px-6 ${bgClass} ${className}`}>
      <div className={`max-w-6xl mx-auto ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}