export type Theme = {
  primary: string;
  primaryHover: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  textInverse: string;
  heroBg: string;
  heroText: string;
  fontBody: string;
  ligterbg?:string;
  fontHeading: string;
};

export const talosTheme: Theme = {
  primary: "#3b82f6",
  primaryHover: "#2563eb",
  accent: "#10b981",
  background: "#ffffff",
  surface: "#f9fafb",
  border: "#e5e7eb",
  text: "#111827",
  textMuted: "#6b7280",
  textInverse: "#ffffff",
  heroBg: "#0a1628",
  heroText: "#ffffff",
  ligterbg:"#150938" ,
  fontBody: "var(--font-inter), system-ui, sans-serif",
  fontHeading: "var(--font-inter), system-ui, sans-serif",
};

export const bakeryTheme: Theme = {
  primary: "#ea580c",
  primaryHover: "#c2410c",
  accent: "#b45309",
  background: "#fffbf5",
  surface: "#fef3e2",
  border: "#f0d9b5",
  text: "#2d1810",
  textMuted: "#7a5c47",
  textInverse: "#fffbf5",
  heroBg: "#5c2e0e",
  heroText: "#fffbf5",
  fontBody: "var(--font-inter), system-ui, sans-serif",
  fontHeading: "var(--font-playfair), Georgia, serif",
};