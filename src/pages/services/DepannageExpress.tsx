import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, CheckCircle2, ArrowRight, Phone, ChevronRight, Clock, Shield, AlertTriangle, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const situations = [
  { title: "Volet roulant bloqué en position ouverte", desc: "Votre volet ne descend plus et votre sécurité est compromise ? Nous intervenons en urgence pour débloquer votre volet et rétablir la fermeture. Les causes les plus fréquentes : lame sortie du rail, moteur en panne ou sangle cassée.", urgence: true },
  { title: "Volet roulant bloqué en position fermée", desc: "Impossible d'ouvrir votre volet ? Cela peut être lié à un problème de fin de course, un moteur grippé ou un axe d'enroulement cassé. Notre technicien identifie rapidement l'origine de la panne pour vous redonner l'accès à la lumière.", urgence: true },
  { title: "Moteur de volet en panne soudaine", desc: "Le moteur de votre volet électrique ne répond plus du tout ? Cela peut être dû à un condensateur défaillant, un problème de câblage ou une surchauffe. Nous disposons des pièces de remplacement en stock pour une réparation rapide.", urgence: false },
  { title: "Vitre cassée (bris de glace)", desc: "Suite à un cambriolage, un accident ou des intempéries, votre vitre est brisée et votre domicile n'est plus sécurisé. Nous mettons en sécurité immédiatement (panneau provisoire) puis remplaçons le vitrage définitivement.", urgence: true },
  { title: "Volet qui fait un bruit anormal", desc: "Grincements, claquements ou vibrations inhabituelles ? Ne laissez pas le problème s'aggraver. Un diagnostic rapide permet souvent de résoudre le problème avec un simple réglage ou le remplacement d'une pièce d'usure.", urgence: false },
  { title: "Télécommande ou interrupteur HS", desc: "Votre volet ne répond plus à la commande ? Avant de penser au moteur, c'est souvent un problème de télécommande, de récepteur ou d'interrupteur. Un diagnostic précis évite des réparations inutiles.", urgence: false },
];

const engagements = [
  { icon: Clock, title: "Intervention le jour même", desc: "Pour les urgences de sécurité (volet bloqué ouvert, vitre cassée), nous nous engageons à intervenir le jour même en Île-de-France, sous réserve de disponibilité." },
  { icon: Shield, title: "Diagnostic offert", desc: "Pas de frais de déplacement, pas de frais de diagnostic. Vous ne payez que si vous acceptez le devis de réparation. Transparence totale." },
  { icon: Wrench, title: "Pièces en stock", desc: "Nos véhicules d'intervention sont équipés des pièces de rechange les plus courantes. 95% des pannes sont résolues au premier passage." },
  { icon: AlertTriangle, title: "Disponible 7j/7", desc: "Urgences de sécurité traitées 7 jours sur 7, y compris les week-ends et jours fériés. Un technicien est toujours joignable." },
];

const DepannageExpressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dépannage Express de Volets Roulants | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Dépannage Express</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <Zap className="h-3.5 w-3.5" /> Intervention rapide
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Dépannage Express Volets Roulants : Intervention Jour Même
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Volet bloqué ? Moteur en panne ? Vitre cassée ? Notre service de dépannage express intervient dans les plus brefs délais pour rétablir la sécurité et le confort de votre habitat. Disponible 7j/7, diagnostic gratuit, pièces en stock.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> Appeler Maintenant</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nos Engagements Dépannage Express</h2>
            <p className="text-muted-foreground">Un service d'urgence fiable, transparent et efficace — c'est la promesse Répar'Action Volets.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <e.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2 text-sm">{e.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Les Situations que Nous Traitons en Urgence</h2>
            <p className="text-muted-foreground">Quelle que soit la panne, nous avons la solution pour la résoudre rapidement.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {situations.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="flex items-center gap-2 mb-3">
                  {s.urgence && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-destructive/10 text-destructive border border-destructive/20">URGENT</span>}
                  <h3 className="font-display font-bold text-foreground text-sm">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus urgence */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Comment Fonctionne le Dépannage Express ?</h2>
            <div className="space-y-6">
              {[
                { num: "1", title: "Appelez-nous", desc: "Contactez-nous au 06 03 20 59 67. Un technicien évalue votre situation par téléphone et vous donne une première estimation." },
                { num: "2", title: "Intervention rapide", desc: "Un technicien équipé se déplace chez vous dans les meilleurs délais. Intervention possible le jour même pour les urgences de sécurité." },
                { num: "3", title: "Diagnostic sur place", desc: "Le technicien identifie précisément la panne et vous communique un devis clair et détaillé avant toute intervention." },
                { num: "4", title: "Réparation immédiate", desc: "Avec les pièces en stock dans notre véhicule, la réparation est effectuée immédiatement dans 95% des cas. Votre volet est remis en service." },
              ].map((step, i) => (
                <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0 font-display font-extrabold text-lg shadow-lg shadow-accent/20">{step.num}</div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold mb-4">Besoin d'un Dépannage Urgent ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">N'attendez plus — appelez-nous maintenant. Un technicien qualifié intervient dans les plus brefs délais pour résoudre votre problème.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <Link to="/#devis">Formulaire en ligne <ArrowRight className="h-5 w-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DepannageExpressPage;
