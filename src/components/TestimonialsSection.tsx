import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Fontenay-Trésigny (77)",
    text: "Intervention rapide et efficace pour la réparation de mon volet roulant bloqué. Travail soigné et prix raisonnable. Je recommande vivement !",
    rating: 5,
  },
  {
    name: "Jean-Pierre D.",
    location: "Meaux (77)",
    text: "Excellente prestation pour la motorisation de mes 5 volets. Équipe ponctuelle, professionnelle et de bon conseil. Résultat impeccable.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    location: "Bussy-Saint-Georges (77)",
    text: "Remplacement de double vitrage réalisé en urgence après un cambriolage. Réactifs et rassurants, ils ont fait un travail parfait.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-muted-foreground">Plus de 98% de nos clients nous recommandent. Découvrez leurs avis.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-6 card-shadow border border-border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
            <div>
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
