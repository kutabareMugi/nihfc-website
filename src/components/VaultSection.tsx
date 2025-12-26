import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Shield, Truck, TrendingUp, Sparkles } from "lucide-react";

const portfolioData = [
  { name: "Logistics", value: 30, color: "hsl(217, 91%, 60%)" },
  { name: "Commodities", value: 25, color: "hsl(45, 93%, 47%)" },
  { name: "Equities", value: 25, color: "hsl(160, 84%, 39%)" },
  { name: "Real Estate", value: 20, color: "hsl(30, 23%, 85%)" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const VaultSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <section id="services" className="relative py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-luxury uppercase text-secondary mb-4 block">
            The Vault
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Strategic <span className="font-serif italic text-gradient">Diversification</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Risk-managed growth through blue-chip assets and data-backed decisions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Card 1 - Large - Portfolio */}
          <motion.div
            variants={item}
            className="glass-card-hover p-6 md:col-span-2 lg:row-span-2"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-xs font-medium tracking-luxury uppercase text-foreground/60">
                  Diversified Portfolio
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Smart Capital Allocation</h3>
              <p className="text-sm text-foreground/60 mb-6">
                Strategically distributed across equities, commodities, and logistics for balanced growth.
              </p>
              
              {/* Donut Chart */}
              <div className="flex-1 flex items-center justify-center min-h-[200px]">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="transparent"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                {portfolioData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-foreground/70">
                      {item.name} ({item.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Tall - Gold & Silver */}
          <motion.div
            variants={item}
            className="glass-card-hover p-6 lg:row-span-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-xs font-medium tracking-luxury uppercase text-foreground/60">
                  The Hedge
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Gold & Silver</h3>
              <p className="text-sm text-foreground/60 mb-6">
                Inflation-proof assets with historical stability.
              </p>
              
              {/* Metallic visual */}
              <div className="relative h-40 rounded-xl overflow-hidden my-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-champagne/20 to-gold/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gradient">8-12%</span>
                </div>
              </div>
              
              <p className="text-xs text-foreground/50 text-center">
                Historical Annual Returns
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Logistics */}
          <motion.div
            variants={item}
            className="glass-card-hover p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-5 h-5 text-secondary" />
              <span className="text-xs font-medium tracking-luxury uppercase text-foreground/60">
                The Engine
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">Logistics & Tenders</h3>
            <p className="text-sm text-foreground/60">
              Asset-backed income from government infrastructure projects.
            </p>
            
            {/* Stylized map lines */}
            <div className="mt-4 h-16 relative">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path
                  d="M5 30 Q25 10 50 20 T95 15"
                  fill="none"
                  stroke="hsl(217, 91%, 60%)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  className="opacity-60"
                />
                <circle cx="5" cy="30" r="2" fill="hsl(217, 91%, 60%)" />
                <circle cx="50" cy="20" r="2" fill="hsl(217, 91%, 60%)" />
                <circle cx="95" cy="15" r="2" fill="hsl(217, 91%, 60%)" />
              </svg>
            </div>
          </motion.div>

          {/* Card 4 - Tax Efficiency */}
          <motion.div
            variants={item}
            className="glass-card-hover p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-emerald" />
                <span className="text-xs font-medium tracking-luxury uppercase text-foreground/60">
                  The Benefit
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">Tax Efficiency</h3>
              <p className="text-sm text-foreground/60">
                Save up to <span className="text-emerald font-semibold">₹1.5L</span> under Section 80C.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
