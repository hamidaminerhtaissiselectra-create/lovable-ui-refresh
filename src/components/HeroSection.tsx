import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-shutters.jpg";

const badges = [
  { icon: Shield, text: "Garantie 10 ans", color: "bg-primary/10 border-primary/20 text-primary" },
  { icon: Clock, text: "Intervention sous 48h", color: "bg-accent/10 border-accent/20 text-accent" },
  { icon: Award, text: "Artisan certifié RGE", color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600" },
];

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Volets roulants modernes sur une maison française" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
    </div>

    <div className="container mx-auto px-4 relative z-10 pt-20">
      <div className="max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8">
            <Shield className="h-4 w-4" />
            Expert en Volets Roulants depuis 10 ans en Île-de-France
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
          Réparez vos{" "}
          <span className="text-accent">volets roulants</span>
          <br />
          et votre{" "}
          <span className="text-accent">vitrage</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground mb-8 max-w-lg">
          Réparation, Installation, Motorisation et Vitrerie. Intervention rapide sur toute l'Île-de-France et au-delà. Devis gratuit en 24h.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base font-semibold shadow-lg shadow-accent/25">
            <a href="#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5 text-base gap-2">
            <a href="tel:0164070000"><Phone className="h-5 w-5" /> Intervention Urgente</a>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-3">
          {badges.map((b) => (
            <div key={b.text} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium ${b.color}`}>
              <b.icon className="h-4 w-4" />
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
    >
      <span className="text-xs font-medium">Découvrir</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
