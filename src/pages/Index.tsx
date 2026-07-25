import React from 'react';
import AuroraBackground from '../components/background/AuroraBackground';
import ScrollProgress from '../components/motion/ScrollProgress';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import LogoMarquee from '../components/LogoMarquee';
import Products from '../components/Products';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import HowItWorks from '../components/HowItWorks';
import StatsBand from '../components/StatsBand';
import SocialProof from '../components/SocialProof';
import Pricing from '../components/Pricing';
import RequestForDemo from '../components/RequestForDemo';
import Footer from '../components/Footer';
import { DemoPanelProvider } from '../components/demo/DemoPanelContext';
import DemoPanel from '../components/demo/DemoPanel';

const Index: React.FC = () => {
  return (
    <DemoPanelProvider>
      <div className="min-h-screen relative text-foreground">
        <AuroraBackground />
        <ScrollProgress />
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
            <LogoMarquee />
            <Products />
            <Features />
            <ProductShowcase />
            <HowItWorks />
            <StatsBand />
            <SocialProof />
            <Pricing />
            <RequestForDemo />
          </main>
          <Footer />
        </div>
        <DemoPanel />
      </div>
    </DemoPanelProvider>
  );
};

export default Index;
