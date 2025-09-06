"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pagesCol1 = [
  { name: "Products", href: "/custom-signs/" },
  { name: "Templates", href: "/templates/" },
  { name: "Design Tool", href: "/designer/" },
  { name: "Blog", href: "/blog/" },
  { name: "Sitemap", href: "/sitemap/" },
  { name: "FAQ", href: "/faq/" },
];

const pagesCol2 = [
  { name: "Corporate Offers", href: "/quote/" },
  { name: "Refer a Friend", href: "/referral-program/" },
  { name: "Affiliate Program", href: "/affiliate-program/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Contact Us", href: "/contact-us/" },
  { name: "Terms & Policies", href: "/terms-and-policies/" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/squaresignsinc", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/squaresigns_com/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/squaresigns", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/squaresigns", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCk9h12wS0iGg6nB8I7yS4sA", label: "Youtube" },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = footerRef.current;
      if (!root) return;

      const cols = gsap.utils.toArray<HTMLElement>(".footer-col");
      const lists = gsap.utils.toArray<HTMLElement>(".footer-links li, .footer-links a");
      const socials = gsap.utils.toArray<HTMLElement>(".footer-social a");

      if (prefersReduced) {
        gsap.set(".footer-hr", { scaleX: 1, opacity: 1 });
        gsap.set(cols, { opacity: 1, y: 0, filter: "none", skewY: 0 });
        gsap.set(lists, { opacity: 1, y: 0 });
        gsap.set(socials, { opacity: 1, y: 0 });
        return;
      }

      // خط فاصل يتمدّد من اليسار
      gsap.fromTo(
        ".footer-hr",
        { scaleX: 0, opacity: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start: "top 85%", once: true },
        }
      );

      // أعمدة الفوتر تدخل من أسفل بانسيابية + ضباب خفيف
      gsap.fromTo(
        cols,
        { opacity: 0, y: 80, filter: "blur(6px)", skewY: 2 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          skewY: 0,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        }
      );

      // روابط القوائم تتوالى بعد دخول الأعمدة
      gsap.fromTo(
        lists,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: { trigger: root, start: "top 78%", once: true },
        }
      );

      // أيقونات السوشيال بوب خفيف من أسفل
      gsap.fromTo(
        socials,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.6)",
          stagger: 0.06,
          scrollTrigger: { trigger: root, start: "top 76%", once: true },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-[#343a40] font-body">
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-[70px]">
        <hr className="footer-hr mb-10 border-t border-white/20 opacity-0 scale-x-0" />

        <div className="grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Col 1 */}
          <div className="footer-col lg:col-span-3">
            <Link href="/" aria-label="Square Signs Home">
              <Image
                src="https://cdn.squaresigns.com/images/media/logo_vertical_light_medium.svg"
                alt="Square Signs"
                width={80}
                height={85}
                className="mb-6 h-auto w-20"
              />
            </Link>
            <p className="text-sm text-white/70">
              © 2025 Square Signs LLC
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Col 2 */}
          <div className="footer-col lg:col-span-2">
            <h4 className="mb-6 font-display font-semibold">Pages</h4>
            <ul className="footer-links space-y-4">
              {pagesCol1.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col pt-0 lg:col-span-2 lg:pt-12">
            <ul className="footer-links space-y-4">
              {pagesCol2.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col lg:col-span-3">
            <h4 className="mb-6 font-display font-semibold">Contacts</h4>
            <ul className="footer-links space-y-4 text-sm text-white/70">
              <li>3520 Valhalla Dr. Burbank, CA 91505-1126</li>
              <li>
                <a href="tel:+18448334455" className="transition-colors hover:text-white">
                  +1 (844) 833-4455
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@squaresigns.com"
                  className="transition-colors hover:text-white"
                >
                  support@squaresigns.com
                </a>
              </li>
            </ul>

            <h4 className="mb-6 mt-8 font-display font-semibold">We are social</h4>
            <div className="footer-social flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* لمسة بسيطة لتنعيم الحواف عند الحركة (اختياري) */}
      <style jsx>{`
        .footer-col {
          will-change: transform, filter, opacity;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
