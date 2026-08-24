import { seoTheme } from "@/lib/seo";
import { site } from "@/lib/site";

type OpenGraphCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function OpenGraphCard({ eyebrow, title, description }: OpenGraphCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: seoTheme.background,
        color: seoTheme.text,
        padding: "72px 78px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, color: seoTheme.accent }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            background: seoTheme.accent,
          }}
        />
        <div style={{ fontSize: 24, letterSpacing: 2, textTransform: "uppercase" }}>{eyebrow}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ maxWidth: 1040, fontSize: 74, fontWeight: 700, lineHeight: 1.03, letterSpacing: -3 }}>
          {title}
        </div>
        <div style={{ maxWidth: 930, color: seoTheme.muted, fontSize: 30, lineHeight: 1.35 }}>
          {description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${seoTheme.line}`,
          paddingTop: 26,
          fontSize: 24,
        }}
      >
        <div style={{ fontWeight: 600 }}>{site.name}</div>
        <div style={{ color: seoTheme.muted }}>{site.role}</div>
      </div>
    </div>
  );
}
