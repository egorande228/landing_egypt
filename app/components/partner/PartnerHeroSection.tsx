"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function PartnerHeroSection() {
  const { t } = useLanguage();

  const growthMonths = [
    { id: "month-1", label: t.partner.hero.month1, value: "$500", sizeClass: "min-h-[95px]" },
    { id: "month-2", label: t.partner.hero.month2, value: "$1,500", sizeClass: "min-h-[145px]" },
    { id: "month-3", label: t.partner.hero.month3, value: "$2,700+", sizeClass: "min-h-[200px]" },
    { id: "month-6", label: t.partner.hero.month6, value: "∞", sizeClass: "min-h-[290px]" },
  ];

  const highlightPills = [
    { id: "lifetime-commissions", text: t.partner.hero.lifetimeCommissions },
    { id: "weekly-payouts", text: t.partner.hero.weeklyPayouts },
    { id: "transfer-affiliate", text: t.partner.hero.transferAffiliate },
  ];

  return (
    <Reveal as="section" preset="section" className="border-b border-white/10">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 pt-4 pb-10 md:grid-cols-2 md:pt-6 md:pb-12 lg:gap-16">
        <div className="flex max-w-[760px] flex-col items-start">
          <div className="w-full max-w-[640px]">
            <Reveal as="p" className="type-hero-accent font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">
              {t.partner.hero.badge}
            </Reveal>

            <div className="mt-4 h-px w-full bg-[#FFC100]/35" />
          </div>

          <Reveal
            as="h1"
            preset="text"
            delay={0.04}
            className="type-display mt-2 max-w-[760px] font-bold text-white"
          >
            {t.partner.hero.title}
          </Reveal>

          <Reveal
            as="p"
            preset="text"
            delay={0.08}
            className="type-body-lg mt-8 max-w-[700px] text-white/64"
          >
            {t.partner.hero.description}
          </Reveal>

          <Reveal as="div" delay={0.12} className="mt-12">
            <Link
              href="/#register"
              className="landing-button-primary type-label rounded-full px-6 py-3 font-semibold"
            >
              {t.partner.hero.startNow}
            </Link>
          </Reveal>
        </div>

        <div className="relative flex h-full flex-col">
          <Reveal as="p" className="type-meta uppercase tracking-[0.24em] text-white/45">
            {t.partner.hero.growthPotential}
          </Reveal>

          <Reveal as="h2" preset="text" delay={0.04} className="type-subheading mt-5 font-bold text-white">
            {t.partner.hero.growthTitle}
          </Reveal>

          <div className="mt-auto pt-20">
            <Reveal as="div" delay={0.08} stagger={0.08} className="grid items-end grid-cols-2 gap-4 sm:grid-cols-4">
              {growthMonths.map((item) => (
                <Reveal
                  key={item.id}
                  as="div"
                  preset="card"
                  className={[
                    "landing-surface landing-hover flex flex-col items-center justify-center rounded-[24px] p-5 text-center",
                    item.sizeClass,
                  ].join(" ")}
                >
                  <div className="type-label text-white/50">{item.label}</div>
                  <div dir="ltr" className="type-card-title mt-3 font-bold text-[#FFC100]">
                    {item.value}
                  </div>
                </Reveal>
              ))}
            </Reveal>

            <Reveal as="div" delay={0.12} stagger={0.06} className="mt-10 grid gap-3 sm:grid-cols-3">
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
      </div>
    </Reveal>
  );
}