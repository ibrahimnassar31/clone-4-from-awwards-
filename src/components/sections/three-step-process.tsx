import React from 'react';
import Image from 'next/image';

const stepsData = [
  {
    step: 1,
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-3.svg",
    title: "Pick Templates or Upload Designs",
    description: "Head over to our templates to select a theme that matches your vision. Modify it or upload an image to make your own sign online. You can also explore templates directly from our design tool."
  },
  {
    step: 2,
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-(1)-4.svg",
    title: "Fully Customize Your Signs",
    description: "Our online design tool comes with original templates to create a unique design for your signs. Select a print medium, size, style, texts, icons, accessories as well as sign printing and cutting options."
  },
  {
    step: 3,
    iconUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fb32a72-848a-49b7-93f9-cc750692c804-squaresigns-com/assets/svgs/Vector-(2)-5.svg",
    title: "Click to Order Your Product",
    description: "Place your order once done with the design. Click “add to cart” for ordering then provide shipping info and any notes regarding the order. Proceed to checkout and we’ll get your signs printed right away."
  }
];

const ThreeStepProcess = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="font-display text-3xl font-semibold text-text-black mb-6">3-Step Design &amp; Order Process</h3>
          <p className="font-body text-base text-text-gray max-w-3xl mx-auto">
            We’ve made the sign design and ordering process as easy as possible. Follow these simple steps to design your very own sign.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-24">
          {stepsData.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="relative h-[60px] w-full max-w-[60px]">
                <span className="absolute -top-11 left-1/2 -translate-x-1/2 text-[160px] font-bold text-gray-100 select-none z-0">
                  {step.step}
                </span>
                <div className="relative z-10 flex h-full justify-center">
                  <Image src={step.iconUrl} alt={`Step ${step.step} icon`} width={60} height={60} />
                </div>
              </div>
              <h4 className="font-display text-lg font-bold text-text-black mt-8 mb-4">{step.title}</h4>
              <p className="font-body text-base text-text-gray px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;