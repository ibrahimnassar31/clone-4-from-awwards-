"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Design-tool-12.svg",
    title: "Free Design Tool",
    description:
      "Create custom graphics using our advanced design tool or by uploading your own images",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Click-13.svg",
    title: "Customizable Buying Options",
    description:
      "Fully customize your sign to your taste and requirements in just a few clicks.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Templates-14.svg",
    title: "2000+ Free Templates",
    description:
      "Get inspired by our thousands of free templates. Pick one and start customizing it right away!",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Size-15.svg",
    title: "Flexible Sizes",
    description:
      "Everything at Square Signs is customizable, including product sizes.",
  },
];

const GetStartedWithSquareSigns = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        // Show everything instantly for reduced motion users.
        gsap.set("[data-intro]", { opacity: 1, y: 0 });
        gsap.set(".feature-card", { opacity: 1, x: 0, y: 0, rotate: 0 });
        gsap.set(".feature-icon", { opacity: 1, scale: 1, rotate: 0 });
        gsap.set(".feature-text > *", { opacity: 1, y: 0 });
        return;
      }

      // Intro (logo + title)
      gsap.fromTo(
        "[data-intro]",
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Feature cards — alternate directions (left/right) and animate on enter
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
      cards.forEach((card, i) => {
        // “Aggressive” start outside the screen — scale with viewport width
        const dirX = i % 2 === 0 ? -1 : 1;
        // offset based on screen size (more on desktop)
        const largeOffset = () => (window.innerWidth >= 1024 ? 220 : 120);

        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            // play once; remove once: true to allow re-animate when scrolling back
            once: true,
          },
        });

        // Card container slide + slight overshoot settle
        tl.fromTo(
          card,
          { opacity: 0, x: () => dirX * largeOffset(), y: 50, rotate: dirX * 1.5 },
          { opacity: 1, x: 0, y: 0, rotate: 0, duration: 0.95 }
        )
          .to(card, { x: dirX * -8, duration: 0.18, ease: "power2.out" }, "-=0.55")
          .to(card, { x: 0, duration: 0.25, ease: "power3.out" }, "-=0.36");

        // Icon pop (scale + slight spin)
        const icon = card.querySelector(".feature-icon");
        if (icon) {
          tl.fromTo(
            icon,
            { opacity: 0, scale: 0.7, rotate: -8 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.5"
          );
        }

        // Text reveal (title then description)
        const textEls = card.querySelectorAll(".feature-text > *");
        if (textEls.length) {
          tl.fromTo(
            textEls,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" },
            "-=0.4"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#F0F5FA] to-white py-20 font-body">
      <div className="container">
        <div className="text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/logo_icon_medium-2.svg"
            alt="squaresigns logo"
            width={80}
            height={80}
            className="mx-auto mb-6"
            data-intro
          />
          <h2 className="font-display text-4xl font-semibold text-text-black mb-16" data-intro>
            Get Started With <br /> SquareSigns
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card relative flex flex-col items-center text-center will-change-transform
                         rounded-xl border border-transparent bg-white/50 backdrop-blur-[1px] p-6
                         shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Accent sweep on hover (optional visual polish) */}
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Image
                src={feature.icon}
                alt="icon"
                width={64}
                height={64}
                className="feature-icon mb-5 h-16 w-auto"
              />

              <div className="feature-text px-2">
                <h3 className="font-display text-lg font-semibold text-text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-text-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedWithSquareSigns;
