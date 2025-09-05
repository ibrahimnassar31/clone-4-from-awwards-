import React from 'react';
import Image from 'next/image';

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/facebook-6.svg",
    alt: "facebook",
    width: 121,
    height: 25,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/pepsi-7.svg",
    alt: "pepsi",
    width: 121,
    height: 31,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/amazon-8.svg",
    alt: "amazon",
    width: 121,
    height: 36,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/google-9.svg",
    alt: "google",
    width: 121,
    height: 39,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/pixar-10.svg",
    alt: "pixar",
    width: 121,
    height: 21,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/adobe-11.svg",
    alt: "adobe",
    width: 121,
    height: 29,
  },
];

const TrustedByProfessionals = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-6">
        <h3 className="text-center font-display text-2xl font-semibold text-text-black mb-[55px]">
          Trusted by Professionals
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByProfessionals;