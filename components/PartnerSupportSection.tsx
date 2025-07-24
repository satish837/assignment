'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Card Props
type CardProps = {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  buttonLabel?: string;
  imagePosition?: 'top' | 'bottom';
};

// Reusable Card
const Card = ({
  title,
  subtitle,
  description,
  image,
  buttonLabel = 'Learn more',
  imagePosition = 'bottom',
}: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 w-full h-full flex flex-col justify-between"
  >
    {/* Image at top (if applicable) */}
    {image && imagePosition === 'top' && (
      <div className="mb-4 self-start w-full">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          quality={100}
          className="object-contain w-full h-auto"
        />
      </div>
    )}

    {/* Text Content */}
    <div className="space-y-4 flex-1">
      <h3 className="text-lg font-semibold text-white">
        {title}
        {subtitle && <span className="text-sm font-normal text-gray-400"> {subtitle}</span>}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
      <motion.button
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.98 }}
  className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg  border border-white/10 backdrop-blur-md shadow-md hover:shadow-blue-500/30 transition-all duration-300"
>
  {buttonLabel}
  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
</motion.button>

    </div>

    {/* Image at bottom (if applicable) */}
    {image && imagePosition === 'bottom' && (
      <div className="mt-4 self-end w-full">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          quality={100}
          className="object-contain w-full h-auto"
        />
      </div>
    )}
  </motion.div>
);

// Main Section
const PartnerSupportSection = () => {
  return (
    <section className="relative py-24 my-8">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] pointer-none z-[-1]">
        <Image
            src="/customer-support-bg.png"
            alt="Customer support background"
            quality={100}
            width={1127}
            height={649}
            className="w-full h-auto"
        />
        </div>
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <p className="text-sm text-gray-400 uppercase tracking-widest">Reasons to Partner</p>
    <span className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
  </div>

  <h2 className="text-4xl font-medium bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text lg:text-5xl lg:max-w-3xl mx-auto">
    <span className="block mb-4">Exceptional Support for Your</span> <span className="block">Success</span>
  </h2>
</div>

      {/* Grid Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-12 grid-rows-4 gap-6">
        {/* Top Left Card */}
        <div className="col-span-4 row-span-2">
          <Card
            title="Optimize"
            subtitle="customer journeys"
            description="Streamlined transactions enhancing efficiency and customer satisfaction."
            buttonLabel="Explore"
            image="/customer-support-icon-1.png"
            imagePosition="top"
          />
        </div>

        {/* Top Right Card */}
        <div className="col-span-8 row-span-2">
          <Card
            title="Faster Processing Time"
            description="Quick and efficient payment processing for a seamless user experience."
            image="/customer-support-icon-2.png"
            imagePosition="bottom"
          />
        </div>

        {/* Bottom Left Card */}
        <div className="col-span-8 row-span-2">
          <Card
            title="Flexible Solutions"
            description="Customizable options to meet the unique needs of your business."
            image="/customer-support-icon-3.png"
            buttonLabel="Explore more"
            imagePosition="top"
          />
        </div>

        {/* Bottom Right Card */}
        <div className="col-span-4 row-span-2">
          <Card
            title="Effortless Integration"
            description="Simple API integration with your existing systems and platforms."
            image="/customer-support-icon-4.png"
            imagePosition="bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportSection;
