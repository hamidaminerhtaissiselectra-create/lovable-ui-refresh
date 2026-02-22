import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-shutters.jpg";
import { useRef } from "react";

const badges = [
  { icon: Shield, text: "Garantie 10 ans", bg: "bg-service-blue/10", border: "border-service-blue/20", textColor: "text-service-blue" },
  { icon: Clock, text: "Intervention sous 48h", bg: "bg-service-orange/10", border: "border-service-orange/20", textColor: "text-service-orange" },
  { icon: Award, text: "Artisan certifié RGE", bg: "bg-service-emerald/10", border: "border-service-emerald/20", textColor: "text-service-emerald" },
];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroImg} alt="Volets roulants modernes sur une maison française" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-8 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              Expert en Volets Roulants depuis 10 ans — Paris, Île-de-France & Partout en France
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
            Réparation, Installation & Motorisation de <span className="text-gradient">Volets Roulants</span> et <span className="text-gradient">Vitrerie</span> à Paris, Île-de-France & Partout en France
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground mb-8 max-w-lg">
            Réparation, installation, motorisation et vitrerie de volets roulants. Intervention rapide à Paris, en Île-de-France et dans toute la France. Devis gratuit en 24h, garantie décennale, artisans certifiés RGE. Votre expert de confiance pour tous vos besoins en volets roulants.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-4 mb-10">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base font-semibold shadow-lg shadow-accent/25 rounded-full">
              <Link to="/#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5 text-base gap-2 rounded-full">
              <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <div key={b.text} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium ${b.bg} ${b.border} ${b.textColor} backdrop-blur-sm`}>
                <b.icon className="h-4 w-4" />
                <span>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

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
};

export default HeroSection;
