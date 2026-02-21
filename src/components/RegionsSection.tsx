import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  "Île-de-France",
  "Hauts-de-France",
  "Grand Est",
  "Normandie",
  "Bretagne",
  "Pays de la Loire",
  "Centre-Val de Loire",
  "Bourgogne-Franche-Comté",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Auvergne-Rhône-Alpes",
  "Provence-Alpes-Côte d'Azur",
];

const RegionsSection = () => (
  <section id="regions" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Zones d'intervention</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Nous intervenons dans toute la France
        </h2>
        <p className="text-muted-foreground">
          Basés en Île-de-France, nous étendons nos services de réparation et d'installation de volets roulants sur l'ensemble du territoire français.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {regions.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 bg-card rounded-lg p-4 card-shadow border border-border hover:border-accent/30 transition-colors"
          >
            <MapPin className="h-5 w-5 text-accent shrink-0" />
            <span className="text-sm font-medium text-foreground">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RegionsSection;
