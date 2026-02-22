import { motion } from "framer-motion";
import { Wrench, RefreshCcw, GlassWater, Cpu, LayoutGrid, Zap, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import imgReparation from "@/assets/service-reparation.jpg";
import imgInstallation from "@/assets/service-installation.jpg";
import imgVitrerie from "@/assets/service-vitrerie.jpg";
import imgMotorisation from "@/assets/service-motorisation.jpg";
import imgComplete from "@/assets/service-installation-complete.jpg";
import imgDepannage from "@/assets/service-depannage.jpg";

const services = [
  {
    icon: Wrench,
    title: "Réparation de Volets Roulants",
    desc: "Diagnostic et réparation de tous types de volets roulants : manuels, électriques, solaires. Intervention rapide sur tous mécanismes.",
    badge: "Le + demandé",
    iconBg: "bg-service-blue",
    iconBorder: "border-service-blue/30",
    cardBorder: "hover:border-service-blue/40",
    image: imgReparation,
    link: "/services/reparation-volets-roulants",
  },
  {
    icon: RefreshCcw,
    title: "Remplacement de Volets",
    desc: "Installation de volets roulants neufs en aluminium, PVC ou bois. Large choix de coloris et de modèles sur-mesure.",
    badge: "Sur-mesure",
    iconBg: "bg-service-rose",
    iconBorder: "border-service-rose/30",
    cardBorder: "hover:border-service-rose/40",
    image: imgInstallation,
    link: "/services/installation-remplacement-volets",
  },
  {
    icon: GlassWater,
    title: "Vitrerie & Vitrage",
    desc: "Remplacement de vitrage simple, double ou triple. Intervention d'urgence pour bris de glace 7j/7.",
    badge: "Urgence 7j/7",
    iconBg: "bg-service-emerald",
    iconBorder: "border-service-emerald/30",
    cardBorder: "hover:border-service-emerald/40",
    image: imgVitrerie,
    link: "/services/vitrerie-remplacement-vitrage",
  },
  {
    icon: Cpu,
    title: "Motorisation & Domotique",
    desc: "Motorisation de vos volets et intégration domotique. Compatible Somfy, Google Home, Alexa.",
    badge: "Connecté",
    iconBg: "bg-service-violet",
    iconBorder: "border-service-violet/30",
    cardBorder: "hover:border-service-violet/40",
    image: imgMotorisation,
    link: "/services/motorisation-domotique",
  },
  {
    icon: LayoutGrid,
    title: "Installation Complète",
    desc: "Prise de mesures, fabrication sur-mesure et pose professionnelle. Accompagnement complet de A à Z.",
    badge: "Clé en main",
    iconBg: "bg-service-cyan",
    iconBorder: "border-service-cyan/30",
    cardBorder: "hover:border-service-cyan/40",
    image: imgComplete,
    link: "/services/installation-remplacement-volets",
  },
  {
    icon: Zap,
    title: "Dépannage Express",
    desc: "Service de dépannage rapide pour volets bloqués ou moteurs en panne. Intervention le jour même.",
    badge: "Express",
    iconBg: "bg-service-orange",
    iconBorder: "border-service-orange/30",
    cardBorder: "hover:border-service-orange/40",
    image: imgDepannage,
    link: "/services/depannage-express",
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
          Services de Réparation, Installation & Motorisation de Volets Roulants
        </h2>
        <p className="text-muted-foreground">
          Réparation, installation, motorisation et vitrerie de volets roulants. Expertise multimarques (Somfy, Bubendorff), intervention rapide, garantie décennale. Paris & France entière.
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
            className={`group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border border-border ${s.cardBorder}`}
          >
            {/* Image with icon badge overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Floating icon badge */}
              <div className={`absolute bottom-0 left-5 translate-y-1/2 w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center shadow-lg border-[3px] border-card z-10`}>
                <s.icon className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              {/* Badge top right */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-card/90 backdrop-blur-sm text-foreground shadow-sm">
                {s.badge}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 pt-8">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <Link to={s.link} className="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:gap-2 transition-all group-hover:text-accent">
                Découvrir <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
