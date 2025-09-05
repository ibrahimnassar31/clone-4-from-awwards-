import Image from 'next/image';
import React from 'react';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Design-tool-12.svg",
    title: "Free Design Tool",
    description: "Create custom graphics using our advanced design tool or by uploading your own images",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Click-13.svg",
    title: "Customizable Buying Options",
    description: "Fully customize your sign to your taste and requirements in just a few clicks.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Templates-14.svg",
    title: "2000+ Free Templates",
    description: "Get inspired by our thousands of free templates. Pick one and start customizing it right away!",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Size-15.svg",
    title: "Flexible Sizes",
    description: "Everything at Square Signs is customizable, including product sizes.",
  },
];

const GetStartedWithSquareSigns = () => {
  return (
    <section className="bg-gradient-to-b from-[#F0F5FA] to-white py-20 font-body">
      <div className="container">
        <div className="text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/logo_icon_medium-2.svg"
            alt="squaresigns logo"
            width={80}
            height={80}
            className="mx-auto mb-6"
          />
          <h2 className="font-display text-4xl font-semibold text-text-black mb-16">
            Get Started With <br /> SquareSigns
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={feature.icon}
                alt="icon"
                width={64}
                height={64}
                className="mb-5 h-16 w-auto"
              />
              <div className="px-2">
                <h3 className="font-display text-lg font-semibold text-text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-text-gray">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedWithSquareSigns;