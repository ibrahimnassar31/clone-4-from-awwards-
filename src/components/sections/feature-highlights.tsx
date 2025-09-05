import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Feature = {
  title: string;
  description: (string | JSX.Element)[];
  imageSrc: string;
  imageAlt: string;
  button?: {
    text: string;
    href: string;
    color: string;
    hoverColor: string;
  };
};

const featureData: Feature[] = [
  {
    title: "Free Design Tool",
    description: [
      "Unleash your inner artist with our easy-to-use design tool featuring simple drag and drop elements for signs. Our powerful design platform features thousands of backgrounds, templates, icons, frames and fonts you can use to create your personalized signage design.",
      "Explore the advanced features of our design tool and make your sign online with just a few clicks!"
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/free-design-tool-from-sign-maker-online-35.jpg",
    imageAlt: "Free design tool from sign maker online",
    button: {
      text: "Design Now",
      href: "https://www.squaresigns.com/designer/",
      color: "bg-light-blue",
      hoverColor: "hover:bg-sky-500"
    }
  },
  {
    title: "90+ Types of Signs",
    description: [
      <React.Fragment key="desc1">When we say we offer every visual communication tool for branding and personal use, we mean it! Our platform features more than 90 signs you can edit to suit your needs. Select your medium and make <Link href="https://www.squaresigns.com/custom-signs/" className="font-bold text-primary-teal hover:underline">custom signs</Link> in minutes.</React.Fragment>,
      "There’s no better place to make a sign online with high-quality materials and stylish designs. Whether you’re a small business owner, professional event planner, someone shopping for home decorations or a friend looking for a birthday gift… we’ve got you covered!"
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/large-selection-of-sign-printing-types-36.jpg",
    imageAlt: "Large selection of sign printing types"
  },
  {
    title: "Corporate Offers",
    description: [
      "We provide professional support for signage design and printing for small businesses. Need to order signs to promote your company indoors and outdoors or present your brand at various trade shows and business fairs? We’re here for you.",
      "From simple banners to free standing pop up displays and poster prints, we have all the signs you need to get the word out about your business. Contact us to get a quote for corporate orders along with a free signage consultation from our experts!"
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/corporate-offers-for-sign-printing-37.jpg",
    imageAlt: "Corporate offers for sign printing",
    button: {
      text: "Get a Quote",
      href: "https://www.squaresigns.com/quote/",
      color: "bg-primary-teal",
      hoverColor: "hover:bg-teal-600"
    }
  },
  {
    title: "2000+ Templates",
    description: [
      <React.Fragment key="desc1"><em>Get inspired to bring your</em> best ideas to life! Here you can find thematic <Link href="https://www.squaresigns.com/templates/" className="font-bold text-primary-teal hover:underline">sign templates</Link> created for any occasion you can imagine.</React.Fragment>,
      "Select your favorite templates from various categories, head over to our design tool and restyle the signs until they suit your taste. Find your inner sign creator online and enjoy editing logos, colors, backgrounds, icons and texts on any of our designer-mader templates – for free!"
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/signage-templates-from-square-signs-online-38.jpg",
    imageAlt: "Signage templates from Square Signs"
  },
  {
    title: "Customer Service",
    description: [
      <React.Fragment key="desc1">As a customer-centric company, we provide top-of-the-line services by working closely with our clients. Specialists at Square Signs will guide you so you can design your own sign. Get creative with our intuitive <Link href="https://www.squaresigns.com/designer/" className="font-bold text-primary-teal hover:underline">sign design tool</Link> along with thousands of original templates you can restyle as you wish.</React.Fragment>,
      "Make a sign on our website with a professional customer care team."
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/Customer-service-to-make-a-sign-online-39.jpg",
    imageAlt: "Customer service to make a sign online",
    button: {
      text: "Contact Us",
      href: "https://www.squaresigns.com/contact-us/",
      color: "bg-primary-teal",
      hoverColor: "hover:bg-teal-600"
    }
  },
  {
    title: "Customizable Sizes",
    description: [
      "Forget the standard sizes offered on other platforms. At Square Signs, we’re not limiting you to fixed products. We let you modify the size of almost every medium we have available.",
      "Order printing in any size you can imagine. Simply fill in your desired dimensions on our homepage calculator or design tool and get your signs printed in the exact size you need."
    ],
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/images/customizable-sizes-for-sign-printing-online-40.jpg",
    imageAlt: "Customizable sizes for sign printing online"
  }
];

const FeatureHighlights = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="space-y-20 md:space-y-28">
          {featureData.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-12 lg:gap-24`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    width={558}
                    height={372}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-display text-4xl font-semibold text-text-black mb-6">
                    {feature.title}
                  </h3>
                  <div className="space-y-4 text-text-gray font-body text-base">
                    {feature.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {feature.button && (
                    <div className="mt-8">
                      <Link
                        href={feature.button.href}
                        className={`inline-block px-8 py-3 rounded-md text-base font-medium text-primary-foreground transition-colors duration-300 ${feature.button.color} ${feature.button.hoverColor}`}
                      >
                        {feature.button.text}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;