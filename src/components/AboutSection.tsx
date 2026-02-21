import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Plus de 10 ans d'expérience dans la réparation de volets",
  "Intervention rapide en Île-de-France et partout en France",
  "Artisan certifié RGE et Qualibat",
  "Garantie décennale sur toutes nos installations",
  "Devis gratuit et transparent, sans engagement",
  "Service après-vente réactif et disponible",
];

const AboutSection = () => (
  <section id="apropos" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">À propos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Votre expert en volets roulants depuis plus de 10 ans
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Basée à Fontenay-Trésigny (77), Répar'Action Volets est une entreprise spécialisée dans la réparation, l'installation et la motorisation de volets roulants. Notre équipe d'artisans qualifiés intervient rapidement sur toute l'Île-de-France pour garantir votre confort et votre sécurité.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-6">Répar'Action Volets en chiffres</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "500+", label: "Interventions / an" },
                { num: "98%", label: "Clients satisfaits" },
                { num: "24h", label: "Délai d'intervention" },
                { num: "10 ans", label: "De garantie" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-display font-extrabold">{s.num}</div>
                  <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
