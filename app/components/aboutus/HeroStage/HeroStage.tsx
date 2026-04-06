"use client";

import { useState } from "react";
import HeroPartnerItem from "./HeroPartnerItem";
import { heroPartnerItems } from "@/lib/HeroStageData";
import { useLanguage } from "../../providers/LanguageContext";

export default function HeroStage() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const loopItems = [
    ...heroPartnerItems,
    ...heroPartnerItems,
    ...heroPartnerItems,
    ...heroPartnerItems,
  ];

  return (
    <div className="relative w-full min-h-[300px] overflow-hidden rounded-[32px] border border-white/0">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC100]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_50%_100%,rgba(255,193,0,0.12),transparent_65%)]" />

      <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-start px-4 pt-6 pb-6 sm:px-6 sm:pt-8 sm:pb-6 lg:min-h-[340px]">
        <div className="hero-brand-stage mt-2 w-full py-2">
          <div className="hero-brand-track">
            {loopItems.map((item, index) => (
              <HeroPartnerItem
                key={`${item.id}-${index}`}
                item={item}
                isActive={hoveredId === item.id}
                isDimmed={hoveredId !== null && hoveredId !== item.id}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

        <p className="mt-26 max-w-[820px] text-center text-[clamp(1.35rem,2.5vw,2.1rem)] font-semibold leading-[1.08] tracking-[-0.05em] text-white/88">
          {t.aboutus.hero.stage}
        </p>
      </div>
    </div>
  );
}