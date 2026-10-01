// components/browser-frame.tsx
import { ReactNode } from "react";

type BrowserFrameProps = {
  /** The URL shown in the address bar */
  url?: string;
  children: ReactNode;
  className?: string;
};

export default function BrowserFrame({
  url,
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-border bg-surface shadow-sm ${className}`}
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-surface border-b border-border">
        {/* Traffic-light dots */}
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>

        {/* Address bar */}
        {url && (
          <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-background border border-border text-[11px] text-text-muted truncate">
            {url.replace(/^https?:\/\//, "")}
          </div>
        )}
      </div>

      {/* Site content */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        {children}
      </div>
    </div>
  );
}