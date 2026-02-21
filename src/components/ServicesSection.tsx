import { motion } from "framer-motion";
import { Wrench, RefreshCcw, LayoutGrid, Cpu, GlassWater, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Réparation de Volets Roulants",
    desc: "Diagnostic et réparation de tous types de volets roulants : manuels, électriques, solaires. Intervention rapide et garantie.",
  },
  {
    icon: RefreshCcw,
    title: "Remplacement de Volets",
    desc: "Installation de volets roulants neufs en aluminium, PVC ou bois. Large choix de coloris et de modèles adaptés à votre habitat.",
  },
  {
    icon: GlassWater,
    title: "Vitrerie & Remplacement de Vitrage",
    desc: "Remplacement de vitrage simple, double ou triple vitrage. Intervention d'urgence pour bris de glace 7j/7.",
  },
  {
    icon: Cpu,
    title: "Motorisation & Domotique",
    desc: "Motorisation de vos volets existants et intégration domotique pour un contrôle à distance via smartphone.",
  },
  {
    icon: LayoutGrid,
    title: "Installation Complète",
    desc: "Prise de mesures, fabrication sur-mesure et pose professionnelle de volets roulants neufs pour construction ou rénovation.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Services</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Des solutions complètes pour vos volets & vitrages
        </h2>
        <p className="text-muted-foreground">
          De la réparation à l'installation, nous intervenons sur tous types de volets roulants et vitrages avec professionnalisme et garantie.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-accent/30"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
              <s.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="#contact" className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all">
              En savoir plus <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
