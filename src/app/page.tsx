import PromotionalBanner from '@/components/sections/promotional-banner';
import NavigationHeader from '@/components/sections/navigation-header';
import HeroSection from '@/components/sections/hero-section';
import ProductCategories from '@/components/sections/product-categories';
import CompanyIntro from '@/components/sections/company-intro';
import WhatsNewTrendy from '@/components/sections/whats-new-trendy';
import TopCommercialSigns from '@/components/sections/top-commercial-signs';
import EventSignPrinting from '@/components/sections/event-sign-printing';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import ThreeStepProcess from '@/components/sections/three-step-process';
import TrustedByProfessionals from '@/components/sections/trusted-by-professionals';
import FeatureHighlights from '@/components/sections/feature-highlights';
import GetStartedWithSquareSigns from '@/components/sections/get-started-with-squaresigns';
import CompanyDescription from '@/components/sections/company-description';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromotionalBanner />
      <NavigationHeader />
      <HeroSection />
      <ProductCategories />
      <CompanyIntro />
      <WhatsNewTrendy />
      <TopCommercialSigns />
      <EventSignPrinting />
      <TestimonialsCarousel />
      <ThreeStepProcess />
      <TrustedByProfessionals />
      <FeatureHighlights />
      <GetStartedWithSquareSigns />
      <CompanyDescription />
      <Footer />
    </div>
  );
}