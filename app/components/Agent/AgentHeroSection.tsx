"use client";

import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import AgentNetwork from "./AgentNetwork";
import { Reveal } from "@/lib/Animation/Reveal";

export default function AgentHeroSection() {
  const { t, isArabic } = useLanguage();

  return (
    <Reveal
      as="section"
      preset="section"
      className="relative overflow-hidden border-b border-white/10 bg-transparent"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,193,0,0.14),transparent_20%)]" />
      </div>

      <div
        dir="ltr"
        className="relative z-10 mx-auto grid max-w-[1500px] items-start gap-10 px-6 pt-3 pb-8 md:grid-cols-[0.92fr_1.08fr] md:pt-4 md:pb-10 lg:gap-14 lg:pt-5 lg:pb-12"
      >
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={[
            "flex min-w-0 max-w-2xl flex-col pt-0",
            isArabic ? "order-2 text-right justify-self-end" : "order-1",
          ].join(" ")}
        >
          <Reveal
            as="div"
            className={[
              "inline-flex w-fit items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 text-sm font-medium text-[#FFC100]",
              isArabic ? "self-end" : "",
            ].join(" ")}
          >
            {t.agent.hero.badge}
          </Reveal>

          <Reveal
            as="h1"
            preset="text"
            delay={0.04}
            className="mt-4 text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl"
          >
            {t.agent.hero.title}
          </Reveal>

          <Reveal
            as="p"
            preset="text"
            delay={0.08}
            className={[
              "mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg",
              isArabic ? "self-end text-right" : "",
            ].join(" ")}
          >
            {t.agent.hero.description}
          </Reveal>

          <Reveal
            as="div"
            delay={0.12}
            className={[
              "mt-8 flex flex-wrap gap-4",
              isArabic ? "justify-end flex-row-reverse self-end" : "",
            ].join(" ")}
          >
            <Link
              href="/agent#register"
              className="landing-button-primary rounded-full px-6 py-3 text-sm font-semibold"
            >
              {t.agent.hero.startNow}
            </Link>

            <Link
              href="/aboutus#calculator"
              className="landing-button-secondary rounded-full px-6 py-3 text-sm font-semibold"
            >
              {t.agent.hero.estimateIncome}
            </Link>
          </Reveal>
        </div>

        <Reveal
          as="div"
          preset="soft"
          delay={0.08}
          className={[
            "relative flex min-w-0 items-start justify-center px-0 pt-0 pb-0",
            isArabic ? "order-1" : "order-2",
          ].join(" ")}
        >
          <div className="w-full max-w-none origin-top scale-[0.92] lg:scale-[0.98]">
            <AgentNetwork />
          </div>

          <div className="pointer-events-none absolute -left-6 top-4 h-24 w-24 rounded-full bg-[#FFC100]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 bottom-4 h-24 w-24 rounded-full bg-white/6 blur-3xl" />
        </Reveal>
      </div>
    </Reveal>
  );
}