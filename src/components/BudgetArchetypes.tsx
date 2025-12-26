import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Scale, TrendingDown } from "lucide-react";

const archetypes = [
  {
    id: "surplus",
    label: "Surplus",
    icon: TrendingUp,
    title: "The Builder",
    color: "emerald",
    glowClass: "glow-emerald",
    borderColor: "border-emerald/30",
    bgGradient: "from-emerald/20 to-transparent",
    description: "Income exceeds expenses",
    advice: "You're in a powerful position. Allocate extra funds strategically across equities, commodities, and logistics for accelerated wealth building. Consider setting aside 40% for growth investments, 30% for stable income assets, and 30% for opportunistic ventures.",
    tips: [
      "Maximize Section 80C deductions",
      "Diversify across asset classes",
      "Build emergency fund (6 months expenses)",
      "Consider SIP investments for compounding"
    ]
  },
  {
    id: "balanced",
    label: "Balanced",
    icon: Scale,
    title: "The Sustainer",
    color: "secondary",
    glowClass: "glow-blue",
    borderColor: "border-secondary/30",
    bgGradient: "from-secondary/20 to-transparent",
    description: "Income equals expenses",
    advice: "Your discipline is commendable. Focus on creating small surpluses through expense optimization while maintaining financial stability. Even 10-15% of income directed to investments can compound significantly over time.",
    tips: [
      "Track and optimize expenses monthly",
      "Start with small SIP amounts (₹500-1000)",
      "Avoid lifestyle inflation",
      "Build skills for income growth"
    ]
  },
  {
    id: "deficit",
    label: "Deficit",
    icon: TrendingDown,
    title: "The Strategist",
    color: "gold",
    glowClass: "shadow-[0_0_40px_-10px_hsl(var(--gold)/0.4)]",
    borderColor: "border-gold/30",
    bgGradient: "from-gold/20 to-transparent",
    description: "Expenses exceed income",
    advice: "This phase requires strong risk management and strategic planning. Focus on debt consolidation, expense reduction, and building alternative income streams. Short-term sacrifice leads to long-term financial freedom.",
    tips: [
      "Prioritize high-interest debt repayment",
      "Create strict budget boundaries",
      "Explore additional income sources",
      "Delay major purchases until balanced"
    ]
  }
];

export const BudgetArchetypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const [activeTab, setActiveTab] = useState("surplus");

  const activeArchetype = archetypes.find((a) => a.id === activeTab)!;
  const IconComponent = activeArchetype.icon;

  return (
    <section className="relative py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-luxury uppercase text-secondary mb-4 block">
            Financial Health Check
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Know Your <span className="font-serif italic text-gradient">Archetype</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Understanding your financial position is the first step to building lasting wealth.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-8"
        >
          {archetypes.map((archetype) => {
            const Icon = archetype.icon;
            const isActive = activeTab === archetype.id;
            return (
              <button
                key={archetype.id}
                onClick={() => setActiveTab(archetype.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${isActive 
                    ? `glass-card ${archetype.borderColor} ${archetype.glowClass}` 
                    : "bg-foreground/5 hover:bg-foreground/10"
                  }
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? `text-${archetype.color}` : "text-foreground/60"}`} />
                <span className="hidden sm:inline">{archetype.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`glass-card p-8 ${activeArchetype.borderColor} relative overflow-hidden`}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${activeArchetype.bgGradient} opacity-50`} />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl glass-card ${activeArchetype.borderColor}`}>
                <IconComponent className="w-6 h-6" style={{ color: `hsl(var(--${activeArchetype.color}))` }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeArchetype.title}</h3>
                <p className="text-sm text-foreground/60">{activeArchetype.description}</p>
              </div>
            </div>

            {/* Advice */}
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {activeArchetype.advice}
            </p>

            {/* Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeArchetype.tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-foreground/5"
                >
                  <span className="text-xs font-bold text-foreground/40 mt-0.5">0{index + 1}</span>
                  <span className="text-sm text-foreground/70">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
