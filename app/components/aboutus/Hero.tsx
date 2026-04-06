"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import HeroStage from "./HeroStage/HeroStage";

export default function Hero() {
  const siteHref = "https://refpa3665.com/L?tag=d_5002529m_2170c_MIKEMEL";
  const { t, isArabic } = useLanguage();

  return (
    <Reveal
      as="section"
      id="hero"
      preset="section"
      className="landing-section-line overflow-x-clip border-b bg-transparent"
    >
      <div
        dir="ltr"
        className="container-main grid section-gap min-w-0 pt-[var(--space-6)] pb-[var(--space-10)] md:grid-cols-2 md:gap-x-[var(--space-10)] md:gap-y-[var(--space-4)] md:pt-[var(--space-10)] md:pb-[var(--space-16)] lg:pt-[var(--space-12)] lg:pb-[var(--space-18)]"
      >
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className={[
            "order-1 min-w-0 w-full self-start",
            isArabic
              ? "md:col-start-2 md:row-start-1 md:justify-self-end"
              : "md:col-start-1 md:row-start-1 md:justify-self-start",
          ].join(" ")}
        >
          <div
            className={[
              "flex w-full min-w-0 max-w-none flex-col gap-[var(--space-5)] md:max-w-[640px] md:gap-[var(--space-8)]",
              isArabic ? "ml-auto items-end text-right" : "mr-auto items-start text-left",
            ].join(" ")}
          >
            <Reveal
              as="h1"
              preset="text"
              className="w-full min-w-0 text-[clamp(2.5rem,10.5vw,3.8rem)] font-bold leading-[0.98] text-white md:type-display"
            >
              {t.aboutus.hero.title}
            </Reveal>

            <Reveal
              as="div"
              delay={0.08}
              className={[
                "flex w-full min-w-0",
                isArabic ? "justify-end" : "justify-start",
              ].join(" ")}
            >
              <a
                href="/aboutus#register"
                className="landing-button-primary rounded-full px-[var(--space-4)] py-[10px] text-[0.75rem] font-semibold transition hover:-translate-y-0.5 hover:opacity-95 md:px-[var(--space-6)] md:py-[var(--space-3)] md:text-sm"
              >
                {t.aboutus.hero.JoinUs}
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal
          as="div"
          preset="soft"
          delay={0.1}
          className={[
            "order-2 relative flex min-h-[170px] min-w-0 w-full items-start justify-center overflow-hidden px-[var(--space-2)] py-[var(--space-2)] md:min-h-[380px] md:px-[var(--space-4)]",
            isArabic
              ? "md:col-start-1 md:row-start-1"
              : "md:col-start-2 md:row-start-1",
          ].join(" ")}
        >
          <div className="relative flex w-full min-w-0 flex-col items-center text-center">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold-10)] blur-[var(--blur-xl)] md:h-56 md:w-56" />

            <div
              dir="ltr"
              className="relative mt-0 flex w-full min-w-0 justify-center overflow-hidden text-left"
            >
              <div className="max-w-full scale-[0.86] origin-center md:scale-100">
                <div
                  className="melbet-wordmark text-[clamp(2rem,9vw,3rem)] md:text-[clamp(3.8rem,10vw,7rem)]"
                  aria-label="MELBET"
                >
                  <span className="melbet-letter melbet-letter--white">M</span>
                  <span className="melbet-letter melbet-letter--white">E</span>
                  <span className="melbet-letter melbet-letter--white">L</span>
                  <span className="melbet-letter melbet-letter--yellow">B</span>
                  <span className="melbet-letter melbet-letter--yellow">E</span>
                  <span className="melbet-letter melbet-letter--yellow">T</span>
                </div>
              </div>
            </div>

            <div className="type-label mt-[2px] text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-white-72)] md:mt-[var(--space-1)] md:text-[0.8rem] md:tracking-[0.2em]">
              {t.aboutus.hero.partnerProgram}
            </div>

            <a
              href={siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="melbet-button landing-button-primary mt-[var(--space-4)] inline-flex min-w-[132px] items-center justify-center rounded-full px-[var(--space-4)] py-[10px] text-[0.72rem] font-bold uppercase tracking-[0.1em] transition hover:-translate-y-0.5 hover:opacity-95 md:type-label md:mt-[var(--space-8)] md:min-w-[220px] md:px-[var(--space-7)] md:py-[var(--space-4)] md:tracking-[0.12em]"
            >
              {t.aboutus.hero.ourSite}
            </a>
          </div>

          <div className="pointer-events-none absolute -left-4 top-8 h-16 w-16 rounded-full bg-[var(--color-gold-10)] blur-[var(--blur-xl)] md:-left-6 md:top-10 md:h-28 md:w-28" />
          <div className="pointer-events-none absolute -right-4 bottom-8 h-20 w-20 rounded-full bg-[var(--color-white-06)] blur-[var(--blur-xl)] md:-right-6 md:bottom-10 md:h-32 md:w-32" />
        </Reveal>

        <Reveal
          as="div"
          delay={0.16}
          className="order-3 min-w-0 -mt-[var(--space-2)] md:col-span-2 md:row-start-2 md:-mt-[var(--space-10)]"
        >
          <HeroStage />
        </Reveal>
      </div>
    </Reveal>
  );
}