"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const trendyProducts = [
  {
    title: "Notebook Printing",
    description: "Jot down notes in your brand new personalized notebooks!",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/notebook-printing-with-square-signs-1-16.jpg",
    href: "https://www.squaresigns.com/product/notebook-printing/",
  },
  {
    title: "Table Tents",
    description: "Make unique displays for your next special event.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/table-tent-printing-with-square-signs-1-17.jpg",
    href: "https://www.squaresigns.com/product/custom-table-tents/",
  },
  {
    title: "Bespoke Templates",
    description: "Explore designer-made templates to create your very own signs online.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/happy-halloween-templates-with-square-signs-18.jpg",
    href: "https://www.squaresigns.com/templates",
  },
  {
    title: "Pole Flags",
    description: "Custom flags to showcase your patriotism, event, or logo.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/pole-flag-printing-with-square-signs-1-19.jpg",
    href: "https://www.squaresigns.com/product/pole-flags/",
  },
  {
    title: "Custom Planners",
    description: "Plan and schedule your tasks efficiently with custom planners.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/planner-printing-with-square-signs-1-20.jpg",
    href: "https://www.squaresigns.com/product/custom-planners/",
  },
  {
    title: "Business Cards",
    description: "Print custom visit cards to expand your business connections.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/business-card-printing-with-square-signs-1-21.jpg",
    href: "https://www.squaresigns.com/category/business-cards/",
  },
  {
    title: "Brochure Printing",
    description: "Create custom flyers to better communicate with your clients.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/brochure-printing-with-square-signs-1-22.jpg",
    href: "https://www.squaresigns.com/product/brochure-printing/",
  },
];

export default function WhatsNewTrendy() {
  // Use a ref to keep a single plugin instance across renders
  const autoScroll = React.useRef(
    AutoScroll({
      speed: 1.2, // smooth continuous scroll
      startDelay: 0,
      stopOnMouseEnter: true, // pause on hover
      stopOnInteraction: false, // keep playing after pointer interactions
    })
  );

  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-foreground text-center mb-12 font-display">
          What’s New and Trendy
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoScroll.current]}
          className="w-full"
          onMouseEnter={() => autoScroll.current?.stop()}
          onMouseLeave={() => autoScroll.current?.play()}
        >
          <CarouselContent>
            {trendyProducts.map((product) => (
              <CarouselItem key={product.title} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-[20%]">
                <a href={product.href} title={product.title} className="block group h-full">
                  <div className="bg-card rounded-lg border border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <div className="relative w-full aspect-[295/200]">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold text-card-foreground text-base font-display">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
