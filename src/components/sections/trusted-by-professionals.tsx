"use client";

import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/facebook-6.svg", alt: "facebook", width: 121, height: 25 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/pepsi-7.svg", alt: "pepsi", width: 121, height: 31 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/amazon-8.svg", alt: "amazon", width: 121, height: 36 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/google-9.svg", alt: "google", width: 121, height: 39 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/pixar-10.svg", alt: "pixar", width: 121, height: 21 },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/adobe-11.svg", alt: "adobe", width: 121, height: 29 },
];

const TrustedByProfessionals = () => {
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      // keep it buttery-smooth
      containScroll: "trimSnaps",
      skipSnaps: true,
    },
    prefersReduced
      ? []
      : [
          AutoScroll({
            playOnInit: true,
            speed: 1.2, // tune 0.8–2.0
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]
  );

  useEffect(() => {
    if (!emblaApi || prefersReduced) return;
    const onVisibility = () => {
      const plugin = emblaApi.plugins()?.autoScroll;
      if (!plugin) return;
      if (document.hidden) plugin.stop();
      else plugin.play();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [emblaApi, prefersReduced]);

  // duplicate list to ensure dense belt (optional, looks richer)
  const slides = useMemo(() => [...logos, ...logos, ...logos], []);

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-6">
        <h3 className="text-center font-display text-2xl font-semibold text-text-black mb-[38px]">
          Trusted by Professionals
        </h3>

        <div className="relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10" />

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex items-center select-none">
              {slides.map((logo, idx) => (
                <div
                  key={`${logo.alt}-${idx}`}
                  className="flex-[0_0_auto] px-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  aria-label={logo.alt}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                    sizes="(max-width: 768px) 120px, 140px"
                    priority={idx < 6} // first row eager for LCP
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* small caption for credibility (optional) */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Logos are for illustrative purposes only and may be trademarks of their respective owners.
        </p>
      </div>
    </section>
  );
};

export default TrustedByProfessionals;
