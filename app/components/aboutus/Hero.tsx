"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function Hero() {
  const siteHref = "https://refpa3665.com/L?tag=d_5002529m_2170c_MIKEMEL";
  const { t, isArabic } = useLanguage();

  return (
    <Reveal
      as="section"
      id="hero"
      preset="section"
      className="landing-section-line border-b bg-transparent"
    >
      <div
        dir="ltr"
        className="mx-auto grid max-w-7xl items-start gap-8 px-6 pt-12 pb-16 md:grid-cols-2 md:pt-16 md:pb-20 lg:gap-10 lg:pt-20 lg:pb-24"
      >
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={[
            "max-w-4xl",
            isArabic ? "order-2 md:order-2 text-right" : "order-1 md:order-1",
          ].join(" ")}
        >
          <Reveal
            as="h1"
            preset="text"
            className="type-display font-bold text-white"
          >
            {t.home.hero.title}
          </Reveal>

          <Reveal
            as="p"
            preset="text"
            delay={0.04}
            className="type-body-lg mt-6 max-w-xl text-white/72"
          >
            {t.home.hero.description}
          </Reveal>

          <Reveal
            as="div"
            delay={0.08}
            className={[
              "mt-10 flex flex-wrap gap-4",
              isArabic ? "justify-end" : "",
            ].join(" ")}
          >
            <a
              href="#register"
              className="landing-button-secondary type-label rounded-full px-6 py-3 font-semibold"
            >
              {t.home.hero.becomeAgent}
            </a>
          </Reveal>

          <Reveal
            as="div"
            delay={0.12}
            stagger={0.08}
            className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3"
          >
            <Reveal
              as="div"
              preset="card"
              className="landing-surface landing-hover rounded-2xl p-4"
            >
              <div className="type-stat font-bold text-[#FFC100]">24/7</div>
              <div className="type-body mt-1 text-white/65">
                {t.home.hero.support}
              </div>
            </Reveal>

            <Reveal
              as="div"
              preset="card"
              className="landing-surface landing-hover rounded-2xl p-4"
            >
              <div className="type-stat font-bold text-[#FFC100]">
                {t.home.hero.fast}
              </div>
              <div className="type-body mt-1 text-white/65">
                {t.home.hero.onboarding}
              </div>
            </Reveal>

            <Reveal
              as="div"
              preset="card"
              className="landing-surface landing-hover col-span-2 rounded-2xl p-4 sm:col-span-1"
            >
              <div className="type-stat font-bold text-[#FFC100]">
                {t.home.hero.direct}
              </div>
              <div className="type-body mt-1 text-white/65">
                {t.home.hero.managerAccess}
              </div>
            </Reveal>
          </Reveal>
        </div>

        <Reveal
          as="div"
          preset="soft"
          delay={0.1}
          className={[
            "relative flex min-h-[380px] items-start justify-center px-4 py-4 md:min-h-[420px]",
            isArabic ? "order-1 md:order-1" : "order-2 md:order-2",
          ].join(" ")}
        >
          <div className="relative flex flex-col items-center text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFC100]/10 blur-3xl" />

            <div
              dir="ltr"
              className="relative mt-1 text-[clamp(3.8rem,10vw,7rem)] text-left"
            >
              <div className="melbet-wordmark" aria-label="MELBET">
                <span className="melbet-letter melbet-letter--white">M</span>
                <span className="melbet-letter melbet-letter--white">E</span>
                <span className="melbet-letter melbet-letter--white">L</span>
                <span className="melbet-letter melbet-letter--yellow">B</span>
                <span className="melbet-letter melbet-letter--yellow">E</span>
                <span className="melbet-letter melbet-letter--yellow">T</span>
              </div>
            </div>

            <div className="type-label mt-1 font-semibold uppercase tracking-[0.2em] text-white/70">
              {t.home.hero.partnerProgram}
            </div>

            <a
              href={siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="melbet-button type-label mt-10 inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#FFC100]/35 bg-[#FFC100] px-7 py-4 font-bold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:opacity-95"
            >
              {t.home.hero.ourSite}
            </a>
          </div>

          <div className="pointer-events-none absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#FFC100]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-white/6 blur-3xl" />
        </Reveal>
      </div>
    </Reveal>
  );
}