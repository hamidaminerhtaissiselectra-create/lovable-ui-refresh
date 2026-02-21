import { motion } from "framer-motion";
import { Wrench, RefreshCcw, LayoutGrid, Cpu, GlassWater, ArrowRight, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Wrench,
    title: "Réparation de Volets Roulants",
    desc: "Diagnostic et réparation de tous types de volets roulants : manuels, électriques, solaires. Intervention rapide sur tous mécanismes, lames cassées, moteurs défaillants, sangles usées ou tabliers endommagés.",
    badge: "Le + demandé",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
    features: ["Diagnostic gratuit", "Pièces garanties 2 ans", "Toutes marques"],
  },
  {
    icon: RefreshCcw,
    title: "Remplacement de Volets",
    desc: "Installation de volets roulants neufs en aluminium, PVC ou bois. Large choix de coloris, de modèles et de systèmes d'ouverture adaptés à votre habitat et à vos exigences d'isolation.",
    badge: "Sur-mesure",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    features: ["Fabrication sur-mesure", "Pose en 1 journée", "Garantie décennale"],
  },
  {
    icon: GlassWater,
    title: "Vitrerie & Remplacement de Vitrage",
    desc: "Remplacement de vitrage simple, double ou triple. Intervention d'urgence pour bris de glace 7j/7. Vitrage anti-effraction, acoustique et thermique pour un confort optimal.",
    badge: "Urgence 7j/7",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20",
    features: ["Bris de glace urgent", "Double & triple vitrage", "Vitrage sécurit"],
  },
  {
    icon: Cpu,
    title: "Motorisation & Domotique",
    desc: "Motorisation de vos volets existants et intégration domotique pour un contrôle à distance via smartphone. Compatible Somfy, Google Home, Alexa et systèmes connectés.",
    badge: "Connecté",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    features: ["Compatible domotique", "Contrôle smartphone", "Installation 1-2h/volet"],
  },
  {
    icon: LayoutGrid,
    title: "Installation Complète",
    desc: "Prise de mesures, fabrication sur-mesure et pose professionnelle de volets roulants neufs pour construction neuve ou rénovation. Accompagnement complet de A à Z.",
    badge: "Clé en main",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    features: ["Étude personnalisée", "Pose certifiée", "SAV inclus"],
  },
  {
    icon: Zap,
    title: "Dépannage Express",
    desc: "Service de dépannage rapide pour volets bloqués, moteurs en panne ou situations d'urgence. Intervention possible le jour même en Île-de-France pour votre sécurité.",
    badge: "Express",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    features: ["Intervention le jour même", "Disponible 7j/7", "Devis sur place"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
          <Shield className="h-3.5 w-3.5" /> Solutions Complètes
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Nos Solutions de Volets & Vitrerie
        </h2>
        <p className="text-muted-foreground">
          Protégez votre habitat avec des technologies de pointe et une expertise locale de plus de 10 ans.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border hover:border-accent/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${s.badgeColor}`}>
                {s.badge}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <ul className="space-y-1.5 mb-5">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#devis" className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
