import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, CheckCircle2, ArrowRight, ChevronRight, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Qui Sommes-Nous ? | Répar'Action Volets - Experts depuis 10 ans";
    
    // Schema.org Organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Répar'Action Volets",
      "url": "https://reparaction-volets.fr",
      "logo": "https://reparaction-volets.fr/logo.png",
      "description": "Expert en réparation, installation et motorisation de volets roulants depuis plus de 10 ans. Présent à Paris et dans toute la France.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "62 Rue Emile Zola",
        "addressLocality": "Fontenay-Trésigny",
        "postalCode": "77610",
        "addressCountry": "FR"
      },
      "telephone": "+33603205967",
      "email": "contact@reparaction-volets.fr",
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "sameAs": [
        "https://www.facebook.com/reparactionvolets",
        "https://www.google.com/maps/place/Répar'Action+Volets"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5"
      }
    };

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.innerHTML = JSON.stringify(organizationSchema);
    document.head.appendChild(scriptOrg);

    return () => {
      document.head.removeChild(scriptOrg);
    };
  }, []);

  return (
    <main className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Accueil</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Qui Sommes-Nous</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Qui Sommes-Nous ? Votre Expert en Volets depuis 10 ans
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Répar'Action Volets est une entreprise spécialisée dans la réparation, l'installation et la motorisation de volets roulants. Depuis plus de 10 ans, nous servons les clients à Paris et dans toute la France avec expertise et professionnalisme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise & Autorité (E-E-A-T) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Notre Expertise & Autorité</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 border border-accent/10 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="h-6 w-6 text-accent" />
                  <h3 className="font-display font-bold text-foreground text-lg">10+ ans d'expérience</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Depuis plus de 10 ans, nous intervenons sur des milliers de volets roulants. Notre expérience nous permet de diagnostiquer et résoudre rapidement tout type de panne.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-accent/10 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-accent" />
                  <h3 className="font-display font-bold text-foreground text-lg">Certifications professionnelles</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nos techniciens sont certifiés RGE (Reconnu Garant de l'Environnement) et Qualibat. Nous respectons les normes les plus strictes du secteur.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-accent/10 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                  <h3 className="font-display font-bold text-foreground text-lg">Intervention rapide</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nous intervenons sous 48 heures en France. En cas d'urgence (bris de glace, volet bloqué), nous nous déplaçons le jour même.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-accent/10 card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-accent" />
                  <h3 className="font-display font-bold text-foreground text-lg">500+ clients satisfaits</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nos clients nous font confiance. Note moyenne : 4.9/5 étoiles. Garantie décennale sur toutes nos installations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Nos Valeurs</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Professionnalisme",
                  desc: "Chaque intervention est réalisée avec rigueur et respect des normes. Nos techniciens sont formés aux dernières techniques."
                },
                {
                  title: "Transparence",
                  desc: "Devis clair et détaillé avant toute intervention. Pas de frais cachés. Communication honnête sur les délais et les coûts."
                },
                {
                  title: "Qualité",
                  desc: "Nous utilisons uniquement des pièces de qualité et des matériaux durables. Garantie 2 ans sur les réparations, 10 ans sur les installations."
                },
                {
                  title: "Réactivité",
                  desc: "Disponibles 7j/7 pour les urgences. Réponse rapide à vos demandes. Intervention dans les meilleurs délais."
                }
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Nos Certifications</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "RGE", desc: "Reconnu Garant de l'Environnement" },
                { name: "Qualibat", desc: "Certification qualité bâtiment" },
                { name: "Garantie 10 ans", desc: "Assurance décennale" },
                { name: "Assurance RC", desc: "Responsabilité civile complète" }
              ].map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-accent/10 card-shadow text-center"
                >
                  <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground">{cert.desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Faites Confiance à l'Expertise</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contactez Répar'Action Volets pour bénéficier de 10 ans d'expertise et de professionnalisme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full">
                <a href="tel:0603205967">06 03 20 59 67</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUsPage;
