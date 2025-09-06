"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

type Product = {
  name: string;
  image: string;
  badge?: 'Best Seller' | '10% OFF';
  href: string;
};

const products: Product[] = [
  {
    name: "Acrylic Photo Prints",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/acrylic-photo-print-main-4.jpg",
    badge: "Best Seller",
    href: "#",
  },
  {
    name: "Acrylic Signs",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/clear-dental-clinic-acrylic-sign-5.jpg",
    href: "#",
  },
  {
    name: "Aluminum Signs",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/wall-mounted-business-aluminum-sign-6.jpg",
    badge: "Best Seller",
    href: "#",
  },
  {
    name: "Auto Detailing Business Cards",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/auto-detailing-business-cards-7.jpg",
    href: "#",
  },
  {
    name: "Backlit Decals",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/backlit-decals-8.jpg",
    href: "#",
  },
  {
    name: "Bakery Business Cards",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/bakery-business-cards-9.jpg",
    href: "#",
  },
  {
    name: "Birthday Backdrops",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/birthday-backdrops-10.jpg",
    badge: "10% OFF",
    href: "#",
  },
  {
    name: "Birthday Banners",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/birthday-banners-11.jpg",
    href: "#",
  },
  {
    name: "Black Acrylic Signs",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/black-acrylic-signs-12.jpg",
    href: "#",
  },
  {
    name: "Black Transparent Acrylic Signs",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/black-transparent-acrylic-signs-13.jpg",
    href: "#",
  },
  {
    name: "Bookmark Printing",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/bookmark-printing-14.jpg",
    href: "#",
  },
  {
    name: "Brochure Printing",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/brochure-printing-15.jpg",
    href: "#",
  },
];

interface ProductCardProps {
  product: Product;
  nodeRef?: (el: HTMLDivElement | null) => void;
}

const ProductCard = ({ product, nodeRef }: ProductCardProps) => {
  return (
    <a href={product.href} className="block group text-decoration-none">
      <div
        ref={nodeRef}
        className="pc-card relative flex flex-col h-full rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white text-center transition-all duration-300 group-hover:-translate-y-[5px] group-hover:translate-x-[10px] group-hover:scale-[1.10] group-hover:shadow-[0_4px_20px_rgba(35,34,50,0.08)]"
        style={{ willChange: 'transform, opacity', transformStyle: 'preserve-3d' as any, backfaceVisibility: 'hidden' as any }}
      >
        {product.badge && (
          <div className={cn(
            "absolute -top-px right-2.5 z-10 text-white text-xs font-semibold py-1 px-2.5 rounded-b-md",
            product.badge === 'Best Seller' ? 'bg-best-seller-orange' : 'bg-primary-purple'
          )}>
            <p className="m-0 text-white text-badge">{product.badge}</p>
          </div>
        )}
        <div className="flex-grow flex items-center justify-center p-2.5 aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            width={180}
            height={180}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="px-2.5 pb-2.5">
          <h6 className="font-display text-sm font-medium leading-5 text-[#495057] line-clamp-2 h-[40px] flex items-center justify-center m-0">
            {product.name}
          </h6>
        </div>
      </div>
    </a>
  );
};


const ProductCategories = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -10% 0px' });

  const setContainerRefs = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
    inViewRef(node);
  }, [inViewRef]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  }, []);

  useEffect(() => {
    if (!inView) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      gsap.set(cards, {
        transformPerspective: 1000,
        transformOrigin: '50% 50%',
        rotationY: -360,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        x: (i: number) => gsap.utils.random(-60, 60, 1),
        y: (i: number) => gsap.utils.random(50, 120, 1),
        scale: 0.96,
        opacity: 0,
      });

      // Smooth, powerful 360° flip-in and settle
      gsap.to(cards, {
        keyframes: [
          { rotationY: '+=360', x: 0, y: 0, opacity: 1, scale: 1, duration: 1.1, ease: 'power3.out' },
          { y: -6, duration: 0.22, ease: 'power2.out' },
          { y: 0, duration: 0.5, ease: 'elastic.out(1, 0.6)' },
        ],
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [inView]);

  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={setContainerRefs}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          style={{ perspective: 1000 }}
        >
          {products.map((product, idx) => (
            <ProductCard key={product.name} product={product} nodeRef={(el) => setCardRef(el, idx)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
