import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhySection from "@/components/landing/WhySection";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import CTASection from "@/components/landing/CTASection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import leMatchLogo from "@/assets/lematch-logo.png";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background"
          >
            <motion.img
              src={leMatchLogo}
              alt="Logo Le Match"
              className="h-20 w-20 object-contain"
              initial={{ opacity: 0, y: 10, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45 }}
            />
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
            <p className="font-body text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Chargement
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <div id="why"><WhySection /></div>
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <CTASection />
        <div id="faq"><FAQ /></div>
        <Footer />
      </div>
    </>
  );
};

export default Index;

