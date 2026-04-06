"use client";

import Image from "next/image";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function FinalCTA() {
  const { t, isArabic } = useLanguage();

  return (
    <Reveal
      as="section"
      id="register"
      preset="section"
      className="mt-auto border-t border-white/10 bg-transparent"
    >
      <div id="contact" className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <Reveal
          as="div"
          dir={isArabic ? "rtl" : "ltr"}
          className="px-4 py-4 text-center sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        >
          <div className="mx-auto max-w-4xl">
            <Reveal
              as="div"
              className="type-label inline-flex items-center rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-4 py-1.5 font-medium text-[#FFC100]"
            >
              {t.aboutus.register.badge}
            </Reveal>

            <Reveal
              as="h2"
              preset="text"
              delay={0.04}
              className="type-heading mt-5 font-bold text-white"
            >
              {t.aboutus.register.title}
            </Reveal>

            <Reveal
              as="p"
              preset="text"
              delay={0.08}
              className="type-body-lg mx-auto mt-4 max-w-2xl text-white/72"
            >
              {t.aboutus.register.description}
            </Reveal>

            <Reveal
              as="div"
              delay={0.12}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#"
                className="group inline-flex h-[60px] items-center overflow-hidden rounded-full border border-[#FFC100]/30 bg-[#FFC100]/10 px-5 text-[#FFC100] shadow-[0_10px_30px_rgba(255,193,0,0.12)] transition-all duration-300 ease-out hover:border-[#FFC100]/55 hover:bg-[#FFC100] hover:text-black hover:shadow-[0_14px_36px_rgba(255,193,0,0.22)]"
              >
                <span className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/telegram.png"
                    alt="Telegram"
                    fill
                    className="object-contain"
                  />
                </span>

                <span className="type-label max-w-0 overflow-hidden whitespace-nowrap pl-0 font-bold transition-all duration-300 ease-out group-hover:max-w-[180px] group-hover:pl-3">
                  {t.aboutus.register.telegram}
                </span>
              </a>

              <a
                href="#"
                className="group inline-flex h-[60px] items-center overflow-hidden rounded-full border border-white/12 bg-white/5 px-5 text-white transition-all duration-300 ease-out hover:border-[#25D366]/50 hover:bg-[#25D366] hover:text-black hover:shadow-[0_14px_36px_rgba(37,211,102,0.22)]"
              >
                <span className="relative h-5 w-5 shrink-0">
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </span>

                <span className="type-label max-w-0 overflow-hidden whitespace-nowrap pl-0 font-bold transition-all duration-300 ease-out group-hover:max-w-[180px] group-hover:pl-3">
                  {t.aboutus.register.whatsapp}
                </span>
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}