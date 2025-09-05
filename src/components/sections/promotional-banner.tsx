"use client";

import React, { useEffect, useRef, useState } from "react";

const Countdown: React.FC<{ text: string }> = ({ text }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 57,
    hours: 17,
    minutes: 53,
    seconds: 52,
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        if (days < 0) {
          window.clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="whitespace-nowrap">
      {text} {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </div>
  );
};

function useAutoCarousel(length: number, intervalMs = 3000) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const clear = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    clear();
    if (length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
  };

  useEffect(() => {
    start();
    return clear; 
  }, [length, intervalMs]);

  const goTo = (i: number) => {
    setIndex(((i % length) + length) % length);
    start(); 
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return { index, goTo, next, prev, pause: clear, resume: start } as const;
}

const PromotionalBanner = () => {
  const banners: React.ReactNode[] = [
    <div
      key="banner-1"
      className="flex h-full items-center justify-center gap-3 sm:gap-4 px-3 sm:px-10 whitespace-nowrap overflow-hidden"
    >
      <p className="m-0 inline-flex items-center text-[14px] md:text-[15px] leading-none">
        Get the scariest signs at the sweetest prices!
        <a
          href="https://www.squaresigns.com/category/halloween-signs/"
          className="ml-1.5 font-bold underline inline-block align-middle leading-none"
        >
          Shop Now
        </a>
      </p>
      <div className="hidden shrink-0 md:block text-[14px] leading-none">
        <Countdown text="Offer ends in" />
      </div>
    </div>,
    <div
      key="banner-2"
      className="flex h-full items-center justify-center gap-3 sm:gap-4 px-3 sm:px-10 whitespace-nowrap overflow-hidden"
    >
      <p className="m-0 inline-flex items-center text-[14px] md:text-[15px] leading-none">
        Ready for Halloween? Take part in our spooky contest for a
        chance to win big!
        <a
          href="https://www.squaresigns.com/halloween-contest/"
          className="ml-1.5 font-bold underline inline-block align-middle leading-none"
        >
          Learn More
        </a>
      </p>
      <div className="hidden shrink-0 md:block text-[14px] leading-none">
        <Countdown text="Offer ends in" />
      </div>
    </div>,
        <div
      key="banner-3"
      className="flex h-full items-baseline justify-center gap-2 sm:gap-3 px-3 sm:px-10 whitespace-nowrap overflow-hidden"
    >
      <p className="m-0 font-bold">10% OFF YOUR FIRST ORDER</p>
      <button className="cursor-pointer border-none bg-transparent p-0 font-bold text-white underline">
        Sign Up Now!
      </button>
    </div>

,
    <div
      key="banner-4"
      className="flex h-full items-center justify-center gap-2 sm:gap-3 px-3 sm:px-10 whitespace-nowrap overflow-hidden text-center"
    >
      <p className="m-0 font-bold leading-none">FREE SHIPPING ON ORDERS OVER $99</p>
      <p className="m-0 text-xs leading-none max-w-[60vw] overflow-hidden text-ellipsis">
        Eligible for ground shipping within the contiguous US. Excludes products over 36" and freight shipping.
      </p>
    </div>,
  ];

  const { index, goTo, next, prev } = useAutoCarousel(banners.length, 3000);

  return (
    <div className="bg-primary-orange font-body text-[15px] text-white">
      <div className="container">
        <div className="relative h-[44px] overflow-hidden">
          <div
            className="flex h-full items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {banners.map((content, i) => (
              <div key={i} className="min-w-full h-full">
                {content}
              </div>
            ))}
          </div>

          <button
            aria-label="Previous banner"
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 h-full w-8 -translate-y-1/2 rounded-none border-none bg-transparent p-1 text-white hover:bg-black/20"
          >
            ‹
          </button>
          <button
            aria-label="Next banner"
            onClick={next}
            className="absolute right-0 top-1/2 z-10 h-full w-8 -translate-y-1/2 rounded-none border-none bg-transparent p-1 text-white hover:bg-black/20"
          >
            ›
          </button>

          <div className="pointer-events-auto absolute bottom-1 left-1/2 z-10 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {banners.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to banner ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
