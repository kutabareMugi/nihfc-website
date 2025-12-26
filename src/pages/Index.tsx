import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VaultSection } from "@/components/VaultSection";
import { WealthSimulator } from "@/components/WealthSimulator";
import { BudgetArchetypes } from "@/components/BudgetArchetypes";
import { AppShowcase } from "@/components/AppShowcase";
import { FutureHorizons } from "@/components/FutureHorizons";
import { Footer } from "@/components/Footer";
import { MobileDock } from "@/components/MobileDock";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <VaultSection />
        <WealthSimulator />
        <BudgetArchetypes />
        <AppShowcase />
        <FutureHorizons />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
};

export default Index;
