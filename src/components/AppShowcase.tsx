import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Shield, TrendingUp, Smartphone, Zap, Lock } from "lucide-react";

const features = [
  { icon: TrendingUp, label: "Real-time Tracking" },
  { icon: Zap, label: "One-Tap SIP" },
  { icon: Lock, label: "256-bit Encryption" },
  { icon: Shield, label: "Bank-grade Security" },
];

export const AppShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [portfolioValue, setPortfolioValue] = useState(2547890);

  // Animate portfolio value ticking up
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setPortfolioValue((prev) => prev + Math.floor(Math.random() * 100) + 50);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-champagne/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-luxury uppercase text-secondary mb-4 block">
            The Alpha
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your Wealth, <span className="font-serif italic text-gradient">In Your Pocket</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Manage your entire portfolio with our secure, intuitive mobile application.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Floating features */}
            <div className="absolute inset-0 flex items-center justify-center">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const angle = (index * 90 + 45) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="absolute glass-card px-3 py-2 flex items-center gap-2"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <Icon className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium whitespace-nowrap">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Phone frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Phone outer frame */}
              <div className="relative w-[280px] h-[580px] bg-gradient-to-b from-charcoal to-onyx rounded-[3rem] p-2 shadow-2xl border border-white/10">
                {/* Phone inner screen */}
                <div className="w-full h-full bg-onyx rounded-[2.5rem] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-background rounded-full" />
                  
                  {/* App UI */}
                  <div className="p-6 pt-16">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm text-foreground/60">Portfolio</span>
                      <div className="flex items-center gap-1 text-emerald text-xs">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12.4%</span>
                      </div>
                    </div>

                    {/* Main Value */}
                    <div className="mb-8">
                      <span className="text-xs text-foreground/50 block mb-1">Total Value</span>
                      <motion.span
                        key={portfolioValue}
                        initial={{ opacity: 0.8 }}
                        animate={{ opacity: 1 }}
                        className="text-3xl font-bold text-gradient"
                      >
                        {formatCurrency(portfolioValue)}
                      </motion.span>
                    </div>

                    {/* Mini chart */}
                    <div className="h-24 mb-8">
                      <svg viewBox="0 0 100 40" className="w-full h-full">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 35 Q10 30 20 28 T40 20 T60 15 T80 10 T100 5 V40 H0 Z"
                          fill="url(#chartGradient)"
                        />
                        <path
                          d="M0 35 Q10 30 20 28 T40 20 T60 15 T80 10 T100 5"
                          fill="none"
                          stroke="hsl(160, 84%, 39%)"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Holdings */}
                    <div className="space-y-3">
                      {[
                        { name: "Logistics Fund", value: "₹8.5L", change: "+8.2%" },
                        { name: "Gold ETF", value: "₹5.2L", change: "+4.1%" },
                        { name: "Equity Mix", value: "₹6.8L", change: "+15.3%" },
                      ].map((holding) => (
                        <div
                          key={holding.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/5"
                        >
                          <span className="text-sm">{holding.name}</span>
                          <div className="text-right">
                            <span className="text-sm font-medium block">{holding.value}</span>
                            <span className="text-xs text-emerald">{holding.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/20 to-transparent blur-3xl rounded-full" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
              <Smartphone className="w-5 h-5 text-secondary" />
              <span className="text-sm text-foreground/60">Available on Android</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Track, Invest, and Grow — Anytime, Anywhere
            </h3>

            <p className="text-foreground/60 mb-8">
              Experience seamless portfolio management with real-time updates, 
              instant SIP investments, and comprehensive analytics — all secured 
              with bank-grade encryption.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full sm:w-auto gap-3">
              <Download className="w-5 h-5" />
              Get the APK (v1.2) - Direct Download
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
