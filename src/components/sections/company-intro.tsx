"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CompanyIntro = () => {
  const revealRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!(gsap as any).plugins?.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const ctx = gsap.context(() => {
      const selector = '.reveal-line';

      if (reduce) {
        gsap.set(selector, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(selector, { opacity: 0, y: 40 });

      gsap.to(selector, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: revealRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, revealRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={revealRef} className="container pt-10 pb-20">
      <div className="text-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/logo_icon_medium-2.svg"
          alt="Square Signs"
          width={60}
          height={60}
          className="mx-auto mb-[30px]"
        />
        <h1 className="text-4xl font-semibold text-text-black max-w-[800px] mx-auto leading-tight">
          Make and Print Your Custom Sign Online with SquareSigns
        </h1>
      </div>

      <hr className="border-t border-[#dee2e6] my-10 mx-auto" />

      {/* Example: animated 3-line text using <p> tags */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="text-text-black text-xl font-medium leading-7 space-y-2 text-left">
          <p className="reveal-line">Craft stunning signs effortlessly</p>
          <p className="reveal-line">Customize every detail to perfection</p>
          <p className="reveal-line">Print, deliver, and shine</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-text-gray text-base leading-6 space-y-4 text-left">
          <p className="reveal-line">
            Square Signs is an online sign printing company featuring an intuitive
            design tool and high-grade signs that can help you accomplish all
            your visual communication needs. Our platform enables you to
            personalize your sign design online. Get a sign made on trendy
            mediums such as canvas prints, car decals, vinyl lettering and
            acrylic displays.
          </p>
          <p className="reveal-line">
            You can create signs for every occasion here. Whether you need
            professional signs to brand a private event, decorative signs to
            adorn your home or business signs to promote your company, we’ve got
            you covered. Make signs for company branding, promotions and
            decoration within minutes. Display them on stylish materials to
            transform your home or workspace instantly!
          </p>
          <p className="reveal-line">
            Fully modifiable signs let you express your personality and achieve
            your marketing goals with ease. All our signs are made of
            top-quality printable materials with exceptional durability. Our
            design tool makes it easy to create your own indoor and outdoor
            business signs and decor pieces at affordable prices. Create your own
            sign and order with shipping across the USA and Canada.
          </p>
          <p className="reveal-line">
            SquareSigns.com&nbsp;values your time and money. That’s why we’ve made
            it easy to design and order high-quality signs with a smart 3-step
            process. This approach lets you optimize your custom sign printing
            experience so you can get the best results in the fastest time.
          </p>
          <p className="reveal-line">
            Contact us if you have any questions regarding our products, design
            tool, shipping or anything else related to signs. Our customer
            support specialists are ready to assist you Mon-Fri from 07:00 AM to
            5:00 PM PST.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <button className="reveal-line bg-primary-teal text-white py-2.5 px-5 rounded-sm text-sm font-medium inline-flex items-center gap-2.5 transition-colors hover:bg-teal-500">
          <MessageSquare className="w-4 h-4" />
          <span>CHAT With US!</span>
        </button>
      </div>
    </section>
  );
};

export default CompanyIntro;
