import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Marie L.",
    location: "Fontenay-Trésigny (77)",
    text: "Intervention rapide et efficace pour la réparation de mon volet roulant bloqué. Le technicien a diagnostiqué la panne en 10 minutes et tout était réglé en moins d'une heure. Travail soigné et prix raisonnable. Je recommande vivement !",
    rating: 5,
    service: "Réparation",
    badgeColor: "bg-accent/10 text-accent border-accent/20",
    date: "Janvier 2026",
  },
  {
    name: "Jean-Pierre D.",
    location: "Meaux (77)",
    text: "Excellente prestation pour la motorisation de mes 5 volets roulants. L'équipe a travaillé proprement, installé des moteurs Somfy avec commande centralisée. Je peux tout contrôler depuis mon téléphone. Résultat impeccable, je suis ravi !",
    rating: 5,
    service: "Motorisation",
    badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    date: "Décembre 2025",
  },
  {
    name: "Sophie M.",
    location: "Bussy-Saint-Georges (77)",
    text: "Remplacement de double vitrage réalisé en urgence après un cambriolage. L'équipe est intervenue le jour même, très réactive et rassurante. Le nouveau vitrage anti-effraction me permet de dormir sereinement. Professionnalisme exemplaire.",
    rating: 5,
    service: "Vitrerie urgente",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20",
    date: "Novembre 2025",
  },
  {
    name: "Laurent B.",
    location: "Torcy (77)",
    text: "Installation complète de volets roulants en aluminium sur toute ma maison neuve. 12 volets posés en 2 jours, finitions parfaites. L'isolement phonique et thermique a été nettement amélioré. Très satisfait du résultat final !",
    rating: 5,
    service: "Installation",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    date: "Octobre 2025",
  },
  {
    name: "Isabelle R.",
    location: "Lagny-sur-Marne (77)",
    text: "Répar'Action a remplacé 3 volets roulants vétustes par des modèles neufs motorisés. Du conseil initial à la pose, tout a été parfait. Le devis était clair et respecté. Une entreprise sérieuse que je recommande les yeux fermés.",
    rating: 5,
    service: "Remplacement",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    date: "Septembre 2025",
  },
  {
    name: "Ahmed K.",
    location: "Chelles (77)",
    text: "Dépannage en urgence un dimanche pour un volet roulant bloqué en position ouverte. Le technicien est arrivé en moins de 2h et a résolu le problème rapidement. Très professionnel et prix correct même pour un dimanche. Merci !",
    rating: 5,
    service: "Dépannage urgent",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    date: "Août 2025",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-semibold border border-amber-500/20 mb-4">
          Plus de 500 clients nous font confiance
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Ce Que Disent Nos Clients
        </h2>
        <p className="text-muted-foreground">Découvrez les témoignages de particuliers et professionnels qui ont choisi Répar'Action Volets</p>
      </motion.div>

      {/* Stats bar */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          { num: "500+", label: "Clients satisfaits" },
          { num: "4.9/5", label: "Note moyenne" },
          { num: "98%", label: "Recommandation" },
          { num: "24h", label: "Délai intervention" },
        ].map((s) => (
          <div key={s.label} className="text-center px-6">
            <div className="text-2xl font-display font-extrabold text-accent">{s.num}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 card-shadow border border-border hover:border-accent/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold border ${t.badgeColor}`}>
                {t.service}
              </span>
              <span className="text-xs text-muted-foreground">{t.date}</span>
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <Quote className="h-5 w-5 text-accent/20 mb-2" />
            <p className="text-foreground text-sm leading-relaxed mb-4">{t.text}</p>
            <div className="border-t border-border pt-3">
              <div className="font-semibold text-foreground text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
