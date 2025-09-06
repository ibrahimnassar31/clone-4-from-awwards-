"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stepsData = [
  {
    step: 1,
    iconUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-3.svg",
    title: "Pick Templates or Upload Designs",
    description:
      "Head over to our templates to select a theme that matches your vision. Modify it or upload an image to make your own sign online. You can also explore templates directly from our design tool.",
  },
  {
    step: 2,
    iconUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-(1)-4.svg",
    title: "Fully Customize Your Signs",
    description:
      "Our online design tool comes with original templates to create a unique design for your signs. Select a print medium, size, style, texts, icons, accessories as well as sign printing and cutting options.",
  },
  {
    step: 3,
    iconUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-(2)-5.svg",
    title: "Click to Order Your Product",
    description:
      "Place your order once done with the design. Click “add to cart” for ordering then provide shipping info and any notes regarding the order. Proceed to checkout and we’ll get your signs printed right away.",
  },
];

const ThreeStepProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        // اعرض كل شيء بدون أنيميشن
        gsap.set("[data-animate='intro']", { opacity: 1, y: 0 });
        gsap.set(".step-card", { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 });
        gsap.set(".step-number", { opacity: 0.12, y: 0 });
        gsap.set(".step-icon", { opacity: 1, scale: 1 });
        gsap.set("#connector-path", { opacity: 0.2, strokeDashoffset: 0 });
        return;
      }

      // 1) مقدمة القسم (العنوان + الفقرة)
      gsap.fromTo(
        "[data-animate='intro']",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2) رسم الخطّ الواصل بين الخطوات (للشاشات المتوسطة فأعلى)
      const path = document.getElementById("connector-path") as SVGPathElement | null;
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.25,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }

      // 3) بطاقات الخطوات (دخول مختلف لكل بطاقة)
      const cards = gsap.utils.toArray<HTMLElement>(".step-card");

      cards.forEach((card, i) => {
        const direction =
          i % 3 === 0 ? "left" : i % 3 === 1 ? "bottom" : "right";

        const baseFrom =
          direction === "left"
            ? { x: -80, y: 16, rotate: -1.5 }
            : direction === "right"
            ? { x: 80, y: 16, rotate: 1.5 }
            : { y: 80, scale: 0.98, rotate: 0 };

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        // بطاقة
        tl.fromTo(
          card,
          { opacity: 0, ...baseFrom },
          { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, duration: 0.9 }
        );

        // الرقم الخلفي
        const num = card.querySelector(".step-number");
        if (num) {
          tl.fromTo(
            num,
            { opacity: 0, y: 16 },
            { opacity: 0.12, y: 0, duration: 0.6 },
            "-=0.55"
          );
        }

        // الأيقونة (Pop-in) + نبضة خفيفة
        const icon = card.querySelector(".step-icon");
        const ring = card.querySelector(".pulse-ring");
        if (icon) {
          tl.fromTo(
            icon,
            { opacity: 0, scale: 0.7 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.6)" },
            "-=0.4"
          );
        }
        if (ring) {
          tl.fromTo(
            ring,
            { opacity: 0.2, scale: 0.6 },
            { opacity: 0, scale: 1.6, duration: 0.9, ease: "power2.out" },
            "-=0.4"
          );
        }

        // Hover Tilt (3D خفيف)
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const rx = -(y - rect.height / 2) / (rect.height / 2) * 4; // -4..4
          const ry = (x - rect.width / 2) / (rect.width / 2) * 4;   // -4..4
          gsap.to(card, {
            rotateX: rx,
            rotateY: ry,
            transformPerspective: 800,
            transformOrigin: "center",
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const handleLeave = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power3.out" });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        // تنظيف
        ScrollTrigger.addEventListener("refreshInit", () => handleLeave());
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="text-center mb-20">
          <h3
            data-animate="intro"
            className="font-display text-3xl font-semibold text-text-black mb-6"
          >
            3-Step Design &amp; Order Process
          </h3>
          <p
            data-animate="intro"
            className="font-body text-base text-text-gray max-w-3xl mx-auto"
          >
            We’ve made the sign design and ordering process as easy as possible.
            Follow these simple steps to design your very own sign.
          </p>
        </div>

        {/* Connector line (only md+) */}
        <div className="relative hidden md:block mb-10">
          <svg
            className="absolute left-0 right-0 mx-auto"
            viewBox="0 0 1200 120"
            width="100%"
            height="120"
          >
            {/* خط لطيف مع تقوّس بسيط */}
            <path
              id="connector-path"
              d="M 80 60 C 300 20, 900 20, 1120 60"
              fill="none"
              stroke="currentColor"
              className="text-primary/40"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-24">
          {stepsData.map((step, i) => (
            <div
              key={step.step}
              className="step-card relative flex flex-col items-center text-center bg-white rounded-xl border border-border shadow-sm p-8 hover:shadow-lg transition-shadow will-change-transform"
            >
              {/* رقم الخلفية */}
              <span className="step-number absolute -top-10 left-1/2 -translate-x-1/2 text-[160px] font-extrabold text-gray-100 select-none pointer-events-none z-0">
                {step.step}
              </span>

              {/* أيقونة + حلقة نبضة */}
              <div className="relative z-10 h-[68px] w-[68px]">
                <span className="pulse-ring absolute inset-0 rounded-full bg-primary/15 blur-[2px]"></span>
                <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    className="step-icon"
                    src={step.iconUrl}
                    alt={`Step ${step.step} icon`}
                    width={60}
                    height={60}
                  />
                </div>
              </div>

              {/* محتوى */}
              <h4 className="relative z-10 font-display text-lg font-bold text-text-black mt-8 mb-4">
                {step.title}
              </h4>
              <p className="relative z-10 font-body text-base text-text-gray">
                {step.description}
              </p>

              {/* لمسة جمالية على الهوفر */}
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
