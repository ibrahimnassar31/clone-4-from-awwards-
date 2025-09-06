'use client'
import Image from "next/image";

const products = [
  {
    title: "Aluminum Signs",
    description: "Enhance your space with versatile, non-rusting aluminum products. They are available with single and double-sided printing options.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/wall-mounted-business-aluminum-sign-23.jpg",
    imageAlt: "Wall Mounted Business Aluminum Sign",
    href: "https://www.squaresigns.com/product/aluminum-signs/",
    isBestSeller: true,
  },
  {
    title: "Yard Signs",
    description: "Display any message in your yard with light and portable personalized signs available in any shape and style you can imagine.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/house-for-sale-yard-sign-in-blue-and-orange-24.jpg",
    imageAlt: "House for Sale Yard Sign in Blue and Orange",
    href: "https://www.squaresigns.com/product/yard-signs/",
    isBestSeller: false,
  },
  {
    title: "Foam Board Signs",
    description: "Make your own custom sign for events or presentations with lightweight and budget-friendly printing perfect for temporary use.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/red-and-white-foam-board-sign-25.jpg",
    imageAlt: "Red and White Foam Board Sign",
    href: "https://www.squaresigns.com/product/foamboard-signs/",
    isBestSeller: false,
  },
  {
    title: "Truck Decals",
    description: "This product is great for truck branding, promotions and decoration. It’s available in three finishes suitable for personal and business use.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/cleaning-service-truck-door-decal-26.jpg",
    imageAlt: "Cleaning Service Truck Door Decal",
    href: "https://www.squaresigns.com/product/truck-decals/",
    isBestSeller: false,
  },
];

const TopCommercialSigns = () => {
  return (
    <section className="bg-background py-10 md:py-20">
      <div className="container mx-auto px-6">
        <h3 className="mb-6 font-display text-2xl font-semibold text-text-black">
          Top Commercial Signs
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <a
              key={product.title}
              href={product.href}
              className="flash-card group relative block overflow-hidden rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg transform-gpu will-change-transform transition-transform ease-out hover:translate-x-[5px] hover:scale-[1.1]"
            >
              <div className="relative mb-6">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-light-gray">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={270}
                    height={270}
                    className="h-full w-full object-contain"
                  />
                </div>
                {product.isBestSeller && (
                  <span className="absolute bottom-4 left-4 rounded-sm bg-best-seller-orange px-3 py-1 font-sans text-xs font-bold leading-none text-white">
                    Best Seller
                  </span>
                )}
              </div>
              <h4 className="mb-2 block font-display text-lg font-semibold text-text-black">
                {product.title}
              </h4>
              <p className="font-body text-sm text-text-gray">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Camera flash effect on hover */}
      <style jsx>{`
        .flash-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.55) 30%,
            rgba(255, 255, 255, 0.0) 60%
          );
          opacity: 0;
          pointer-events: none;
        }

        .flash-card:hover::before {
          animation: camera-flash 420ms ease-out;
        }

        @keyframes camera-flash {
          0% { opacity: 0; }
          18% { opacity: 1; }
          45% { opacity: 0.45; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default TopCommercialSigns;
