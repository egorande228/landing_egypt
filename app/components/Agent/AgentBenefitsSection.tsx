"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import Card from "../providers/Card";

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

  return (
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
        <Reveal
          as="div"
          className={["max-w-3xl", isArabic ? "text-right" : ""].join(" ")}
        >
          <Reveal as="h2" preset="text" className="type-heading font-bold text-white">
            {t.agent.benefits.title}
          </Reveal>

          <Reveal as="p" preset="text" delay={0.04} className="type-body-lg mt-5 text-white/72">
            {t.agent.benefits.subtitle}
          </Reveal>
        </Reveal>

        <Reveal
          as="div"
          delay={0.08}
          stagger={0.08}
          className="mt-10 grid gap-5 md:grid-cols-2 md:auto-rows-fr"
        >
          {agentBenefits.map((item) => (
            <Reveal key={item.id} as="div" preset="card">
              <Card
                image={item.image}
                title={item.title}
                text={item.text}
                className="min-h-[320px]"
              />
            </Reveal>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}