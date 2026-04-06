"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import Card from "../providers/Card";

export default function PartnerBenefitsSection() {
  const { t } = useLanguage();

  const partnerBenefits = [
    {
      id: "lifetime-client-base",
      image: "/client.png",
      title: t.partner.benefits.lifetimeClientBase.title,
      text: t.partner.benefits.lifetimeClientBase.text,
    },
    {
      id: "lifetime-commissions",
      image: "/infinite.png",
      title: t.partner.benefits.lifetimeCommissions.title,
      text: t.partner.benefits.lifetimeCommissions.text,
    },
    {
      id: "passive-weekly-income",
      image: "/repeat.png",
      title: t.partner.benefits.passiveWeeklyIncome.title,
      text: t.partner.benefits.passiveWeeklyIncome.text,
    },
    {
      id: "compounding-growth",
      image: "/up.png",
      title: t.partner.benefits.compoundingGrowth.title,
      text: t.partner.benefits.compoundingGrowth.text,
    },
  ];

  return (
    <Reveal as="section" preset="section" className="border-b border-white/0">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Reveal as="div" className="max-w-3xl">
          <Reveal as="h2" preset="text" className="type-subheading font-bold text-white">
            {t.partner.how.title}
          </Reveal>
        </Reveal>

        <Reveal
          as="div"
          delay={0.08}
          stagger={0.08}
          className="mt-10 grid gap-5 md:grid-cols-2 md:auto-rows-fr"
        >
          {partnerBenefits.map((item) => (
            <Reveal key={item.id} as="div" preset="card">
              <Card
                image={item.image}
                title={item.title}
                text={item.text}
              />
            </Reveal>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}