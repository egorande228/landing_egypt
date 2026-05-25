"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedMarketLogo } from "../logo";
import { useLanguage } from "../providers/LanguageContext";
import { getLandingPlayerHomeContent } from "@/lib/player-home";

export default function Footer() {
  const { t, language, isArabic } = useLanguage();
  const home = getLandingPlayerHomeContent(language);

  const homeLinks = [
    { href: "/#games", label: home.games.eyebrow },
    { href: "/#sports", label: home.sports.eyebrow },
    { href: "/#offers", label: home.offers.eyebrow },
    { href: "/#support", label: home.finalCta.eyebrow },
  ];

  const routeLinks = [
    { href: "/", label: t.nav.home },
    { href: "/agent", label: t.nav.becomeAgent },
    { href: "/partner", label: t.nav.becomePartner },
    { href: "/aboutus", label: t.nav.aboutUs },
  ];

  const supportLinks = [
    { href: home.finalCta.primaryHref, key: "telegram", icon: "/telegram.png", label: home.finalCta.primary },
    { href: home.finalCta.secondaryHref, key: "mail", icon: "/support.png", label: home.finalCta.secondary },
  ] as const;

  return (
    <footer dir={isArabic ? "rtl" : "ltr"} className="relative z-10 mt-auto px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC100]/45 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-full bg-[#FFC100]/[0.07] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#7CF0FF]/[0.06] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_0.82fr_0.92fr_1.18fr]">
            <div className="space-y-5 text-right lg:order-4 lg:justify-self-end">
              <Link href="/" className="inline-flex" aria-label="Melbet">
                <AnimatedMarketLogo
                  ariaLabel="Melbet"
                  preset="landing"
                  variantPool={["idle"]}
                  wrapperClassName="inline-flex"
                />
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.homeLabel}
              </p>
              <div className="flex flex-col gap-3">
                {homeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.routesLabel}
              </p>
              <div className="flex flex-col gap-3">
                {routeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#FFC100]">
                {home.footer.supportLabel}
              </p>
              <div className="flex flex-col gap-3">
                {supportLinks.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 text-sm text-white/72 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#FFC100]/30 hover:text-white"
                  >
                    <Image src={item.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/58">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
