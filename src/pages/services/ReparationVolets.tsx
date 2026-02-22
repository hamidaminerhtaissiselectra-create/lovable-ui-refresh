import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, CheckCircle2, ArrowRight, Phone, Shield, Clock, AlertTriangle, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pannes = [
  { title: "Volet roulant bloqué en position haute ou basse", desc: "Cause fréquente : sangle usée, lames désalignées ou moteur en fin de vie. Nous intervenons rapidement pour débloquer votre volet et rétablir son fonctionnement normal." },
  { title: "Moteur qui ne répond plus", desc: "Un moteur défaillant peut être causé par une surchauffe, un condensateur défectueux ou un problème de câblage. Notre diagnostic permet d'identifier précisément l'origine de la panne." },
  { title: "Sangle cassée ou manivelle bloquée", desc: "Les systèmes manuels s'usent avec le temps. Nous remplaçons sangles, enrouleurs et manivelles par des pièces de qualité pour retrouver un fonctionnement fluide." },
  { title: "Lames cassées ou tordues", desc: "Un choc, le vent ou l'usure peuvent endommager les lames de votre tablier. Nous remplaçons les lames défectueuses à l'identique, sans changer l'ensemble du volet." },
  { title: "Volet roulant qui fait du bruit", desc: "Des grincements ou claquements indiquent souvent un problème de coulisses, de lames désaxées ou de fin de course mal réglée. Un réglage professionnel suffit souvent à résoudre le problème." },
  { title: "Télécommande ou interrupteur défectueux", desc: "Problème de réception radio, pile usée ou boîtier endommagé : nous diagnostiquons et remplaçons les éléments de commande pour un pilotage fiable de vos volets." },
];

const etapes = [
  { num: "01", title: "Prise de contact", desc: "Appelez-nous au 06 03 20 59 67 ou remplissez notre formulaire en ligne. Un conseiller vous répond sous 2 heures pour comprendre votre situation." },
  { num: "02", title: "Diagnostic gratuit", desc: "Notre technicien certifié se déplace chez vous pour réaliser un diagnostic complet et précis de la panne. Aucun frais de déplacement." },
  { num: "03", title: "Devis détaillé", desc: "Vous recevez un devis clair et transparent, détaillant les pièces nécessaires, la main d'œuvre et la durée de l'intervention. Sans surprise." },
  { num: "04", title: "Intervention experte", desc: "Nos artisans certifiés réparent votre volet avec des pièces de qualité. Travail soigné, propre et rapide — généralement en 1 à 2 heures." },
  { num: "05", title: "Vérification & garantie", desc: "Nous testons le bon fonctionnement du volet et vous remettons votre certificat de garantie. Toutes nos réparations sont garanties 2 ans." },
];

const marques = ["Somfy", "Bubendorff", "Profalux", "Franciaflex", "Lakal", "SIMU", "Nice", "Becker", "Came", "Zurflüh-Feller"];

const ReparationVoletsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Réparation de Volets Roulants | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Réparation de Volets Roulants</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <Wrench className="h-3.5 w-3.5" /> Service le + demandé
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Réparation de Volets Roulants : Expert en Dépannage Rapide
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Votre volet roulant est bloqué, fait du bruit ou ne répond plus ? Nos techniciens certifiés interviennent rapidement sur tous types de volets roulants — manuels, électriques et solaires — pour un dépannage efficace et garanti. Diagnostic gratuit, devis transparent, intervention sous 48h.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi faire réparer son volet roulant rapidement ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Un volet roulant en panne n'est pas qu'un simple désagrément. Il compromet directement la <strong className="text-foreground">sécurité de votre domicile</strong>, votre <strong className="text-foreground">isolation thermique</strong> et <strong className="text-foreground">phonique</strong>, ainsi que votre confort quotidien. En hiver, un volet bloqué en position ouverte peut entraîner une perte de chaleur significative et une augmentation de votre facture énergétique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chez <strong className="text-foreground">Répar'Action Volets</strong>, nous comprenons l'urgence de ces situations. C'est pourquoi nous proposons un service de réparation rapide avec intervention sous 48 heures sur toute l'Île-de-France et au-delà. Nos techniciens sont équipés pour traiter la majorité des pannes en une seule visite, avec les pièces de rechange nécessaires directement dans leur véhicule.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Que votre volet soit en <strong className="text-foreground">aluminium, PVC ou bois</strong>, qu'il soit <strong className="text-foreground">manuel (sangle ou manivelle), électrique (filaire ou radio) ou solaire</strong>, nous avons l'expertise et les pièces pour le remettre en état de marche. Notre taux de résolution au premier passage est de 95%.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: "Garantie 2 ans", desc: "Pièces et main d'œuvre" },
                  { icon: Clock, label: "Intervention sous 48h", desc: "Partout en Île-de-France" },
                  { icon: Star, label: "95% résolus au 1er passage", desc: "Pièces en stock" },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-xl p-5 border border-border card-shadow text-center">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="font-display font-bold text-foreground text-sm">{item.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types de pannes */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Pannes de Volets Roulants les Plus Fréquentes</h2>
            <p className="text-muted-foreground">Découvrez les problèmes que nous traitons quotidiennement et nos solutions professionnelles.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pannes.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow hover:border-accent/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <AlertTriangle className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-sm">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Comment se Déroule une Réparation de Volet Roulant ?</h2>
            <p className="text-muted-foreground">Un processus simple et transparent, du premier appel à la remise en service de votre volet.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {etapes.map((e, i) => (
              <motion.div key={e.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 font-display font-extrabold text-accent text-lg">{e.num}</div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Toutes les Marques de Volets Roulants Réparées</h2>
            <p className="text-muted-foreground">Nous intervenons sur toutes les marques et tous les modèles du marché.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {marques.map((m) => (
              <span key={m} className="px-4 py-2 rounded-lg bg-card border border-border card-shadow text-sm font-medium text-foreground">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs indicatifs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Tarifs Indicatifs de Réparation de Volets Roulants</h2>
            <p className="text-muted-foreground text-center mb-8">Ces tarifs sont donnés à titre indicatif. Chaque situation est unique — nous établissons systématiquement un devis personnalisé après diagnostic.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-display font-bold text-foreground text-sm border-b border-border">Type d'intervention</th>
                    <th className="text-left px-4 py-3 font-display font-bold text-foreground text-sm border-b border-border">Tarif indicatif</th>
                    <th className="text-left px-4 py-3 font-display font-bold text-foreground text-sm border-b border-border">Durée moyenne</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Remplacement de sangle", "50€ – 80€", "30 min"],
                    ["Remplacement de manivelle", "60€ – 100€", "45 min"],
                    ["Remplacement de lames", "80€ – 150€ / lame", "1h"],
                    ["Remplacement du tablier complet", "200€ – 400€", "2h"],
                    ["Réparation moteur électrique", "150€ – 350€", "1h – 2h"],
                    ["Remplacement moteur", "250€ – 500€", "1h30"],
                    ["Réglage fin de course", "60€ – 100€", "30 min"],
                    ["Réparation complète volet", "150€ – 450€", "1h – 3h"],
                  ].map(([intervention, tarif, duree]) => (
                    <tr key={intervention} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-foreground">{intervention}</td>
                      <td className="px-4 py-3 font-semibold text-accent">{tarif}</td>
                      <td className="px-4 py-3 text-muted-foreground">{duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">* Tarifs TTC indicatifs. Diagnostic et devis gratuits. Prix final établi après visite sur site.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Votre Volet Roulant est en Panne ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Ne perdez plus de temps. Contactez-nous maintenant pour un diagnostic gratuit et une intervention rapide par un technicien certifié.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Demander un Devis Gratuit <ArrowRight className="h-5 w-5" /></Link>
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

export default ReparationVoletsPage;
