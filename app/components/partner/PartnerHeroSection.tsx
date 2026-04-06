"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import PartnerHeroGraph from "./PartnerHeroGraph";

export default function PartnerHeroSection() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" preset="section" className="border-b border-white/10">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 pt-4 pb-10 md:grid-cols-2 md:pt-6 md:pb-12 lg:gap-16">
        <div className="flex max-w-[760px] flex-col items-start">
          <div className="w-full max-w-[640px]">
            <Reveal
              as="p"
              className="type-hero-accent font-extrabold uppercase tracking-[0.18em] text-[#FFC100]"
            >
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
              href="/partner#register"
              className="landing-button-primary type-label rounded-full px-6 py-3 font-semibold"
            >
              {t.partner.hero.startNow}
            </Link>
          </Reveal>
        </div>

        <PartnerHeroGraph />
      </div>
    </Reveal>
  );
}