import type { CSSProperties } from "react";
import type { Theme } from "./themes";

export function themeToCssVars(theme: Theme): CSSProperties {
  return {
    "--color-primary": theme.primary,
    "--color-primary-hover": theme.primaryHover,
    "--color-accent": theme.accent,
    "--color-background": theme.background,
    "--color-surface": theme.surface,
    "--color-border": theme.border,
    "--color-text": theme.text,
    "--color-text-muted": theme.textMuted,
    "--color-text-inverse": theme.textInverse,
    "--color-hero-bg": theme.heroBg,
    "--color-hero-text": theme.heroText,
    "--font-body": theme.fontBody,
    "--font-heading": theme.fontHeading,
  } as CSSProperties;
}