import CtaSection from '../components/CtaSection';
import ExpertiseSlider from '../components/ExpertiseSlider';
import FeatureScroll from '../components/FeatureScroll';
import Header from '../components/Header';
import HeadPattern from '../components/HeadPattern';
import Hero from '../components/Hero';
import HeroVideoText from '../components/HeroVideoText';
import PartnerSupportSection from '../components/PartnerSupportSection';
import PaymentsFeature from '../components/PaymentsFeature';
import PaymentsTabs from '../components/TabbedSection';
import ScrollPinText from '../components/ScrollPinText';
import TabbedSection from '../components/TabbedSection';
import Footer from '../components/ Footer';
import dynamic from 'next/dynamic';

const TestimonialCarousel = dynamic(() => import('../components/TestimonialCarousel'), {
  ssr: false,
});



export default function HomePage() {
  return (
    <>
    <HeadPattern/>
      <Header />
      <main className="text-black">
      <Hero />
      <PaymentsFeature/>
      <ScrollPinText />
      <FeatureScroll />
      <HeroVideoText />
      <CtaSection />
      <PartnerSupportSection />
      <ExpertiseSlider />
      <TabbedSection />
      <TestimonialCarousel />

      </main>
      <Footer />
    </>
  );
}
