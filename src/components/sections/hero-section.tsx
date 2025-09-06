"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProductCalculator = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="bg-[#f8f9fa] p-6 rounded-lg h-full flex flex-col shadow-sm"
      data-animate="right"
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/acrylic-photo-print-main-4.jpg"
          alt="Acrylic Photo Print"
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div className="flex-grow">
          <h3 className="font-semibold text-lg text-text-black">
            Acrylic Photo Prints
          </h3>
          <Badge className="bg-best-seller-orange text-white text-[10px] font-bold px-2 py-0.5 mt-1 hover:bg-best-seller-orange">
            Best Seller
          </Badge>
        </div>
        <button className="text-sm text-[#007aff] font-semibold flex-shrink-0 hover:underline">
          Change
        </button>
      </div>

      <div className="space-y-4 flex-grow">
        <div>
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-normal text-text-gray">
              Standard Size:
            </Label>
            <div className="flex items-center gap-4">
              <Label className="text-sm font-normal text-text-gray">
                Size:
              </Label>
              <RadioGroup defaultValue="inch" className="flex">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inch" id="inch-radio" />
                  <Label
                    htmlFor="inch-radio"
                    className="font-normal text-sm text-text-gray cursor-pointer"
                  >
                    Inch
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="feet" id="feet-radio" />
                  <Label
                    htmlFor="feet-radio"
                    className="font-normal text-sm text-text-gray cursor-pointer"
                  >
                    Feet
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <Select defaultValue="12x12">
            <SelectTrigger className="w-full bg-white text-text-black border-input">
              <SelectValue>12 x 12 Inch</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12x12">12 x 12 Inch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4 items-end">
          <div>
            <Label className="text-sm font-normal text-text-gray mb-2 block">
              Custom Size:
            </Label>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-gray text-sm">
                  W
                </span>
                <Input
                  defaultValue="12"
                  className="w-full bg-white pl-6 text-text-black"
                />
              </div>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-gray text-sm">
                  H
                </span>
                <Input
                  defaultValue="12"
                  className="w-full bg-white pl-6 text-text-black"
                />
              </div>
            </div>
          </div>
          <div>
            <Label className="text-sm font-normal text-text-gray mb-2 block">
              Qty:
            </Label>
            <div className="flex items-center border border-input rounded-md bg-white h-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-text-gray hover:bg-transparent rounded-r-none"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(parseInt(e.target.value, 10) || 1)
                }
                className="w-full text-center border-y-0 border-x focus-visible:ring-0 shadow-none bg-transparent text-text-black px-0"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-text-gray hover:bg-transparent rounded-l-none"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-gray">Price Total:</span>
          <span className="text-2xl font-bold text-text-black">$67.87</span>
        </div>
        <Button className="w-full h-12 bg-primary-teal text-white font-bold text-lg hover:bg-primary-teal/90">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero (left)
      gsap.fromTo(
        "[data-animate='left']",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='left']",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate calculator (right)
      gsap.fromTo(
        "[data-animate='right']",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-animate='right']",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white py-8 md:py-10" ref={containerRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div
            className="relative bg-[#ebe8f3] p-8 rounded-lg flex flex-col md:flex-row items-center justify-between min-h-[480px] overflow-hidden"
            data-animate="left"
          >
            <div
              className="absolute inset-0 bg-no-repeat opacity-50"
              style={{
                backgroundImage:
                  "url(https://www.squaresigns.com/img/V2/pages/main-page/halloween-spider-webs.svg)",
                backgroundPosition: "top -20px left -40px",
                backgroundSize: "70%",
              }}
            ></div>
            <div
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://www.squaresigns.com/img/V2/pages/main-page/halloween-bats.svg)",
                backgroundPosition: "top 5% right 45%",
                backgroundSize: "250px",
              }}
            ></div>

            <div className="relative z-10 text-center md:text-left w-full md:max-w-sm mb-8 md:mb-0">
              <h1 className="text-4xl md:text-[40px] font-bold leading-tight text-text-black">
                Celebrate this Halloween
                <br />
                With Spooktacular Discounts!
              </h1>
              <Link
                href="https://www.squaresigns.com/category/halloween-signs/"
                className="mt-8 inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-md hover:bg-primary/90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative z-10">
              <Image
                src="https://cdn.squaresigns.com/images/sliders/halloween-products.jpg"
                alt="Halloween Products Showcase"
                width={400}
                height={400}
                className="object-contain"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/80 hover:bg-white rounded-md w-8 h-8 border-gray-300"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-white/80 hover:bg-white rounded-md w-8 h-8 border-gray-300"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <ProductCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
