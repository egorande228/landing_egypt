"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedMarketLogo } from "../logo";
import { useLanguage } from "../providers/LanguageContext";

const languages = [
  { label: "EN", value: "en" as const },
  { label: "AR", value: "ar" as const },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { language, setLanguage, t, isArabic } = useLanguage();

  const navItems = [
    { href: "/", label: t.nav.home, icon: "/home.png" },
    { href: "/agent", label: t.nav.becomeAgent, icon: "/manager.png" },
    { href: "/partner", label: t.nav.becomePartner, icon: "/handshake.png" },
    { href: "/aboutus", label: t.nav.aboutUs, icon: "/support.png" },
  ];

  return (
    <header dir={isArabic ? "rtl" : "ltr"} className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,9,11,0.92),rgba(6,7,9,0.84))] px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:px-5 lg:px-6">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC100]/45 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-[#FFC100]/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#7CF0FF]/[0.08] blur-3xl" />

          <div className="relative flex items-center gap-3 lg:gap-4">
            <div className="flex shrink-0 items-center">
              <div
                dir="ltr"
                className="relative grid min-h-[44px] min-w-[88px] grid-cols-2 rounded-full border border-white/10 bg-white/[0.05] p-1"
              >
                <span
                  className={[
                    "pointer-events-none absolute bottom-1 top-1 left-1 rounded-full bg-[#FFC100] transition-transform duration-300 ease-out",
                    language === "ar" ? "translate-x-[40px] sm:translate-x-[42px]" : "translate-x-0",
                  ].join(" ")}
                  style={{ width: "calc(50% - 4px)" }}
                />

                {languages.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setLanguage(item.value)}
                    className={[
                      "relative z-10 min-h-[34px] rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors",
                      language === item.value ? "text-black" : "text-white/72 hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "group inline-flex min-h-[46px] items-center gap-3 rounded-full border px-4 transition-all duration-300",
                      active
                        ? "border-[#FFC100]/30 bg-[#FFC100]/14 text-white"
                        : "border-transparent bg-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.05] hover:text-white",
                    ].join(" ")}
                  >
                    <span className="relative h-4 w-4 shrink-0">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        className="object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </span>
                    <span className="text-[14px] font-semibold tracking-[-0.02em]">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="ms-auto flex shrink-0 items-center justify-end">
              <Link href="/" className="shrink-0" aria-label="Melbet">
                <AnimatedMarketLogo
                  ariaLabel="Melbet"
                  preset="landing"
                  variantPool={["idle"]}
                  wrapperClassName="inline-flex"
                />
              </Link>
            </div>
          </div>

          <div className="relative mt-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "group inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full border px-4 transition-all duration-300",
                      active
                        ? "border-[#FFC100]/30 bg-[#FFC100]/14 text-white"
                        : "border-white/10 bg-white/[0.04] text-white/72",
                    ].join(" ")}
                  >
                    <span className="relative h-4 w-4 shrink-0">
                      <Image src={item.icon} alt="" fill className="object-contain opacity-85" />
                    </span>
                    <span className="text-[13px] font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
