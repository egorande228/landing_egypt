"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../providers/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { label: string; value: Language }[] = [
  { label: "EN", value: "en" },
  { label: "AR", value: "ar" },
];

export default function Header() {
  const { language, setLanguage, t, isArabic } = useLanguage();
  const activeIndex = languages.findIndex((item) => item.value === language);

  const navItems = [
    { href: "/", label: t.nav.home, icon: "/home.png" },
    { href: "/agent", label: t.nav.becomeAgent, icon: "/manager.png" },
    { href: "/partner", label: t.nav.becomePartner, icon: "/handshake.png" },
    { href: "/aboutus", label: t.nav.aboutUs, icon: "/support.png" },
  ];

  const orderedNavItems = isArabic ? [...navItems].reverse() : navItems;

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur"
    >
      <div
        dir="ltr"
        className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-3 py-3 sm:px-4 md:px-6"
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Brand logo"
            width={120}
            height={34}
            className="h-7 w-auto object-contain sm:h-8 md:h-9"
            priority
          />
        </Link>

        <nav
          dir="ltr"
          className="flex items-center justify-center gap-2 px-2 sm:gap-3 md:gap-4"
        >
          {orderedNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition hover:border-[#FFC100]/35 hover:bg-[#FFC100]/10 sm:h-11 sm:w-11"
            >
              <span className="relative h-4 w-4 sm:h-5 sm:w-5">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  className="object-contain opacity-85 transition group-hover:opacity-100"
                />
              </span>
            </Link>
          ))}
        </nav>

        <div
          dir="ltr"
          className="relative grid h-9 w-[88px] shrink-0 grid-cols-2 rounded-full border border-white/10 bg-white/5 p-1 sm:h-10 sm:w-[92px]"
        >
          <span
            className={[
              "pointer-events-none absolute left-1 top-1 h-7 w-[38px] rounded-full bg-[#FFC100] transition-transform duration-300 ease-out sm:h-8 sm:w-[40px]",
              activeIndex === 1 ? "translate-x-[40px] sm:translate-x-[42px]" : "translate-x-0",
            ].join(" ")}
          />

          {languages.map((item) => {
            const isActive = language === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setLanguage(item.value)}
                className={[
                  "type-meta relative z-10 flex items-center justify-center rounded-full font-semibold transition-colors duration-300",
                  isActive ? "text-black" : "text-white/75 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}