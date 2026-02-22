import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, CheckCircle2, ArrowRight, Phone, ChevronRight, Smartphone, Wifi, Home, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const solutions = [
  { title: "Motorisation filaire", desc: "La solution la plus fiable et économique. Le moteur est commandé par un interrupteur mural fixe. Idéal pour les volets accessibles et les budgets maîtrisés. Installation rapide et sans travaux importants.", points: ["Prix accessible", "Très fiable", "Aucune pile à changer", "Installation simple"], prix: "à partir de 200€/volet" },
  { title: "Motorisation radio (sans fil)", desc: "Le moteur est commandé par une télécommande sans fil. Plus de flexibilité dans le positionnement de la commande, sans câblage mural. Possibilité de centraliser plusieurs volets sur une seule télécommande.", points: ["Télécommande sans fil", "Pas de câblage mural", "Centralisation possible", "Programmation horaire"], prix: "à partir de 300€/volet" },
  { title: "Motorisation solaire", desc: "Autonome et écologique, le moteur solaire est alimenté par un petit panneau photovoltaïque intégré au coffre du volet. Aucun raccordement électrique nécessaire — idéal pour les rénovations sans alimentation existante.", points: ["100% autonome", "Pas de raccordement", "Écologique", "Idéal rénovation"], prix: "à partir de 400€/volet" },
  { title: "Motorisation connectée (domotique)", desc: "Contrôlez vos volets depuis votre smartphone, où que vous soyez. Compatible avec les principaux écosystèmes domotiques : Somfy TaHoma, Google Home, Amazon Alexa, Apple HomeKit. Scénarios automatisés et programmation intelligente.", points: ["Contrôle smartphone", "Compatible assistants vocaux", "Scénarios automatisés", "Gestion à distance"], prix: "à partir de 450€/volet" },
];

const marques = [
  { name: "Somfy", desc: "Leader mondial de la motorisation. Gamme complète filaire, radio et connectée. Écosystème domotique TaHoma parmi les plus complets du marché." },
  { name: "Bubendorff", desc: "Fabricant français de volets roulants intégrés. Spécialiste des solutions solaires et monoblocs. Qualité premium et design soigné." },
  { name: "Nice", desc: "Spécialiste italien de l'automatisation. Solutions fiables et innovantes pour la motorisation de volets, portails et stores." },
  { name: "SIMU", desc: "Fabricant français de moteurs tubulaires. Excellent rapport qualité/prix, large gamme de moteurs filaires et radio." },
];

const MotorisationDomotiquePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Motorisation & Domotique de Volets Roulants | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Motorisation & Domotique</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <Cpu className="h-3.5 w-3.5" /> Maison connectée
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Motorisation & Domotique : Vos Volets Roulants Connectés
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Transformez vos volets manuels en volets motorisés et connectés. Contrôle à distance, programmation horaire, scénarios automatisés — découvrez le confort de la maison intelligente avec nos solutions de motorisation compatibles Somfy, Google Home et Alexa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi Motoriser Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La motorisation de volets roulants est l'un des investissements les plus rentables pour améliorer le <strong className="text-foreground">confort de votre habitat</strong>. Fini les efforts pour monter et descendre vos volets manuellement — un simple appui sur un bouton, une commande vocale ou une programmation automatique suffit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Au-delà du confort, la motorisation apporte des avantages concrets en matière de <strong className="text-foreground">sécurité</strong> (simulation de présence pendant les vacances), d'<strong className="text-foreground">économie d'énergie</strong> (fermeture automatique au coucher du soleil) et d'<strong className="text-foreground">accessibilité</strong> pour les personnes à mobilité réduite.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Smartphone, label: "Contrôle smartphone" },
                { icon: Clock, label: "Programmation horaire" },
                { icon: Shield, label: "Simulation présence" },
                { icon: Zap, label: "Économies d'énergie" },
              ].map((item) => (
                <div key={item.label} className="bg-card rounded-xl p-4 border border-border card-shadow text-center">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-display font-bold text-foreground text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Solutions de Motorisation</h2>
            <p className="text-muted-foreground">Chaque solution est adaptée à votre configuration et à vos besoins. Installation en 1 à 2 heures par volet.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-foreground text-lg">{s.title}</h3>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full shrink-0 ml-2">{s.prix}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Les Marques que Nous Installons</h2>
            <p className="text-muted-foreground text-center mb-8">Nous travaillons exclusivement avec les marques leaders du marché pour garantir fiabilité et durabilité.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {marques.map((m) => (
                <div key={m.name} className="bg-card rounded-xl p-5 border border-border card-shadow">
                  <h4 className="font-display font-bold text-foreground mb-2">{m.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Passez à la Maison Connectée</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Motorisez vos volets roulants et profitez du confort de la domotique. Devis gratuit, installation par un technicien certifié.</p>
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

export default MotorisationDomotiquePage;
