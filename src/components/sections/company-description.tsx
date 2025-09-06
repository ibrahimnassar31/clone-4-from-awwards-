"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyDescription = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // تقسيم الفقرة إلى أسطر حقيقية بناءً على الالتفاف في الـ DOM
    const splitParagraphIntoLines = (p: HTMLElement) => {
      const original = p.textContent || "";
      p.innerHTML = "";

      const tokens = original.split(/(\s+)/); // يحافظ على المسافات
      const wordSpans: HTMLSpanElement[] = [];

      tokens.forEach((tk) => {
        const span = document.createElement("span");
        span.className = "word";
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre"; // حتى تبقى المسافات
        span.textContent = tk;
        p.appendChild(span);
        wordSpans.push(span);
      });

      const lines: HTMLSpanElement[] = [];
      let currentTop = -1;
      let currentLine: HTMLSpanElement | null = null;

      wordSpans.forEach((w, i) => {
        const top = w.offsetTop;
        if (i === 0 || top !== currentTop) {
          currentTop = top;
          currentLine = document.createElement("span");
          currentLine.className = "line";
          currentLine.style.display = "block";
          currentLine.style.position = "relative";
          p.appendChild(currentLine);
          lines.push(currentLine);
        }
        currentLine!.appendChild(w); // ينقل الكلمة داخل سطرها
      });

      return lines;
    };

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      if (!root) return;

      // استهدف كل الفقرات داخل المحتوى
      const paragraphs = Array.from(root.querySelectorAll<HTMLElement>("p"));
      const allLines: HTMLElement[] = [];

      paragraphs.forEach((p) => {
        const lines = splitParagraphIntoLines(p);
        allLines.push(...lines);

        if (prefersReduced) {
          gsap.set(lines, { opacity: 1, y: 0 });
          return;
        }

        // حالة ابتدائية
        gsap.set(lines, { opacity: 0, y: 12 });

        // أنيميشن لكل فقرة عند دخولها
        gsap.to(lines, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 0.55,
          stagger: 0.08,
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-20">
      <div className="container">
        <hr className="mb-12 md:mb-16 border-t border-border" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-text-black mb-8">
            SquareSigns.com is a Leading Sign Maker Online
          </h2>
          <div className="space-y-4 text-text-gray text-base leading-relaxed">
            <p>
              Square Signs is an online sign printing company featuring an
              intuitive design tool and high-grade signs that can help you
              accomplish all your visual communication needs. Our platform
              enables you to personalize your sign design online. Get a sign
              made on trendy mediums such as canvas prints, car decals, vinyl
              lettering and acrylic displays.
            </p>
            <p>
              You can create signs for every occasion here. Whether you need
              professional signs to brand a private event, decorative signs to
              adorn your home or business signs to promote your company, we’ve
              got you covered. Make signs for company branding, promotions and
              decoration within minutes. Display them on stylish materials to
              transform your home or workspace instantly!
            </p>
            <p>
              Fully modifiable signs let you express your personality and
              achieve your marketing goals with ease. All our signs are made of
              top-quality printable materials with exceptional durability. Our
              design tool makes it easy to create your own indoor and outdoor
              business signs and decor pieces at affordable prices. Create your
              own sign and order with shipping across the USA and Canada.
            </p>
            <p>
              SquareSigns.com&nbsp;values your time and money. That’s why we’ve
              made it easy to design and order high-quality signs with a smart
              3-step process. This approach lets you optimize your custom sign
              printing experience so you can get the best results in the
              fastest time.
            </p>
            <p>
              Contact us if you have any questions regarding our products,
              design tool, shipping or anything else related to signs. Our
              customer support specialists are ready to assist you Mon-Fri from
              07:00 AM to 5:00 PM PST.
            </p>
          </div>
        </div>
      </div>

      {/* تنسيقات مساعدة لثبات القياس */}
      <style jsx>{`
        .word {
          will-change: transform;
        }
        .line {
          transform-origin: left center;
        }
        @media (prefers-reduced-motion: reduce) {
          .line {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyDescription;
