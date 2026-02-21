import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const regions = [
  { name: "Île-de-France", depts: "75, 77, 78, 91, 92, 93, 94, 95", highlight: true },
  { name: "Hauts-de-France", depts: "02, 59, 60, 62, 80" },
  { name: "Grand Est", depts: "08, 10, 51, 52, 54, 55, 57, 67, 68, 88" },
  { name: "Normandie", depts: "14, 27, 50, 61, 76" },
  { name: "Bretagne", depts: "22, 29, 35, 56" },
  { name: "Pays de la Loire", depts: "44, 49, 53, 72, 85" },
  { name: "Centre-Val de Loire", depts: "18, 28, 36, 37, 41, 45" },
  { name: "Bourgogne-Franche-Comté", depts: "21, 25, 39, 58, 70, 71, 89, 90" },
  { name: "Nouvelle-Aquitaine", depts: "16, 17, 19, 23, 24, 33, 40, 47, 64, 79, 86, 87" },
  { name: "Occitanie", depts: "09, 11, 12, 30, 31, 32, 34, 46, 48, 65, 66, 81, 82" },
  { name: "Auvergne-Rhône-Alpes", depts: "01, 03, 07, 15, 26, 38, 42, 43, 63, 69, 73, 74" },
  { name: "Provence-Alpes-Côte d'Azur", depts: "04, 05, 06, 13, 83, 84" },
];

const RegionsSection = () => (
  <section id="regions" className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-4">
          <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Intervention sur Toute la France
        </h2>
        <p className="text-muted-foreground">
          Basés en Île-de-France, nous intervenons rapidement sur l'ensemble du territoire français grâce à notre réseau de techniciens qualifiés.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className={`flex items-start gap-3 rounded-xl p-4 border transition-all hover:border-accent/30 ${r.highlight ? "bg-accent/5 border-accent/20 card-shadow" : "bg-card border-border card-shadow"}`}
          >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${r.highlight ? "bg-accent/10" : "bg-muted"}`}>
              <MapPin className={`h-4 w-4 ${r.highlight ? "text-accent" : "text-muted-foreground"}`} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold ${r.highlight ? "text-accent" : "text-foreground"}`}>{r.name}</span>
                {r.highlight && <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] font-bold bg-accent text-accent-foreground">SIÈGE</span>}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">{r.depts}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 text-center">
        <a href="#devis" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
          Demander un devis dans votre région <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default RegionsSection;
