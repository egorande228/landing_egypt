"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  MELBET_LOGO_DEFAULTS,
  MelbetAnimatedLogo,
  type MelbetAnimatedLogoProps,
  type MelbetLogoVariant
} from "./MelbetAnimatedLogo";
import {
  getMelbetLogoPreset,
  type MelbetLogoPresetName
} from "./melbetLogo.presets";

const MELBET_LOGO_ROTATION_POOLS = {
  default: ["idle", "scan", "wave", "flip", "twirl"],
  footer: ["idle", "scan", "wave", "twirl"],
  header: ["idle", "scan", "wave", "flip"],
  landing: ["idle", "flip", "twirl"]
} as const satisfies Record<string, readonly MelbetLogoVariant[]>;

const MELBET_LOGO_STYLES = `
.melbet-logo {
  position: relative;
  display: inline-flex;
  width: min(100%, var(--melbet-frame-width, 214px));
  max-width: 100%;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: var(--melbet-frame-pad-y, 10px) var(--melbet-frame-pad-x, 12px);
  isolation: isolate;
  perspective: 900px;
  transform-style: preserve-3d;
}

.melbet-logo__svg {
  display: block;
  height: auto;
  width: 100%;
  overflow: visible;
}

.melbet-logo__letter {
  backface-visibility: hidden;
  transform-box: fill-box;
  transform-origin: center center;
  transform-style: preserve-3d;
  transition:
    filter 220ms ease,
    opacity 220ms ease;
  will-change: transform, filter, opacity;
}

.melbet-logo__letter path {
  fill: currentColor;
}

.melbet-logo__letter--mel {
  color: var(--melbet-logo-white, var(--playground-white, #f7f9fc));
}

.melbet-logo__letter--bet {
  color: var(--melbet-logo-gold, var(--playground-gold, #ffbc00));
}

.melbet-logo--glow {
  animation: melbetLogoGlow 4.8s ease-in-out infinite;
}

.melbet-logo--glow .melbet-logo__letter--mel {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.06));
}

.melbet-logo--glow .melbet-logo__letter--bet {
  filter: drop-shadow(0 0 10px rgba(255, 188, 0, 0.12));
}

.melbet-logo__shine {
  position: absolute;
  inset: -24% -16%;
  background: linear-gradient(
    110deg,
    transparent 24%,
    rgba(255, 255, 255, 0.04) 42%,
    rgba(255, 188, 0, 0.42) 50%,
    rgba(255, 255, 255, 0.06) 58%,
    transparent 74%
  );
  mix-blend-mode: screen;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-140%) skewX(-18deg);
}

.melbet-logo--idle .melbet-logo__svg {
  animation: melbetLogoFloat 5.4s ease-in-out infinite;
}

.melbet-logo--idle.melbet-logo--glow {
  animation: melbetIdleGlow 5.2s ease-in-out infinite;
}

.melbet-logo--idle.melbet-logo--glow .melbet-logo__letter--mel {
  animation: melbetIdleLetterWhite 4.8s ease-in-out infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 40ms);
}

.melbet-logo--idle.melbet-logo--glow .melbet-logo__letter--bet {
  animation: melbetIdleLetterGold 4.4s ease-in-out infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 48ms);
}

.melbet-logo--scan .melbet-logo__svg {
  animation: melbetLogoFloat 6.2s ease-in-out infinite;
}

.melbet-logo--scan .melbet-logo__shine {
  animation: melbetScan 3.9s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  opacity: 0.88;
}

.melbet-logo--wave .melbet-logo__letter {
  animation: melbetLetterWave 2.8s ease-in-out infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 85ms);
}

.melbet-logo--slot .melbet-logo__letter {
  animation: melbetLetterSlot 4.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 120ms);
}

.melbet-logo--flip .melbet-logo__letter {
  animation: melbetLetterFlip 4.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 110ms);
}

.melbet-logo--twirl .melbet-logo__letter {
  animation: melbetLetterTwirl 4.9s cubic-bezier(0.16, 1, 0.3, 1) infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 100ms);
}

.melbet-logo--storm {
  animation: melbetStormGlow 3.4s ease-in-out infinite;
}

.melbet-logo--storm .melbet-logo__shine {
  animation: melbetScan 2.8s cubic-bezier(0.2, 1, 0.36, 1) infinite;
  opacity: 1;
}

.melbet-logo--storm .melbet-logo__letter--mel {
  animation: melbetLetterStormWhite 3.2s ease-in-out infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 55ms);
}

.melbet-logo--storm .melbet-logo__letter--bet {
  animation: melbetLetterStormGold 2.6s ease-in-out infinite;
  animation-delay: calc(var(--melbet-letter-index, 0) * 65ms);
}

@keyframes melbetLogoGlow {
  0%,
  100% {
    filter: drop-shadow(0 0 12px rgba(255, 188, 0, 0.08));
  }

  50% {
    filter: drop-shadow(0 0 22px rgba(255, 188, 0, 0.16));
  }
}

@keyframes melbetLogoFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -2px, 0);
  }
}

@keyframes melbetIdleGlow {
  0%,
  100% {
    filter:
      drop-shadow(0 0 14px rgba(255, 188, 0, 0.1))
      drop-shadow(0 0 28px rgba(255, 188, 0, 0.08));
  }

  50% {
    filter:
      drop-shadow(0 0 20px rgba(255, 188, 0, 0.16))
      drop-shadow(0 0 44px rgba(255, 188, 0, 0.12));
  }
}

@keyframes melbetIdleLetterWhite {
  0%,
  100% {
    filter:
      drop-shadow(0 0 8px rgba(255, 255, 255, 0.08))
      drop-shadow(0 0 18px rgba(255, 255, 255, 0.05));
  }

  50% {
    filter:
      drop-shadow(0 0 12px rgba(255, 255, 255, 0.15))
      drop-shadow(0 0 24px rgba(255, 255, 255, 0.08));
  }
}

@keyframes melbetIdleLetterGold {
  0%,
  100% {
    filter:
      drop-shadow(0 0 10px rgba(255, 188, 0, 0.14))
      drop-shadow(0 0 22px rgba(255, 188, 0, 0.08));
  }

  50% {
    filter:
      drop-shadow(0 0 15px rgba(255, 188, 0, 0.24))
      drop-shadow(0 0 34px rgba(255, 188, 0, 0.14));
  }
}

@keyframes melbetScan {
  0% {
    opacity: 0;
    transform: translateX(-135%) skewX(-18deg);
  }

  18% {
    opacity: 0.9;
  }

  48% {
    opacity: 1;
  }

  68% {
    opacity: 0.24;
  }

  100% {
    opacity: 0;
    transform: translateX(135%) skewX(-18deg);
  }
}

@keyframes melbetLetterWave {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotateZ(0deg);
  }

  25% {
    transform: translate3d(0, -2px, 0) rotateZ(-0.7deg);
  }

  50% {
    transform: translate3d(0, -4px, 0) rotateZ(0.8deg);
  }

  75% {
    transform: translate3d(0, -1px, 0) rotateZ(-0.35deg);
  }
}

@keyframes melbetLetterSlot {
  0%,
  14%,
  100% {
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }

  20% {
    transform: translate3d(0, 3px, -6px) rotateX(82deg);
  }

  28% {
    transform: translate3d(0, -7px, -12px) rotateX(-210deg);
  }

  35% {
    transform: translate3d(0, 2px, -3px) rotateX(28deg);
  }

  42% {
    transform: translate3d(0, -1px, 0) rotateX(-10deg);
  }

  48% {
    transform: translate3d(0, 0, 0) rotateX(0deg);
  }
}

@keyframes melbetLetterFlip {
  0%,
  12%,
  100% {
    transform: rotateY(0deg);
  }

  28% {
    transform: rotateY(180deg);
  }

  42% {
    transform: rotateY(360deg);
  }

  50% {
    transform: rotateY(0deg);
  }
}

@keyframes melbetLetterTwirl {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotateZ(0deg) rotateY(0deg);
  }

  24% {
    transform: translate3d(0, -2px, 0) rotateZ(-2.4deg) rotateY(-10deg);
  }

  50% {
    transform: translate3d(0, -3px, 4px) rotateZ(2.8deg) rotateY(12deg);
  }

  74% {
    transform: translate3d(0, -1px, 0) rotateZ(-1.6deg) rotateY(-6deg);
  }
}

@keyframes melbetStormGlow {
  0%,
  100% {
    filter:
      drop-shadow(0 0 12px rgba(255, 188, 0, 0.12))
      drop-shadow(0 0 26px rgba(255, 188, 0, 0.08));
  }

  40% {
    filter:
      drop-shadow(0 0 18px rgba(255, 188, 0, 0.18))
      drop-shadow(0 0 42px rgba(255, 188, 0, 0.12));
  }

  62% {
    filter:
      drop-shadow(0 0 28px rgba(255, 188, 0, 0.3))
      drop-shadow(0 0 56px rgba(255, 188, 0, 0.16));
  }
}

@keyframes melbetLetterStormWhite {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotateZ(0deg);
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.08));
  }

  32% {
    transform: translate3d(0, -3px, 0) rotateZ(-1.2deg);
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.12));
  }

  58% {
    transform: translate3d(0, 1px, 4px) rotateZ(1.3deg);
    filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.18));
  }
}

@keyframes melbetLetterStormGold {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotateY(0deg);
    filter:
      drop-shadow(0 0 10px rgba(255, 188, 0, 0.12))
      drop-shadow(0 0 20px rgba(255, 188, 0, 0.08));
  }

  28% {
    transform: translate3d(0, -4px, 8px) rotateY(10deg);
    filter:
      drop-shadow(0 0 14px rgba(255, 188, 0, 0.22))
      drop-shadow(0 0 30px rgba(255, 188, 0, 0.14));
  }

  54% {
    transform: translate3d(0, 1px, 10px) rotateY(-12deg);
    filter:
      drop-shadow(0 0 18px rgba(255, 188, 0, 0.3))
      drop-shadow(0 0 36px rgba(255, 188, 0, 0.18));
  }
}

@media (prefers-reduced-motion: reduce) {
  .melbet-logo,
  .melbet-logo__svg,
  .melbet-logo__letter,
  .melbet-logo__shine {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .melbet-logo__shine {
    opacity: 0 !important;
  }
}
`;

function pickNextVariant(pool: readonly MelbetLogoVariant[], current: MelbetLogoVariant) {
  const candidates = pool.filter((item) => item !== current);
  const source = candidates.length ? candidates : pool;

  return source[Math.floor(Math.random() * source.length)] ?? current;
}

function resolveVariantPool(
  preset: MelbetLogoPresetName,
  variantPool?: readonly MelbetLogoVariant[]
) {
  if (variantPool?.length) {
    return variantPool;
  }

  return preset in MELBET_LOGO_ROTATION_POOLS
    ? MELBET_LOGO_ROTATION_POOLS[preset as keyof typeof MELBET_LOGO_ROTATION_POOLS]
    : MELBET_LOGO_ROTATION_POOLS.default;
}

export type AnimatedMarketLogoProps = Omit<MelbetAnimatedLogoProps, "variant"> & {
  cycleMs?: number;
  preset?: MelbetLogoPresetName;
  randomize?: boolean;
  style?: CSSProperties;
  variantPool?: readonly MelbetLogoVariant[];
  wrapperClassName?: string;
};

export function AnimatedMarketLogo({
  ariaLabel,
  className,
  cycleMs = 6200,
  decorative,
  glow,
  preset = "header",
  randomize = true,
  size,
  style,
  variantPool,
  wrapperClassName
}: AnimatedMarketLogoProps) {
  const presetProps = getMelbetLogoPreset(preset, {
    ariaLabel,
    className,
    decorative,
    glow,
    size
  });
  const fallbackVariant = presetProps.variant ?? MELBET_LOGO_DEFAULTS.variant;
  const poolKey = resolveVariantPool(preset, variantPool).join("|");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [variant, setVariant] = useState<MelbetLogoVariant>(fallbackVariant);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncMotionPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncMotionPreference);

      return () => {
        mediaQuery.removeEventListener("change", syncMotionPreference);
      };
    }

    mediaQuery.addListener(syncMotionPreference);

    return () => {
      mediaQuery.removeListener(syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !randomize) {
      setVariant(fallbackVariant);
      return;
    }

    const pool = (poolKey ? poolKey.split("|") : [fallbackVariant]) as MelbetLogoVariant[];

    if (!pool.length) {
      setVariant(fallbackVariant);
      return;
    }

    setVariant((current) => pickNextVariant(pool, current));

    const intervalId = window.setInterval(() => {
      setVariant((current) => pickNextVariant(pool, current));
    }, cycleMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [cycleMs, fallbackVariant, poolKey, prefersReducedMotion, randomize]);

  return (
    <span className={wrapperClassName} style={style}>
      <MelbetAnimatedLogo {...presetProps} variant={variant} />
      <style jsx global>{MELBET_LOGO_STYLES}</style>
    </span>
  );
}
