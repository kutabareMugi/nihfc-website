import { motion } from "framer-motion";
import { Download, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedMesh } from "./AnimatedMesh";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-20 pb-32 lg:pt-24">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-60">
        <AnimatedMesh />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium tracking-luxury uppercase text-foreground/80">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            15+ Years of Excellence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
        >
          Securing Tomorrow,{" "}
          <span className="font-serif italic text-gradient">Strategically.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 text-balance"
        >
          Join an elite circle of investors building wealth through Logistics, 
          Commodities, and Equity. Data-backed decisions. Blue-chip assets.
        </motion.p>

        {/* CTA Buttons - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex items-center justify-center gap-4"
        >
          <Button variant="hero" size="xl" className="gap-3">
            <Download className="w-5 h-5" />
            Download App
          </Button>
          <Button variant="glass" size="lg" className="gap-2">
            <Calendar className="w-4 h-4" />
            Book Consultation
          </Button>
        </motion.div>
      </div>

      {/* Social Proof Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-32 md:bottom-24 left-0 right-0 overflow-hidden"
      >
        <div className="flex items-center animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-sm text-foreground/50 tracking-wide">₹5Cr+ AUM</span>
              <span className="text-champagne/50">◆</span>
              <span className="text-sm text-foreground/50 tracking-wide">10k+ Investors</span>
              <span className="text-champagne/50">◆</span>
              <span className="text-sm text-foreground/50 tracking-wide">15+ Years</span>
              <span className="text-champagne/50">◆</span>
              <span className="text-sm text-foreground/50 tracking-wide">Diversified Portfolio</span>
              <span className="text-champagne/50">◆</span>
              <span className="text-sm text-foreground/50 tracking-wide">Tax Efficient</span>
              <span className="text-champagne/50">◆</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/40 tracking-luxury uppercase">Explore</span>
          <ChevronDown className="w-5 h-5 text-foreground/40 animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};
