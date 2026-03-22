"use client";

export function GradientCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-default p-[1px]">
      <div
        className="absolute inset-0 rounded-2xl opacity-90"
        style={{
          background:
            "linear-gradient(120deg, var(--accent-primary), var(--accent-secondary), var(--accent-cyan))",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 8s ease infinite",
        }}
      />
      <div className="relative rounded-[15px] bg-bg-surface p-6">
        <p className="text-sm font-semibold text-text-primary">Gradient border</p>
        <p className="mt-2 text-sm text-text-secondary">Анимированный градиент по периметру</p>
      </div>
    </div>
  );
}
