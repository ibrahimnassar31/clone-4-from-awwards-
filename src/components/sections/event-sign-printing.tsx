import React from 'react';
import Image from 'next/image';

type Product = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  isBestSeller: boolean;
};

const eventSignProducts: Product[] = [
  {
    title: "Tabletop Retractable Banners",
    description: "Effective sign printing on portable and easy-to-assemble displays. Great for showcasing information with these custom signs.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/tabletop-retractable-banners-main-27.jpg",
    imageAlt: "Tabletop Retractable Banners for events",
    href: "https://www.squaresigns.com/product/tabletop-retractable-banners/",
    isBestSeller: true,
  },
  {
    title: "Acrylic Signs",
    description: "Create a custom sign on state-of-the-art acrylic materials perfect for branding or personal use in indoor and outdoor settings.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/clear-dental-clinic-acrylic-sign-28.jpg",
    imageAlt: "A clear acrylic sign for a dental clinic with a logo and text",
    href: "https://www.squaresigns.com/product/acrylic-signs/",
    isBestSeller: false,
  },
  {
    title: "Vinyl Banners",
    description: "Capture attention with bold graphics. Design and order custom products in various dimensions. Ensure impeccable quality and striking appeal.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/vinyl-banner-29.jpg",
    imageAlt: "A custom vinyl banner for a spa",
    href: "https://www.squaresigns.com/product/vinyl-banners/",
    isBestSeller: false,
  },
  {
    title: "Retractable Banners",
    description: "Design custom signs online for promotions by modifying our thematic templates and get people excited about any special occasion.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/retractable-banners-30.jpg",
    imageAlt: "Two tall retractable banners for promotional display",
    href: "https://www.squaresigns.com/product/retractable-banners/",
    isBestSeller: true,
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <a href={product.href} className="block group h-full relative">
    {/* Card container with hover layers */}
    <div className="relative bg-white border border-border rounded-lg shadow-sm h-full flex flex-col transition-shadow duration-300 overflow-hidden group-hover:shadow-xl">
      {/* Hover effect layers */}
      <span className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary transform transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-primary/0 z-0"></span>
      <span className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary transform transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-primary/0 z-0"></span>
      <span className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"></span>

      {/* Content */}
      <div className="relative z-10 bg-light-gray p-6 flex items-center justify-center h-[234px] rounded-t-lg">
        <Image
          src={product.imageUrl}
          alt={product.imageAlt}
          width={270}
          height={180}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="relative z-10 p-6 pt-10 flex-grow flex flex-col">
        {product.isBestSeller && (
          <span className="absolute -top-[14px] right-4 bg-best-seller-orange text-white text-xs font-bold px-4 py-2 rounded">
            Best Seller
          </span>
        )}
        <h4 className="font-display text-lg font-semibold text-text-black mb-2">
          {product.title}
        </h4>
        <p className="text-small flex-grow">
          {product.description}
        </p>
      </div>
    </div>
  </a>
);

export default function EventSignPrinting() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h3 className="mb-10 font-display text-2xl font-bold">
          Event Sign Printing
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventSignProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
