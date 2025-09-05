import Image from 'next/image';
import { cn } from "@/lib/utils";

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
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <a href={product.href} className="block group text-decoration-none">
      <div className="relative flex flex-col h-full rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white text-center transition-all duration-300 group-hover:-translate-y-[5px] group-hover:shadow-[0_4px_20px_rgba(35,34,50,0.08)]">
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
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;