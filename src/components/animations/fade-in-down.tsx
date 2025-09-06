"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type ElementTag = keyof React.JSX.IntrinsicElements;

type FadeInDownProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  distance?: number;
  staggerIndex?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
  as?: ElementTag;
};

const FadeInDown: React.FC<FadeInDownProps> = React.memo(function FadeInDown({
  children,
  className,
  style,
  delay = 0,
  duration = 0.6,
  distance = 40,
  staggerIndex,
  stagger = 0.15,
  once = true,
  amount = 0.2,
  as = "div",
}) {
  const reduce = useReducedMotion();

  const finalDelay = delay + (typeof staggerIndex === "number" ? Math.max(0, staggerIndex) * (stagger ?? 0.15) : 0);

  const MotionTag: any = (motion as any)[as] ?? motion.div;

  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -Math.abs(distance) };
  const animate = reduce
    ? { opacity: 1, y: 0, transition: { duration: 0 } }
    : { opacity: 1, y: 0, transition: { duration, ease: "easeOut", delay: finalDelay } };

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      className={className}
      style={{ willChange: "opacity, transform", ...style }}
    >
      {children}
    </MotionTag>
  );
});

export default FadeInDown;
