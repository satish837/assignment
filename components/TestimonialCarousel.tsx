"use client";

import { useEffect, useRef, useState } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from 'next/image';


const testimonials = [
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 4,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 3,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 5,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 4,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael Grants",
    title: "CEO",
    image: "/review-icon.png",
    rating: 3,
    text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
];

export default function TestimonialCarousel() {
  const flickityRef = useRef<HTMLDivElement>(null);
  const [flkty, setFlkty] = useState<Flickity | null>(null);

  useEffect(() => {
    if (flickityRef.current && !flkty) {
      const flickityInstance = new Flickity(flickityRef.current, {
        cellAlign: "center",
        contain: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        groupCells: 1,
        autoPlay: 5000,
      });

      setFlkty(flickityInstance);
    }
  }, [flkty]);

  return (
    <section className="relative w-full text-white overflow-hidden my-20 md:my-0">
      
      <div className="w-full relative">
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
        <Image
                      src="/testimonial-section-bg.png"
                      alt="testimonial background"
                      quality={100}
                      width={1127}
                      height={649}
                      className="w-full h-auto"
                    />
      </div>

      <div className="w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
      <div className="text-center mb-12">
        
        <div className="inline-block animate-borderGlow rounded-full p-[2px] bg-[length:200%_200%] bg-gradient-to-r from-[#234151] via-[#1a2a33] to-[#121516] mb-4">
  <div className="rounded-full bg-[#050b14] px-4 py-2 text-[#B5B0B7] text-base lg:text-[1rem] font-sans">
  Client Feedbacks
  </div>
</div>
       
        {/* Title */}
        <div className="text-center mb-16 space-y-4">

  <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text lg:text-5xl lg:max-w-3xl mx-auto">
    <span className="block md:mb-4">Trusted by  </span> <span className="block">Businesses Like Yours</span>
  </h2>
</div>
      </div>
       <div ref={flickityRef} className="carousel w-[85%] mx-auto testimonial-carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="carousel-cell w-full md:w-[70%] lg:w-[33%] px-4 my-2"
          >
            <div className="bg-[#161621] backdrop-blur-sm bg-opacity-60 rounded-2xl p-6 h-full flex flex-col justify-between border border-gray-700">
              <p className="text-gray-300 text-lg mb-6">{testimonial.text}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 text-purple-500 bg-black p-3 rounded-full bg-opacity-20">
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.rating ? (
                      <FaStar key={i} className="text-sm" />
                    ) : (
                      <FaRegStar key={i} className="text-sm text-gray-600" />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-center gap-6">
        <button
          onClick={() => flkty?.previous()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300 flex items-center justify-center"
        >
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.36693 1.21875C7.36693 1.21875 1.86476 5.27102 1.86475 6.72094C1.86474 8.17095 7.36693 12.2231 7.36693 12.2231"
              stroke="#BDA0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => flkty?.next()}
          className="w-10 h-10 rounded-full border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-black transition duration-300 flex items-center justify-center"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.35474 1.77734C1.35474 1.77734 6.85692 5.82961 6.85693 7.27953C6.85694 8.72954 1.35474 12.7817 1.35474 12.7817"
              stroke="#BDA0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      </div>

     
      </div>
      
    </section>
  );
}
