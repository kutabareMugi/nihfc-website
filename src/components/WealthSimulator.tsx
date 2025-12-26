import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Wallet } from "lucide-react";

const calculateGrowth = (principal: number, years: number, rate: number) => {
  return principal * Math.pow(1 + rate, years);
};

const generateChartData = (investment: number) => {
  const data = [];
  for (let year = 0; year <= 7; year++) {
    data.push({
      year: `Y${year}`,
      savings: calculateGrowth(investment, year, 0.04), // 4% savings rate
      nihfc: calculateGrowth(investment, year, 0.12),   // 12% NIHFC returns
    });
  }
  return data;
};

// Dynamic Y-axis domain calculation
const getYAxisDomain = (investment: number) => {
  const maxValue = calculateGrowth(investment, 7, 0.12);
  // Round up to nearest nice number for Y-axis max
  if (maxValue >= 10000000) {
    return [0, Math.ceil(maxValue / 5000000) * 5000000]; // Round to 50L increments
  } else if (maxValue >= 1000000) {
    return [0, Math.ceil(maxValue / 500000) * 500000]; // Round to 5L increments
  } else {
    return [0, Math.ceil(maxValue / 100000) * 100000]; // Round to 1L increments
  }
};

export const WealthSimulator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [investment, setInvestment] = useState([1000000]); // 10 Lakhs default
  const [chartData, setChartData] = useState(generateChartData(1000000));
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    setChartData(generateChartData(investment[0]));
  }, [investment]);

  // Animate the final value
  useEffect(() => {
    if (isInView) {
      const finalValue = calculateGrowth(investment[0], 7, 0.12);
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setAnimatedValue(finalValue * easeOut);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [investment, isInView]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)}Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)}L`;
    }
    return `₹${value.toLocaleString()}`;
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-luxury uppercase text-secondary mb-4 block">
            Wealth Simulator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Visualize Your <span className="font-serif italic text-gradient">Growth</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            See how your investment could grow over 7 years with NIHFC's strategic approach.
          </p>
        </motion.div>

        {/* Simulator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8"
        >
          {/* Investment Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-foreground/60" />
                <span className="text-sm text-foreground/60">Investment Amount</span>
              </div>
              <span className="text-2xl font-bold text-gradient">
                {formatCurrency(investment[0])}
              </span>
            </div>
            <Slider
              value={investment}
              onValueChange={setInvestment}
              min={100000}
              max={10000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-foreground/40">
              <span>₹1L</span>
              <span>₹1Cr</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[300px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis
                  dataKey="year"
                  stroke="hsl(var(--foreground) / 0.3)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--foreground) / 0.3)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => formatCurrency(value)}
                  domain={getYAxisDomain(investment[0])}
                  tickCount={6}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                  formatter={(value: number) => [formatCurrency(value), ""]}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
                {/* Savings line */}
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="hsl(var(--foreground) / 0.3)"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  name="Savings Account"
                />
                {/* NIHFC line */}
                <Line
                  type="monotone"
                  dataKey="nihfc"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={3}
                  dot={false}
                  name="NIHFC Strategy"
                  className={isInView ? "animate-draw-line" : ""}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 text-center">
              <span className="text-xs text-foreground/50 block mb-1">Savings Account (4%)</span>
              <span className="text-lg font-semibold text-foreground/70">
                {formatCurrency(calculateGrowth(investment[0], 7, 0.04))}
              </span>
            </div>
            <div className="glass-card p-4 text-center border-secondary/30 glow-blue">
              <span className="text-xs text-foreground/50 block mb-1">NIHFC Strategy (12%)</span>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald" />
                <span className="text-xl font-bold text-gradient-blue">
                  {formatCurrency(animatedValue)}
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-foreground/30 text-center mt-6">
            *Projections based on historical performance. Past returns do not guarantee future results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
