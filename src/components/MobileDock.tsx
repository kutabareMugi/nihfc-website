import { motion, AnimatePresence } from "framer-motion";
import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const MobileDock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past hero section (approximately 100vh)
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.5;
      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="glass-card p-3 flex items-center gap-3">
            {/* Main CTA */}
            <Button
              variant="dock"
              size="lg"
              className="flex-1 gap-2 animate-pulse-glow"
            >
              <Download className="w-5 h-5" />
              Download App
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="glass"
              size="icon"
              className="h-12 w-12 flex-shrink-0"
            >
              <Calendar className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
