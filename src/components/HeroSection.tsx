import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-shutters.jpg";

const badges = [
  { icon: Shield, text: "Garantie 10 ans" },
  { icon: Clock, text: "Intervention rapide" },
  { icon: Award, text: "Artisan certifié" },
];

const HeroSection = () => (
  <section id="accueil" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Volets roulants modernes sur une maison française" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
            Volets Roulants • Vitrerie • Domotique
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Réparation & Installation de Volets Roulants en Île-de-France
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
          Expert en réparation, installation et motorisation de volets roulants. Intervention rapide sur toute l'Île-de-France et au-delà.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base font-semibold shadow-lg">
            Demander un devis gratuit <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base">
            Nos services
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-6">
          {badges.map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <b.icon className="h-5 w-5 text-accent" />
              <span className="font-medium">{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
