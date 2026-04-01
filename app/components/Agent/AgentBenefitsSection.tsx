"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function AgentBenefitsSection() {
  const { t, isArabic, language } = useLanguage();

  const agentBenefits = [
    {
      id: "daily-commissions",
      image: "/percentage.png",
      title: t.agent.benefits.dailyCommissions.title,
      text: t.agent.benefits.dailyCommissions.text,
      badge: language === "ar" ? "عمولة 10%" : "10% Commission",
    },
    {
      id: "transfer-model",
      image: "/arrows.png",
      title: t.agent.benefits.transferAgentModel.title,
      text: t.agent.benefits.transferAgentModel.text,
      badge: null,
    },
    {
      id: "existing-infrastructure",
      image: "/teamcash.png",
      title: language === "ar" ? "بنية جاهزة" : "Existing Infrastructure",
      text:
        language === "ar"
          ? "اعمل ضمن بنية تشغيلية جاهزة وموجودة مسبقاً، مما يسمح لك بالانطلاق بسرعة أكبر وباحتكاك أقل."
          : "Work with infrastructure that already exists, allowing you to launch faster with less friction.",
      badge: null,
    },
    {
      id: "top-agent-potential",
      image: "/best.png",
      title: t.agent.benefits.topAgentPotential.title,
      text: t.agent.benefits.topAgentPotential.text,
      badge: null,
    },
  ];

  const supportPoints = [
    {
      id: "instant-response",
      title: t.agent.support.instantResponse.title,
      text: t.agent.support.instantResponse.text,
    },
    {
      id: "operational-guidance",
      title: t.agent.support.operationalGuidance.title,
      text: t.agent.support.operationalGuidance.text,
    },
    {
      id: "growth-coaching",
      title: t.agent.support.growthCoaching.title,
      text: t.agent.support.growthCoaching.text,
    },
  ];

  return (
    <>
      <Reveal
        key={`agent-benefits-${language}`}
        as="section"
        preset="section"
        className="border-b border-white/10 bg-transparent"
      >
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <Reveal as="div" className={["max-w-3xl", isArabic ? "text-right" : ""].join(" ")}>
            <Reveal as="h2" preset="text" className="type-heading font-bold text-white">
              {t.agent.benefits.title}
            </Reveal>

            <Reveal as="p" preset="text" delay={0.04} className="type-body-lg mt-5 text-white/72">
              {t.agent.benefits.subtitle}
            </Reveal>
          </Reveal>

          <Reveal as="div" delay={0.08} stagger={0.08} className="mt-10 grid gap-5 md:grid-cols-2">
            {agentBenefits.map((item) => (
              <Reveal
                key={item.id}
                as="div"
                preset="card"
                className="landing-surface landing-hover rounded-[28px] p-6"
              >
                <div className=" items-center text-center">
                  <div className="benefit-icon-float relative h-16 w-16">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="type-card-title mt-6 font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="type-body-lg mt-5 max-w-[620px] text-white/72">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </Reveal>

      <Reveal
        key={`agent-support-${language}`}
        as="section"
        preset="section"
        className="border-b border-white/10 bg-transparent"
      >
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="mx-auto max-w-7xl px-6 py-16 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <Reveal as="div" className={["max-w-2xl", isArabic ? "text-right" : ""].join(" ")}>
              <Reveal
                as="div"
                className="type-label inline-flex items-center rounded-full border border-[#FFC100]/25 bg-[#FFC100]/10 px-4 py-1.5 font-medium text-[#FFC100]"
              >
                {t.agent.support.badge}
              </Reveal>

              <Reveal as="h2" preset="text" delay={0.04} className="type-heading mt-6 font-bold text-white">
                {t.agent.support.title}
              </Reveal>

              <Reveal as="p" preset="text" delay={0.08} className="type-body-lg mt-5 text-white/72">
                {t.agent.support.text}
              </Reveal>

              <Reveal
                key={`agent-support-button-${language}`}
                as="div"
                delay={0.12}
                className={["mt-8", isArabic ? "flex justify-start" : ""].join(" ")}
              >
                <Link
                  href="/agent#finalCTA"
                  className="landing-button-primary type-label rounded-full px-6 py-3 font-semibold"
                >
                  {t.agent.support.registerNow}
                </Link>
              </Reveal>
            </Reveal>

            <Reveal as="div" delay={0.08} stagger={0.08} className="grid gap-5">
              {supportPoints.map((item) => (
                <Reveal
                  key={item.title}
                  as="div"
                  preset="card"
                  className={[
                    "landing-surface landing-hover rounded-[28px] p-6",
                    isArabic ? "text-right" : "",
                  ].join(" ")}
                >
                  <h3 className="type-card-title font-bold text-white">{item.title}</h3>
                  <p className="type-body-lg mt-4 text-white/72">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </Reveal>
          </div>
        </div>
      </Reveal>
    </>
  );
}
