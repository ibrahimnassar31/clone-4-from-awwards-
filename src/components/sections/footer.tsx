"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ShoppingCart, User, ChevronDown, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const paymentMethods = [
  { src: "https://cdn.squaresigns.com/images/media/footer-visa.svg", alt: "Visa" },
  { src: "https://cdn.squaresigns.com/images/media/footer-mastercard.svg", alt: "Mastercard" },
  { src: "https://cdn.squaresigns.com/images/media/footer-discover.svg", alt: "Discover" },
  { src: "https://cdn.squaresigns.com/images/media/footer-amex.svg", alt: "American Express" },
  { src: "https://cdn.squaresigns.com/images/media/footer-paypal.svg", alt: "Paypal" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/squaresignsinc", "aria-label": "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/squaresigns_com/", "aria-label": "Instagram" },
  { icon: Twitter, href: "https://x.com/squaresigns", "aria-label": "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/squaresigns", "aria-label": "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCk9h12wS0iGg6nB8I7yS4sA", "aria-label": "Youtube" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#343a40] font-body">
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-[70px]">
        <div className="grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <Link href="/" aria-label="Square Signs Home">
              <Image
                src="https://cdn.squaresigns.com/images/media/logo_vertical_light_medium.svg"
                alt="Square Signs"
                width={80}
                height={85}
                className="mb-6 h-auto w-20"
              />
            </Link>
            <p className="text-sm text-white/70">© 2025 Square Signs LLC<br />All rights reserved.</p>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="mb-6 font-display font-semibold">Pages</h4>
            <ul className="space-y-4">
              {pagesCol1.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-0 lg:col-span-2 lg:pt-12">
            <ul className="space-y-4">
              {pagesCol2.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
      
          
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-display font-semibold">Contacts</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>3520 Valhalla Dr. Burbank, CA 91505-1126</li>
              <li>
                <a href="tel:+18448334455" className="transition-colors hover:text-white">+1 (844) 833-4455</a>
              </li>
              <li>
                <a href="mailto:support@squaresigns.com" className="transition-colors hover:text-white">support@squaresigns.com</a>
              </li>
            </ul>

            <h4 className="mb-6 mt-8 font-display font-semibold">We are social</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social['aria-label']} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social['aria-label']} className="text-white/70 transition-colors hover:text-white">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;