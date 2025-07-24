'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type FlickityType from 'flickity';
import 'flickity/css/flickity.css';

const expertiseData = [
  {
    title: 'UPI Autopay',
    desc: 'Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.',
    img: '/upi-autopay.png',
  },
  {
    title: 'API Banking',
    desc: 'Integrate financial services seamlessly into your applications with our robust API banking solutions.',
    img: '/api-banking.png',
  },
  {
    title: 'Payouts',
    desc: 'Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.',
    img: '/payouts.png',
  },
  {
    title: 'Bulk Payments',
    desc: 'Process multiple payments at once, saving time and reducing errors with bulk payment options.',
    img: '/bulk-payments.png',
  },
  {
    title: 'UPI Autopay',
    desc: 'Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.',
    img: '/upi-autopay.png',
  },
  {
    title: 'API Banking',
    desc: 'Integrate financial services seamlessly into your applications with our robust API banking solutions.',
    img: '/api-banking.png',
  },
  {
    title: 'Payouts',
    desc: 'Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.',
    img: '/payouts.png',
  },
  {
    title: 'Bulk Payments',
    desc: 'Process multiple payments at once, saving time and reducing errors with bulk payment options.',
    img: '/bulk-payments.png',
  },
];

const ExpertiseSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [flkty, setFlkty] = useState<FlickityType | null>(null);

  useEffect(() => {
    let instance: FlickityType | null = null;

    if (carouselRef.current && typeof window !== 'undefined') {
      import('flickity').then((FlickityModule) => {
        const Flickity = FlickityModule.default;
        instance = new Flickity(carouselRef.current!, {
          contain: true,
          cellAlign: 'left',
          wrapAround: true,
          pageDots: true,
          prevNextButtons: false,
        });
        setFlkty(instance);
      });
    }

    return () => {
      instance?.destroy();
    };
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="text-center mb-16 space-y-4">
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <p className="text-sm text-gray-400 uppercase tracking-widest">Our Expertise</p>
    <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
  </div>

  <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text lg:text-5xl lg:max-w-3xl mx-auto">
    <span className="block md:mb-4">Redefining Payment</span> <span className="block pb-2">Processing for You</span>
  </h2>
</div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div className="carousel" ref={carouselRef}>
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="carousel-cell relative w-full lg:w-[22%] flex-shrink-0 mr-6"
            >
              <div className="w-full h-auto">
                <Image
                  src="/carousel-bg.png"
                  alt="carousel bg"
                  width={300}
                  height={360}
                  quality={100}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={208}
                    height={150}
                    className="mx-auto w-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-left">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-4 text-left">{item.desc}</p>
                <div className="mt-auto flex justify-end">
                  <span className="text-violet-500 mr-6 text-xl">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={() => flkty?.previous()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300 flex items-center justify-center"
        >
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36693 1.21875C7.36693 1.21875 1.86476 5.27102 1.86475 6.72094C1.86474 8.17095 7.36693 12.2231 7.36693 12.2231" stroke="#BDA0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
        <button
          onClick={() => flkty?.next()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300 flex items-center justify-center"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.35474 1.77734C1.35474 1.77734 6.85692 5.82961 6.85693 7.27953C6.85694 8.72954 1.35474 12.7817 1.35474 12.7817" stroke="#BDA0FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>
    </section>
  );
};

export default ExpertiseSlider;
