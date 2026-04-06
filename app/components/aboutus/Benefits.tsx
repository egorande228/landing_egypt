"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";
import Card from "../providers/Card";

export default function Benefits() {
  const { t, isArabic, language } = useLanguage();

  const benefits = [
    {
      image: "/bolt.png",
      title: t.aboutus.benefits.quickStart.title,
      text: t.aboutus.benefits.quickStart.text,
    },
    {
      image: "/marketing1.png",
      title: t.aboutus.benefits.marketingKit.title,
      text: t.aboutus.benefits.marketingKit.text,
    },
    {
      image: "/visa.png",
      title: t.aboutus.benefits.flexiblePayments.title,
      text: t.aboutus.benefits.flexiblePayments.text,
    },
    {
      image: "/manager.png",
      title: t.aboutus.benefits.privateAdvisor.title,
      text: t.aboutus.benefits.privateAdvisor.text,
    },
  ];

  return (
    <Reveal
      key={`about-benefits-${language}`}
      as="section"
      id="benefits"
      preset="section"
      className="border-b border-white/10 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal
          as="div"
          dir={isArabic ? "rtl" : "ltr"}
          className={["max-w-3xl", isArabic ? "text-right" : ""].join(" ")}
        >
          <Reveal as="h2" preset="text" className="type-heading font-bold text-white">
            {t.aboutus.benefits.title}
          </Reveal>

          <Reveal as="p" preset="text" delay={0.04} className="type-body-lg mt-5 text-white/72">
            {t.aboutus.benefits.subtitle}
          </Reveal>
        </Reveal>

        <Reveal
          as="div"
          delay={0.08}
          stagger={0.08}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {benefits.map((item) => (
            <Reveal key={item.title} as="div" preset="card">
              <Card
                image={item.image}
                title={item.title}
                text={item.text}
                className="px-8 py-10"
              />
            </Reveal>
          ))}
        </Reveal>
      </div>
    </Reveal>
  );
}