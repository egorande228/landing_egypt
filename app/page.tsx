"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./components/providers/LanguageContext";
import { getLandingPlayerHomeContent } from "@/lib/player-home";
import { CASINO_REF_LINK, MAIL_LINK, SPORT_REF_LINK, TELEGRAM_LINK } from "@/lib/links";

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-3">
        <span className="h-px w-10 bg-[#FFC100]/60" />
        <span className="type-hero-accent font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">
          {eyebrow}
        </span>
      </div>
      <h2 className="type-heading font-extrabold tracking-[-0.04em] text-white">{title}</h2>
      <p className="type-body-lg mt-5 text-white/72">{body}</p>
    </div>
  );
}

function SmartVisual({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={className}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={["object-contain opacity-90", imageClassName ?? "p-6"].join(" ")}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,193,0,0.16),rgba(5,5,8,0.96)_60%,rgba(124,240,255,0.08))]" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)]" />
    </div>
  );
}

export default function HomePage() {
  const { language, isArabic } = useLanguage();
  const content = getLandingPlayerHomeContent(language);

  return (
    <main dir={isArabic ? "rtl" : "ltr"} className="landing-page flex min-h-full w-full flex-col">
      <section id="hero" className="section-block pt-4 md:pt-6">
        <div className="container-main">
          <div className="landing-surface-accent relative overflow-hidden rounded-[36px] px-5 py-6 md:px-6 md:py-8 lg:px-8 lg:py-9">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC100]/45 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(255,193,0,0.18),transparent_72%)] lg:block" />
            <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[#FFC100]/[0.1] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#7CF0FF]/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgba(0,0,0,0.3),transparent_62%)]" />

            <div className="relative grid section-gap items-center lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex rounded-full border border-[#FFC100]/20 bg-[#FFC100]/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FFC100]">
                    {content.hero.eyebrow}
                  </div>
                </div>

                <h1 className="type-display mt-6 max-w-3xl font-black tracking-[-0.06em] text-white">
                  {content.hero.title}
                </h1>
                <p className="type-body-lg mt-5 max-w-xl text-white/72">
                  {content.hero.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={CASINO_REF_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="landing-button-primary rounded-full px-6 py-3 text-sm font-bold"
                  >
                    {content.hero.primary}
                  </Link>
                  <Link
                    href={CASINO_REF_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="landing-button-secondary rounded-full px-6 py-3 text-sm font-bold"
                  >
                    {content.hero.secondary}
                  </Link>
                </div>

                <div className="mt-5 w-full max-w-[360px] rounded-[18px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_14px_36px_rgba(0,0,0,0.18)] backdrop-blur">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/48">
                    For partnership contact
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={TELEGRAM_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] px-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
                    >
                      Telegram
                    </a>
                    <a
                      href={MAIL_LINK}
                      className="inline-flex min-h-[42px] items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] px-4 text-[14px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09]"
                    >
                      Mail
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {content.hero.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

              </div>

              <div className="min-w-0">
                <article className="landing-surface landing-hover group relative min-h-[420px] overflow-hidden rounded-[30px] p-4 sm:p-5">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(255,193,0,0.16),transparent_28%),radial-gradient(circle_at_18%_84%,rgba(124,240,255,0.06),transparent_22%),linear-gradient(180deg,rgba(255,193,0,0.03),rgba(5,5,8,0.08)_36%,rgba(5,5,8,0.28)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,8,0.14),rgba(5,5,8,0.92)_78%)]" />

                  <div className="relative flex h-full flex-col justify-end">
                    <div>
                      <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">
                        {content.hero.stage.eyebrow}
                      </p>
                      <h2 className="type-subheading mt-3 max-w-lg font-bold text-white">
                        {content.hero.stage.title}
                      </h2>
                      <p className="type-body mt-4 max-w-lg text-white/70">
                        {content.hero.stage.body}
                      </p>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {content.hero.sideCards.map((card) => (
                          <article
                            key={card.title}
                            className="rounded-[20px] border border-white/10 bg-black/28 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">
                                {card.eyebrow}
                              </p>
                              {card.metric ? (
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72">
                                  {card.metric}
                                </span>
                              ) : null}
                            </div>
                            <h3 className="type-card-title mt-3 font-bold text-white">
                              {card.title}
                            </h3>
                            <p className="type-body mt-2 text-white/64">
                              {card.body}
                            </p>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="games" className="section-block">
        <div className="container-main">
          <SectionHeading eyebrow={content.games.eyebrow} title={content.games.title} body={content.games.body} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.games.cards.map((card) => (
              <Link
                key={card.title}
                href={CASINO_REF_LINK}
                target="_blank"
                rel="noreferrer"
                className="landing-surface landing-hover group block rounded-[30px] overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <SmartVisual
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0"
                    imageClassName="p-6 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">{card.eyebrow}</p>
                    {card.metric ? (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72">
                        {card.metric}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="type-card-title font-bold text-white">{card.title}</h3>
                  <p className="type-body text-white/72">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sports" className="section-block">
        <div className="container-main">
          <SectionHeading eyebrow={content.sports.eyebrow} title={content.sports.title} body={content.sports.body} />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={SPORT_REF_LINK}
              target="_blank"
              rel="noreferrer"
              className="landing-surface landing-hover group relative block min-h-[420px] overflow-hidden rounded-[32px]"
            >
              <SmartVisual
                src={content.sports.lead.image}
                alt={content.sports.lead.title}
                className="absolute inset-0"
                imageClassName="h-full w-full object-cover p-0 opacity-100 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full border border-[#FFC100]/20 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFC100]">
                {content.sports.lead.metric}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">{content.sports.lead.eyebrow}</p>
                <h3 className="type-card-title mt-3 font-bold text-white">{content.sports.lead.title}</h3>
                <p className="type-body mt-3 max-w-xl text-white/72">{content.sports.lead.body}</p>
              </div>
            </Link>

            <div className="grid gap-4">
              {content.sports.rails.map((card) => (
                <Link
                  key={card.title}
                  href={SPORT_REF_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="landing-surface landing-hover group block overflow-hidden rounded-[28px]"
                >
                  <div className="grid min-h-[156px] gap-0 sm:grid-cols-[176px_1fr]">
                    <div className="relative min-h-[164px] sm:min-h-full">
                      <SmartVisual
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0"
                        imageClassName="p-2 opacity-95 transition-transform duration-500 ease-out group-hover:scale-110 sm:p-3"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">{card.eyebrow}</p>
                        {card.metric ? (
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72">
                            {card.metric}
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <h3 className="type-card-title font-bold text-white">{card.title}</h3>
                        <p className="type-body mt-2 text-white/72">{card.body}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="section-block">
        <div className="container-main">
          <SectionHeading eyebrow={content.offers.eyebrow} title={content.offers.title} body={content.offers.body} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.offers.cards.map((card) => (
              <Link
                key={card.title}
                href={CASINO_REF_LINK}
                target="_blank"
                rel="noreferrer"
                className="landing-surface-accent landing-hover group block overflow-hidden rounded-[30px]"
              >
                <div className="relative aspect-[4/3]">
                  <SmartVisual
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0"
                    imageClassName="p-6 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="type-meta font-extrabold uppercase tracking-[0.18em] text-[#FFC100]">{card.eyebrow}</p>
                    {card.metric ? (
                      <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/72">
                        {card.metric}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="type-card-title font-bold text-white">{card.title}</h3>
                  <p className="type-body text-white/72">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="section-block">
        <div className="container-main">
          <div className="landing-surface-accent relative overflow-hidden rounded-[34px] px-6 py-8 md:px-8 md:py-10">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC100]/45 to-transparent" />
            <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-full bg-[#FFC100]/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#7CF0FF]/[0.08] blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-[#FFC100]/20 bg-[#FFC100]/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#FFC100]">
                  {content.finalCta.eyebrow}
                </div>
                <h2 className="type-heading mt-5 font-extrabold tracking-[-0.04em] text-white">{content.finalCta.title}</h2>
                <p className="type-body-lg mt-5 text-white/72">{content.finalCta.body}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link href={content.finalCta.primaryHref} target="_blank" rel="noreferrer" className="landing-button-primary rounded-full px-6 py-3 text-sm font-bold">
                  {content.finalCta.primary}
                </Link>
                <Link href={content.finalCta.secondaryHref} target="_blank" rel="noreferrer" className="landing-button-secondary rounded-full px-6 py-3 text-sm font-bold">
                  {content.finalCta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
