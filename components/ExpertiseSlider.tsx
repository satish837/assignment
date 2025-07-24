'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import Flickity (client-side only)
const Flickity = dynamic(() => import('flickity'), {
  ssr: false,
});

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
  const [flkty, setFlkty] = useState<any>(null);

  useEffect(() => {
    let instance: any;
    if (carouselRef.current && typeof window !== 'undefined') {
      // Import Flickity only in the browser
      import('flickity').then((FlickityModule) => {
        instance = new FlickityModule.default(carouselRef.current!, {
          contain: true,
          cellAlign: 'left',
          wrapAround: true,
          pageDots: true,
        });
        setFlkty(instance);
      });
    }
    return () => instance?.destroy();
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400">Our Expertise</p>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          <span className="text-white">Redefining Payment</span><br />
          <span className="text-gray-400">Processing for You</span>
        </h2>
      </div>
  
      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div className="carousel" ref={carouselRef}>
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="carousel-cell relative w-full lg:w-[22%] flex-shrink-0 mr-6"
            >
              {/* Background */}
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
  
              {/* Overlay Content */}
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
                  <span className="text-violet-500 hover:underline text-xl">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={() => flkty?.previous()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300"
        >
          &larr;
        </button>
        <button
          onClick={() => flkty?.next()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
  
};

export default ExpertiseSlider;
