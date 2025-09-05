"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "It's really a great quality product and…",
    description: "It's really a great quality product and I would use them again",
    author: "Dustin Vanlandingham",
    date: "31 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b393c84d174cd836743338",
  },
  {
    title: "Great people to work with",
    description: "Great people to work with. They go out of their way to make sure you get the best results.",
    author: "Dennis Register",
    date: "31 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b38b6275e87fd29019bd2a",
  },
  {
    title: "Signs were produced in a timely manner…",
    description: "Signs were produced in a timely manner and look great! Pick up was a breeze.",
    author: "Azusa Total Dental Care",
    date: "30 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b34c465722fd3762a66a65",
  },
  {
    title: "So pleased with our acrylic prints!",
    description: "So pleased with our order. The photo prints on acrylic turned out absolutely beautiful for our office. The metal hardware on each corner are museum quality and easy to install. We will be ordering more in the future and I have recommended to colleagues and friends. \n\nWonderful customer service as well from beginning to end!",
    author: "Jill K",
    date: "30 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b2dcce779cc6dbf785c998",
  },
  {
    title: "Phenomenal job well done. Square signs is an exceptional company.",
    description: "My artwork I sent in, did not have the clarity was a bit blur, James R. Volunteer gracefully had it corrected by his design team, I am so grateful for his professionalism and courteous conversation. You have earned my future business. Thank you Be blessed.",
    author: "David M",
    date: "30 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b26b6dacb4dc5940cc92f3",
  },
  {
    title: "Was ready way sooner than expected…",
    description: "Was ready way sooner than expected date. Came out amazing. We needed this rushed and it was ready 3 days ahead of when we were told it would be ready. Thank you so so so much!",
    author: "wendiana de los angeles",
    date: "30 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b258416aacd7f488707cc0",
  },
  {
    title: "INCREDIBLE DECALS AND LETTERING",
    description: "My Experience with Square Signs was at Points Challenging due to making sure everything was just right, but it's important you take the time to clarify just what you want and how you need it and things work out great almost always in most cases in life. With Square Signs we had our challenges but the end product was fantastic and looks incredible on the Project I was working on called, THE BALTIMORE RAVENS VAN 2025. It is a work of art and SQUARE SIGNS was the icing on the cake of course when it comes to the finished project. So ladies and gentlemen let me share with you THE BALTIMORE RAVENS VAN with SQUARE SIGNS Lettering and Decals! - SHAD",
    author: "Shad Strother",
    date: "29 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b1b4cd472874447ed1c736",
  },
  {
    title: "The Custom sizing made the rear decal…",
    description: "The Custom sizing made the rear decal on my company vehicle fit perfectly! I like how easy it was to upload my business logo and size it the way I needed. From order to drop off it was flawless.",
    author: "Blake Renskers",
    date: "29 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b0f072441fd09401629ddd",
  },
  {
    title: "Very professional and an overall great…",
    description: "Very professional and an overall great company they were fast to respond and handled my order with care. It was well package and got delivered quickly. Great quality as well can’t wait to see the finished product in its new place",
    author: "Cameron Murray",
    date: "29 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68b0efa3573d26e2f87e6dc5",
  },
  {
    title: "The sign looks very professional and…",
    description: "The sign looks very professional and sturdy. It was packaged incredibly well to avoiddamage. I'm very happy with the purchase.",
    author: "Bill S",
    date: "28 Aug 2025",
    url: "https://www.trustpilot.com/reviews/68afa91503d4fb3f895ab6ce",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="bg-light-gray py-20">
      <div className="container">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  <a
                    href={testimonial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center max-w-[792px]"
                  >
                    <Quote
                      className="mx-auto mb-6 text-primary-teal fill-primary-teal"
                      size={38}
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                    <h3 className="font-display text-[24px] font-medium text-text-black mb-2 leading-[1.2]">
                      {testimonial.title}
                    </h3>
                    <p className="font-body text-[18px] text-text-black mb-6 leading-[1.5] whitespace-pre-wrap">
                      {testimonial.description}
                    </p>
                    <p className="font-body text-[16px] text-text-gray leading-[1.5]">
                      –{testimonial.author}, {testimonial.date}
                    </p>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#E5E7EB] hover:bg-gray-300 transition-colors duration-200 rounded-full border-none text-black disabled:opacity-50" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#E5E7EB] hover:bg-gray-300 transition-colors duration-200 rounded-full border-none text-black disabled:opacity-50" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;