"use client";

import { motion, type Variants } from "framer-motion";
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

type RevealDirection = "up" | "down" | "left" | "right";
type RevealPreset = "section" | "card" | "text" | "button" | "soft";
type RevealTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "ul"
  | "li"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "button"
  | "a";

type RevealContextValue = {
  isInsideReveal: boolean;
};

const RevealContext = createContext<RevealContextValue>({
  isInsideReveal: false,
});

const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

function getAxisOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: distance };
  }
}

function getPresetConfig(preset: RevealPreset) {
  switch (preset) {
    case "section":
      return { distance: 28, duration: 0.56, blur: 0 };
    case "card":
      return { distance: 22, duration: 0.5, blur: 0 };
    case "button":
      return { distance: 12, duration: 0.42, blur: 0 };
    case "soft":
      return { distance: 14, duration: 0.42, blur: 0 };
    case "text":
    default:
      return { distance: 16, duration: 0.48, blur: 0 };
  }
}

function buildVariants({
  direction,
  distance,
  duration,
  delay,
  blur,
  staggerChildren,
  delayChildren,
  scaleFrom,
}: {
  direction: RevealDirection;
  distance: number;
  duration: number;
  delay: number;
  blur: number;
  staggerChildren: number;
  delayChildren: number;
  scaleFrom?: number;
}): Variants {
  const { x, y } = getAxisOffset(direction, distance);

  return {
    hidden: {
      opacity: 0,
      x,
      y,
      scale: scaleFrom ?? 1,
      filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: easeSmooth,
        staggerChildren,
        delayChildren,
      },
    },
  };
}

const motionTags = {
  a: motion.a,
  article: motion.article,
  aside: motion.aside,
  button: motion.button,
  div: motion.div,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  header: motion.header,
  li: motion.li,
  main: motion.main,
  nav: motion.nav,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
} as const;

type RevealProps = {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  blur?: number;
  once?: boolean;
  amount?: number;
  stagger?: number;
  delayChildren?: number;
  scaleFrom?: number;
  id?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  dir?: "ltr" | "rtl" | "auto";
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function Reveal({
  as = "div",
  children,
  className,
  preset = "text",
  direction = "up",
  distance,
  duration,
  delay = 0,
  blur,
  once = true,
  amount = 0.18,
  stagger = 0,
  delayChildren = 0,
  scaleFrom,
  ...rest
}: RevealProps) {
  const parent = useContext(RevealContext);
  const MotionComponent = motionTags[as] ?? motion.div;

  const presetConfig = getPresetConfig(preset);

  const variants = useMemo(
    () =>
      buildVariants({
        direction,
        distance: distance ?? presetConfig.distance,
        duration: duration ?? presetConfig.duration,
        delay,
        blur: blur ?? presetConfig.blur,
        staggerChildren: stagger,
        delayChildren,
        scaleFrom,
      }),
    [
      direction,
      distance,
      duration,
      delay,
      blur,
      stagger,
      delayChildren,
      scaleFrom,
      presetConfig.distance,
      presetConfig.duration,
      presetConfig.blur,
    ]
  );

  const content = (
    <RevealContext.Provider value={{ isInsideReveal: true }}>
      {children}
    </RevealContext.Provider>
  );

  if (parent.isInsideReveal) {
    return (
      <MotionComponent className={className} variants={variants} {...rest}>
        {content}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      {...rest}
    >
      {content}
    </MotionComponent>
  );
}