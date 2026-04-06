"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

type CalculatorMode = "agent" | "partner";

type SliderRowProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
  onChange: (value: number) => void;
};

type RoleToggleOptionProps = {
  isActive: boolean;
  label: string;
  rangeText: string;
  onClick: () => void;
};

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  prefix = "",
  onChange,
}: SliderRowProps) {
  return (
    <div className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
      <div className="flex items-center justify-between gap-4">
        <span className="type-body font-medium text-white/85">{label}</span>

        <span dir="ltr" className="type-card-title font-bold text-[#FFC100]">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-5 h-3 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#FFC100] [transform:scaleY(1.35)]"
      />

      <div className="type-meta mt-3 flex items-center justify-between text-white/35">
        <span dir="ltr">
          {prefix}
          {min.toLocaleString()}
          {suffix}
        </span>
        <span dir="ltr">
          {prefix}
          {max.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
}

function RoleToggleOption({
  isActive,
  label,
  rangeText,
  onClick,
}: RoleToggleOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative inline-flex h-12 items-center overflow-hidden rounded-full border px-4 transition-all duration-300",
        isActive
          ? "border-[#FFC100]/40 bg-[#FFC100] text-black shadow-[0_10px_30px_rgba(255,193,0,0.18)]"
          : "border-white/12 bg-white/[0.04] text-white hover:border-[#FFC100]/30 hover:bg-[#FFC100]/10 hover:text-[#FFC100]",
      ].join(" ")}
    >
      <span className="type-label whitespace-nowrap font-semibold uppercase tracking-[0.12em]">
        {label}
      </span>

      <span className="type-label ml-0 inline-block max-w-0 overflow-hidden whitespace-nowrap pl-0 font-semibold text-[#FFFFFF] transition-all duration-300 group-hover:max-w-[160px] group-hover:pl-3">
        {rangeText}
      </span>
    </button>
  );
}

export default function Calculator() {
  const [dailyVolume, setDailyVolume] = useState(100);
  const [workingDays, setWorkingDays] = useState(15);
  const [mode, setMode] = useState<CalculatorMode>("agent");

  const { t, isArabic, language } = useLanguage();

  const commissionRate = mode === "partner" ? 0.25 : 0.1;

  const dailyIncome = useMemo(() => {
    return dailyVolume * commissionRate;
  }, [dailyVolume, commissionRate]);

  const monthlyIncome = useMemo(() => {
    return dailyIncome * workingDays;
  }, [dailyIncome, workingDays]);

  const money = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  const roleLabels = {
    agent: language === "ar" ? "وكيل" : "Agent",
    partner: language === "ar" ? "شريك" : "Partner",
    agentRange: "8% - 10%",
    partnerRange: "25% - 40%",
  };

  return (
    <Reveal
      as="section"
      id="calculator"
      preset="section"
      className="border-b border-white/10 bg-transparent"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <Reveal
          as="div"
          dir={isArabic ? "rtl" : "ltr"}
          className="flex flex-col items-center text-center"
        >
          <Reveal as="h2" preset="text" className="type-display font-bold text-white">
            <span>{t.aboutus.calculator.titleStart} </span>
            <span className="text-[#FFC100] [text-shadow:0_0_12px_rgba(255,193,0,0.28),0_0_30px_rgba(255,193,0,0.14)]">
              {t.aboutus.calculator.titleAccent}
            </span>
          </Reveal>

          <Reveal
            as="div"
            delay={0.08}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] p-2"
          >
            <RoleToggleOption
              isActive={mode === "agent"}
              label={roleLabels.agent}
              rangeText={roleLabels.agentRange}
              onClick={() => setMode("agent")}
            />

            <RoleToggleOption
              isActive={mode === "partner"}
              label={roleLabels.partner}
              rangeText={roleLabels.partnerRange}
              onClick={() => setMode("partner")}
            />
          </Reveal>
        </Reveal>

        <Reveal
          as="div"
          delay={0.08}
          dir={isArabic ? "rtl" : "ltr"}
          className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16"
        >
          <Reveal as="div" className="grid gap-8">
            <SliderRow
              label={t.aboutus.calculator.dailyVolume}
              value={dailyVolume}
              min={50}
              max={50000}
              step={100}
              prefix="$"
              onChange={setDailyVolume}
            />

            <SliderRow
              label={t.aboutus.calculator.workingDays}
              value={workingDays}
              min={1}
              max={31}
              step={1}
              onChange={setWorkingDays}
            />
          </Reveal>

          <Reveal as="div" className="flex flex-col justify-center">
            <p
              className={[
                "type-meta text-center uppercase tracking-[0.25em] text-white/45 md:text-left",
                isArabic ? "md:text-right" : "",
              ].join(" ")}
            >
              {t.aboutus.calculator.estimatedResult}
            </p>

            <div className="mt-10">
              <div className="type-body text-white/60">
                {t.aboutus.calculator.monthlyIncome}
              </div>
              <div
                dir="ltr"
                className="type-metric mt-2 font-bold text-[#FFC100] [text-shadow:0_0_12px_rgba(255,193,0,0.26),0_0_30px_rgba(255,193,0,0.14)]"
              >
                ${money.format(monthlyIncome)}
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-white/10" />

            <div className="mt-8">
              <div className="type-body text-white/60">
                {t.aboutus.calculator.dailyIncome}
              </div>
              <div dir="ltr" className="type-metric-secondary mt-2 font-bold text-white">
                ${money.format(dailyIncome)}
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </Reveal>
  );
}