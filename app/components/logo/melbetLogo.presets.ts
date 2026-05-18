import type { MelbetAnimatedLogoProps } from "./MelbetAnimatedLogo";

type MelbetLogoPreset = Pick<
  MelbetAnimatedLogoProps,
  "decorative" | "glow" | "size" | "variant"
>;

export const MELBET_LOGO_PRESETS = {
  casinoSection: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "storm"
  },
  experimental: {
    decorative: false,
    glow: true,
    size: "md",
    variant: "slot"
  },
  footer: {
    decorative: true,
    glow: false,
    size: "nav",
    variant: "idle"
  },
  header: {
    decorative: true,
    glow: false,
    size: "nav",
    variant: "idle"
  },
  hero: {
    decorative: false,
    glow: true,
    size: "hero",
    variant: "idle"
  },
  landing: {
    decorative: true,
    glow: false,
    size: "nav",
    variant: "idle"
  },
  promoSection: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "scan"
  },
  section: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "idle"
  },
  sectionHighlight: {
    decorative: true,
    glow: true,
    size: "sm",
    variant: "wave"
  },
  sportsSection: {
    decorative: true,
    glow: true,
    size: "nav",
    variant: "wave"
  }
} as const satisfies Record<string, MelbetLogoPreset>;

export type MelbetLogoPresetName = keyof typeof MELBET_LOGO_PRESETS;

export function getMelbetLogoPreset(
  name: MelbetLogoPresetName,
  overrides: Partial<MelbetAnimatedLogoProps> = {}
): MelbetAnimatedLogoProps {
  return {
    ...MELBET_LOGO_PRESETS[name],
    ...overrides
  };
}
