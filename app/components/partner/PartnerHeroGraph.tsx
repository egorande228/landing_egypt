"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function PartnerHeroGraph() {
  const { t } = useLanguage();

  const graphItems = [
    {
      id: "month-1",
      label: t.partner.hero.month1,
      value: "$500",
      heightClass: "min-h-[95px]",
      columnClass: "col-start-1",
      selfClass: "justify-self-center",
    },
    {
      id: "month-2",
      label: t.partner.hero.month2,
      value: "$1,500",
      heightClass: "min-h-[145px]",
      columnClass: "col-start-2",
      selfClass: "justify-self-center",
    },
    {
      id: "month-3",
      label: t.partner.hero.month3,
      value: "$2,700+",
      heightClass: "min-h-[200px]",
      columnClass: "col-start-3",
      selfClass: "justify-self-center",
    },
    {
      id: "month-6",
      label: t.partner.hero.month6,
      value: "∞",
      heightClass: "min-h-[290px]",
      columnClass: "col-start-4",
      selfClass: "justify-self-center",
    },
  ];

  const highlightPills = [
    { id: "lifetime-commissions", text: t.partner.hero.lifetimeCommissions },
    { id: "weekly-payouts", text: t.partner.hero.weeklyPayouts },
    { id: "transfer-affiliate", text: t.partner.hero.transferAffiliate },
  ];

  return (
    <div className="relative flex h-full flex-col">
      <Reveal as="p" className="type-meta uppercase tracking-[0.24em] text-white/45">
        {t.partner.hero.growthPotential}
      </Reveal>

      <Reveal
        as="h2"
        preset="text"
        delay={0.04}
        className="type-subheading mt-5 font-bold text-white"
      >
        {t.partner.hero.growthTitle}
      </Reveal>

      <div className="mt-auto pt-20">
        <Reveal
          as="div"
          delay={0.08}
          stagger={0.08}
          className="relative grid grid-cols-4 items-end gap-2 sm:gap-4"
        >
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-white/10" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_50%_100%,rgba(255,193,0,0.10),transparent_72%)]" />

          {graphItems.map((item) => (
            <Reveal
              key={item.id}
              as="div"
              preset="card"
              className={[
                "relative z-10 flex w-full max-w-[92px] flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.03] px-2 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:max-w-none sm:rounded-[24px] sm:px-4 sm:py-5",
                item.heightClass,
                item.columnClass,
                item.selfClass,
              ].join(" ")}
            >
              <div className="type-label text-white/50">
                {item.label}
              </div>

              <div
                dir="ltr"
                className="mt-3 text-[1.45rem] font-bold leading-none text-[#FFC100] sm:type-card-title"
              >
                {item.value}
              </div>
            </Reveal>
          ))}
        </Reveal>

        <Reveal
          as="div"
          delay={0.12}
          stagger={0.06}
          className="mt-10 grid gap-3 sm:grid-cols-3"
        >
          {highlightPills.map((item) => (
            <Reveal
              key={item.id}
              as="span"
              preset="soft"
              className="type-label inline-flex w-full items-center justify-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-3 text-center font-medium text-[#FFC100]"
            >
              {item.text}
            </Reveal>
          ))}
        </Reveal>
      </div>
    </div>
  );
}