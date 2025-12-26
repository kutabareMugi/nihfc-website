import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Warehouse, Coffee, Leaf, Smartphone, Building2, Globe } from "lucide-react";

const opportunities = [
  {
    icon: Warehouse,
    title: "Tier 2/3 Expansion",
    description: "Warehousing boom in emerging cities with rising infrastructure demand and last-mile delivery networks.",
    gradient: "from-secondary/20 to-transparent",
  },
  {
    icon: Coffee,
    title: "Café Ventures",
    description: "Urban youth-focused consumer spaces with scalable models and consistent returns.",
    gradient: "from-gold/20 to-transparent",
  },
  {
    icon: Leaf,
    title: "Green Energy",
    description: "ESG investing and sustainable portfolios driving the future of responsible wealth building.",
    gradient: "from-emerald/20 to-transparent",
  },
  {
    icon: Smartphone,
    title: "Fintech Revolution",
    description: "Blockchain integration, UPI-linked investments, and AI-driven financial solutions.",
    gradient: "from-champagne/20 to-transparent",
  },
  {
    icon: Building2,
    title: "Infrastructure Growth",
    description: "Government tenders and public-private projects creating stable income opportunities.",
    gradient: "from-secondary/20 to-transparent",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Fractional shares, REITs, and international mutual funds opening new frontiers.",
    gradient: "from-gold/20 to-transparent",
  },
];

export const FutureHorizons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Section Header */}
      <div className="px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-medium tracking-luxury uppercase text-secondary mb-4 block">
            Future Opportunities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Where the <span className="font-serif italic text-gradient">Growth</span> Lies
          </h2>
          <p className="text-foreground/60">
            Explore emerging sectors and strategic opportunities that will define the next decade of wealth creation.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll - Centered container */}
      <div className="flex justify-center">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory max-w-full"
        >
          {opportunities.map((opportunity, index) => {
          const Icon = opportunity.icon;
          return (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[350px] snap-center"
            >
              <div className="glass-card-hover h-full p-6 relative overflow-hidden group">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-foreground/5 w-fit mb-6 group-hover:bg-foreground/10 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {opportunity.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-foreground/40 group-hover:text-foreground/70 transition-colors duration-300">
                    <span className="text-xs font-medium tracking-wide">Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex justify-center mt-6 lg:hidden"
      >
        <div className="flex items-center gap-2 text-foreground/40">
          <span className="text-xs">Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
