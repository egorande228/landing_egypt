"use client";

import Image from "next/image";
import type { HeroPartnerItem } from "@/lib/HeroStageData";

type HeroPartnerItemProps = {
  item: HeroPartnerItem;
  isActive?: boolean;
  isDimmed?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
};

export default function HeroPartnerItem({
  item,
  isActive = false,
  isDimmed = false,
  onHoverStart,
  onHoverEnd,
}: HeroPartnerItemProps) {
  return (
    <button
      type="button"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className={[
        "group flex min-w-[116px] flex-col items-center gap-3 text-center transition duration-300",
        isDimmed ? "scale-[0.9] opacity-55" : "scale-100 opacity-100",
        isActive ? "z-10 scale-[1.08]" : "",
      ].join(" ")}
    >
      <span
        className={[
          "relative flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/14 bg-white/8 backdrop-blur-sm transition duration-300",
          isActive
            ? "bg-white/16 shadow-[0_20px_40px_rgba(255,255,255,0.12)]"
            : "",
        ].join(" ")}
      >
        <span
          className={[
            "pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_60%)] transition duration-300",
            isActive ? "opacity-100 scale-[1.08]" : "opacity-0 scale-100",
          ].join(" ")}
        />

        <Image
          src={item.logo}
          alt={item.name}
          width={36}
          height={36}
          className={[
            "relative z-10 h-[36px] w-[36px] object-contain transition duration-300",
            isActive ? "scale-[1.08]" : "scale-100",
          ].join(" ")}
        />
      </span>

      <span
        className={[
          "text-[14px] font-medium leading-none tracking-[-0.02em] transition duration-300",
          isActive ? "text-white" : "text-white/78",
        ].join(" ")}
      >
        {item.name}
      </span>
    </button>
  );
}