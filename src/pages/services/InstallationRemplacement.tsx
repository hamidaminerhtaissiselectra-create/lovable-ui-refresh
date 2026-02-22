import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RefreshCcw, CheckCircle2, ArrowRight, Phone, Shield, Home, ChevronRight, Thermometer, Volume2, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const avantages = [
  { icon: Thermometer, title: "Isolation thermique renforcée", desc: "Les volets roulants modernes en aluminium offrent une isolation thermique jusqu'à 25% supérieure aux anciens modèles, réduisant significativement vos factures de chauffage et de climatisation." },
  { icon: Volume2, title: "Isolation phonique optimale", desc: "Le double paroi en aluminium avec mousse polyuréthane injectée absorbe les bruits extérieurs. Idéal pour les habitations situées en zone urbaine ou à proximité d'axes routiers." },
  { icon: Shield, title: "Sécurité anti-effraction", desc: "Les volets roulants neufs intègrent des systèmes anti-relevage et des verrous automatiques qui renforcent considérablement la sécurité de votre domicile contre les tentatives d'intrusion." },
  { icon: Sun, title: "Gestion de la luminosité", desc: "Contrôlez précisément la lumière dans chaque pièce grâce à des lames orientables ou un réglage fin de la position du volet. Créez l'ambiance idéale à tout moment." },
];

const types = [
  { title: "Volets roulants en aluminium", desc: "Le choix le plus populaire. L'aluminium offre le meilleur rapport poids/résistance, une excellente isolation thermique grâce à la mousse polyuréthane injectée, et une durabilité exceptionnelle. Disponible dans plus de 200 coloris RAL pour s'adapter à toutes les façades.", points: ["Léger et résistant", "Isolation thermique et phonique", "200+ coloris disponibles", "Durée de vie 20+ ans"] },
  { title: "Volets roulants en PVC", desc: "Solution économique et performante, les volets en PVC offrent un bon niveau d'isolation et une grande facilité d'entretien. Ils sont particulièrement adaptés aux fenêtres de taille standard et aux budgets maîtrisés.", points: ["Prix accessible", "Entretien minimal", "Bonne isolation", "Résistance aux UV"] },
  { title: "Volets roulants en bois", desc: "Pour les amateurs de charme traditionnel. Le bois apporte une touche chaleureuse et authentique tout en offrant d'excellentes propriétés isolantes naturelles. Idéal pour les maisons de caractère ou les bâtiments classés.", points: ["Esthétique noble", "Isolation naturelle", "Éco-responsable", "Restauration possible"] },
];

const InstallationRemplacementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Installation & Remplacement de Volets Roulants | Répar'Action Volets";
  }, []);

  return (
    <main>
      <Navbar />
      
      <section className="pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Installation & Remplacement de Volets</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold border border-primary-foreground/20 mb-6">
              <RefreshCcw className="h-3.5 w-3.5" /> Fabrication sur-mesure
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Installation & Remplacement de Volets Roulants Sur-Mesure
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Transformez votre habitat avec des volets roulants neufs fabriqués sur-mesure. Aluminium, PVC ou bois — nous vous accompagnons du choix du matériau à la pose professionnelle, avec garantie décennale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 shadow-lg">
                <Link to="/#devis">Devis Gratuit Personnalisé <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                <a href="tel:0603205967"><Phone className="h-5 w-5" /> 06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi remplacer */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Pourquoi Installer ou Remplacer Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Les volets roulants jouent un rôle essentiel dans le <strong className="text-foreground">confort, la sécurité et la performance énergétique</strong> de votre habitation. Qu'il s'agisse d'une construction neuve ou d'une rénovation, l'installation de volets roulants modernes est un investissement qui se rentabilise rapidement grâce aux économies d'énergie réalisées.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si vos volets actuels sont vétustes, difficiles à manœuvrer ou mal isolés, leur remplacement vous permettra de bénéficier des dernières technologies en matière d'isolation, de motorisation et de sécurité. De plus, vous pourrez profiter d'aides financières comme <strong className="text-foreground">MaPrimeRénov'</strong> et le <strong className="text-foreground">crédit d'impôt</strong> grâce à notre certification RGE.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {avantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <a.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de volets */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Quel Matériau Choisir pour Vos Volets Roulants ?</h2>
            <p className="text-muted-foreground">Chaque matériau a ses avantages. Nous vous conseillons la solution la mieux adaptée à votre habitat et à votre budget.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {types.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border card-shadow">
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Aides Financières et Subventions Disponibles</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En tant qu'artisan certifié <strong className="text-foreground">RGE (Reconnu Garant de l'Environnement)</strong>, nos installations vous donnent accès à plusieurs aides financières pour réduire le coût de votre projet :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "MaPrimeRénov'", desc: "Jusqu'à 25€/m² pour l'installation de volets isolants, sous conditions de revenus." },
                { title: "TVA réduite à 5,5%", desc: "Pour les travaux d'amélioration énergétique dans les logements de plus de 2 ans." },
                { title: "Éco-prêt à taux zéro", desc: "Financement jusqu'à 30 000€ sans intérêts pour vos travaux de rénovation énergétique." },
                { title: "CEE (Certificats d'Économie d'Énergie)", desc: "Primes versées par les fournisseurs d'énergie pour vos travaux d'isolation." },
              ].map((aide) => (
                <div key={aide.title} className="bg-card rounded-xl p-5 border border-border card-shadow">
                  <h4 className="font-display font-bold text-foreground text-sm mb-2">{aide.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{aide.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Prêt à Transformer Vos Fenêtres ?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Obtenez un devis gratuit et personnalisé pour l'installation ou le remplacement de vos volets roulants. Garantie décennale incluse.</p>
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

export default InstallationRemplacementPage;
