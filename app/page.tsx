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

      </main>
    </>
  );
}
