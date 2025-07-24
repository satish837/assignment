'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

import CtaSection from '../components/CtaSection';
import ExpertiseSlider from '../components/ExpertiseSlider';
import FeatureScroll from '../components/FeatureScroll';
import Header from '../components/Header';
import HeadPattern from '../components/HeadPattern';
import Hero from '../components/Hero';
import HeroVideoText from '../components/HeroVideoText';
import PartnerSupportSection from '../components/PartnerSupportSection';
import PaymentsFeature from '../components/PaymentsFeature';
import ScrollPinText from '../components/ScrollPinText';
import TabbedSection from '../components/TabbedSection';
import Footer from '../components/Footer';
import PageLoader from '../components/Loader';

const TestimonialCarousel = dynamic(() => import('../components/TestimonialCarousel'), {
  ssr: false,
});

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <PageLoader onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <HeadPattern />
          <Header />
          <main className="text-black">
            <Hero />
            <PaymentsFeature />
            <ScrollPinText />
            <FeatureScroll />
            <HeroVideoText />
            <CtaSection />
            <PartnerSupportSection />
            <ExpertiseSlider />
            <TabbedSection />
            <TestimonialCarousel />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
