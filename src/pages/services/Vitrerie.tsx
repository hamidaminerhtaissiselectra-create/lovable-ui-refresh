import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassWater, CheckCircle2, ArrowRight, Phone, Shield, ChevronRight, AlertTriangle, Thermometer, Volume2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const typesVitrage = [
  { title: "Simple vitrage", desc: "Remplacement de vitrages simples pour les bâtiments anciens ou les structures ne nécessitant pas d'isolation renforcée. Intervention rapide pour bris de glace.", features: ["Remplacement rapide", "Prix économique", "Toutes dimensions"] },
  { title: "Double vitrage", desc: "La solution standard pour une isolation thermique et phonique efficace. Le double vitrage réduit les pertes de chaleur de 40% par rapport au simple vitrage et atténue significativement les bruits extérieurs.", features: ["Isolation thermique 40%+", "Isolation phonique", "Standard construction neuve"] },
  { title: "Triple vitrage", desc: "Le nec plus ultra de l'isolation. Recommandé pour les façades exposées au nord ou dans les régions à climat rigoureux. Le triple vitrage offre les meilleures performances énergétiques du marché.", features: ["Isolation maximale", "Performances BBC/RT2012", "Façades Nord"] },
  { title: "Vitrage anti-effraction", desc: "Vitrage feuilleté de sécurité avec film PVB qui maintient les éclats en cas de bris. Résiste aux tentatives d'intrusion et protège contre les blessures en cas de casse accidentelle.", features: ["Retarde les intrusions", "Sécurité anti-blessure", "Norme EN 356"] },
  { title: "Vitrage acoustique", desc: "Composition asymétrique spécialement conçue pour réduire les nuisances sonores. Idéal pour les habitations en zone urbaine, à proximité d'aéroports ou d'axes routiers fréquentés.", features: ["Réduction -35 dB", "Zones urbaines", "Composition asymétrique"] },
  { title: "Vitrage thermique à contrôle solaire", desc: "Vitrage à isolation renforcée avec couche à faible émissivité. Laisse entrer la lumière tout en bloquant la chaleur excessive en été et en conservant la chaleur en hiver.", features: ["Confort été/hiver", "Luminosité préservée", "Économies d'énergie"] },
];

const urgences = [
  "Bris de glace suite à un cambriolage",
  "Vitre cassée par intempéries (grêle, tempête)",
  "Vitrage fissuré posant un risque de sécurité",
  "Porte vitrée brisée",
  "Baie vitrée endommagée",
  "Vitrine de commerce cassée",
];

const VitreriePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Vitrerie & Remplacement de Vitrage | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vitrerie & Remplacement de Vitrage</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <GlassWater className="h-3.5 w-3.5" /> Urgence 7j/7
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Vitrerie & Remplacement de Vitrage : Intervention d'Urgence 7j/7
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Bris de glace, vitrage cassé ou remplacement programmé ? Nos vitriers professionnels interviennent en urgence 7 jours sur 7 pour sécuriser votre habitation. Simple, double ou triple vitrage — nous traitons toutes les situations avec réactivité et expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Urgence : 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgence */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Service d'Urgence Vitrerie — Intervention Rapide</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un vitrage cassé constitue une <strong className="text-foreground">urgence de sécurité</strong>. Que ce soit suite à un cambriolage, un accident domestique ou des intempéries, chaque minute compte pour sécuriser votre habitation. Notre service d'urgence vitrerie est disponible <strong className="text-foreground">7 jours sur 7</strong> pour intervenir dans les meilleurs délais.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nos vitriers arrivent équipés pour réaliser une <strong className="text-foreground">mise en sécurité immédiate</strong> (pose de panneau provisoire) puis procèdent au remplacement définitif du vitrage dans les plus brefs délais. Nous travaillons avec les principales compagnies d'assurance pour simplifier vos démarches.
            </p>
            <div className="bg-card rounded-xl p-6 border border-border card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <h3 className="font-display font-bold text-foreground">Nous intervenons en urgence pour :</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {urgences.map((u) => (
                  <div key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {u}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types de vitrage */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Tous les Types de Vitrage Disponibles</h2>
            <p className="text-muted-foreground">Nous posons et remplaçons tous types de vitrage, du simple au triple, en passant par les vitrages spéciaux.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {typesVitrage.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow">
                <h3 className="font-display font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{v.desc}</p>
                <ul className="space-y-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages isolation */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Les Avantages d'un Vitrage Performant</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Investir dans un vitrage de qualité, c'est améliorer durablement le confort et la valeur de votre bien immobilier. Voici les principaux bénéfices que vous pouvez attendre d'un remplacement de vitrage.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Thermometer, title: "Économies d'énergie", desc: "Jusqu'à 40% de réduction des pertes de chaleur avec un double vitrage performant. L'investissement se rentabilise en quelques années." },
                { icon: Volume2, title: "Confort acoustique", desc: "Un vitrage acoustique adapté peut réduire le bruit extérieur de 35 dB, transformant radicalement votre qualité de vie." },
                { icon: Lock, title: "Sécurité renforcée", desc: "Les vitrages feuilletés retardent considérablement les tentatives d'effraction et protègent contre les blessures en cas de casse." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Besoin d'un Vitrier Professionnel ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Urgence ou projet planifié, nos vitriers interviennent rapidement avec du matériel de qualité. Devis gratuit et sans engagement.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VitreriePage;
