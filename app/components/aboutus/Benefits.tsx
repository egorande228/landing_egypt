"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function Benefits() {
  const { t, isArabic } = useLanguage();

  const benefits = [
    {
      image: "/bolt.png",
      title: t.home.benefits.quickStart.title,
      text: t.home.benefits.quickStart.text,
    },
    {
      image: "/marketing1.png",
      title: t.home.benefits.marketingKit.title,
      text: t.home.benefits.marketingKit.text,
    },
    {
      image: "/visa.png",
      title: t.home.benefits.flexiblePayments.title,
      text: t.home.benefits.flexiblePayments.text,
    },
    {
      image: "/manager.png",
      title: t.home.benefits.privateAdvisor.title,
      text: t.home.benefits.privateAdvisor.text,
    },
  ];

  return (
    <Reveal
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
            {t.home.benefits.title}
          </Reveal>

          <Reveal as="p" preset="text" delay={0.04} className="type-body-lg mt-5 text-white/72">
            {t.home.benefits.subtitle}
          </Reveal>
        </Reveal>

        <Reveal as="div" delay={0.08} stagger={0.08} className="mt-10 grid gap-5 md:grid-cols-2">
          {benefits.map((item) => (
            <Reveal
              key={item.title}
              as="div"
              preset="card"
              className="landing-surface landing-hover rounded-[28px] px-8 py-10"
            >
              <div className="flex flex-col items-center text-center">
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
  );
}
