import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    id: "entretien-volets",
    title: "Guide Complet : Entretien et Maintenance des Volets Roulants",
    excerpt: "Découvrez les meilleures pratiques pour maintenir vos volets roulants en parfait état. Un entretien régulier prolonge la durée de vie de vos volets et garantit un fonctionnement optimal.",
    date: "22 février 2026",
    author: "Répar'Action Volets",
    category: "Entretien",
    image: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=800&h=400&fit=crop",
    slug: "entretien-volets",
    content: `
## Pourquoi l'entretien des volets est crucial ?

Un volet roulant bien entretenu dure plus longtemps et fonctionne de manière optimale. L'entretien régulier prévient les pannes coûteuses et garantit votre sécurité.

### Nettoyage régulier

Le nettoyage des lames est la première étape. Utilisez un chiffon humide pour enlever la poussière et les débris. Pour les volets très sales, une brosse douce peut être utilisée.

### Lubrification des pièces mobiles

Les coulisses et les axes d'enroulement doivent être lubrifiés régulièrement avec un lubrifiant adapté. Cela réduit les frottements et les bruits.

### Vérification des joints et des sceaux

Les joints d'étanchéité doivent être inspectés régulièrement pour éviter les infiltrations d'eau et les appels de froid.

### Contrôle du moteur (si motorisé)

Pour les volets motorisés, vérifiez régulièrement que le moteur fonctionne correctement et sans bruit anormal.

## Fréquence d'entretien recommandée

- **Nettoyage** : Une fois par mois
- **Lubrification** : Deux fois par an
- **Inspection complète** : Une fois par an

Chez **Répar'Action Volets**, nous proposons des contrats d'entretien personnalisés pour assurer la longévité de vos installations.
    `
  },
  {
    id: "somfy-vs-bubendorff",
    title: "Somfy vs Bubendorff : Comparatif Complet des Motorisations",
    excerpt: "Quelle marque choisir pour motoriser vos volets ? Découvrez les forces et faiblesses de Somfy et Bubendorff dans ce guide détaillé.",
    date: "20 février 2026",
    author: "Répar'Action Volets",
    category: "Motorisation",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=400&fit=crop",
    slug: "somfy-vs-bubendorff",
    content: `
## Somfy : Le leader mondial

**Somfy** est le leader incontesté du marché avec une gamme complète de solutions de motorisation.

### Avantages de Somfy
- Écosystème TaHoma très complet
- Compatibilité avec Google Home, Alexa, Apple HomeKit
- Excellente disponibilité des pièces de rechange
- Support technique réactif

### Inconvénients de Somfy
- Prix généralement plus élevé
- Complexité de l'installation pour les non-professionnels

## Bubendorff : L'expertise française

**Bubendorff** est un fabricant français réputé, spécialiste des solutions innovantes.

### Avantages de Bubendorff
- Solutions solaires très performantes
- Moteurs monoblocs innovants
- Qualité premium française
- Excellent rapport qualité/prix

### Inconvénients de Bubendorff
- Moins de compatibilité avec les assistants vocaux
- Réseau de distribution plus limité

## Quel choix pour votre situation ?

**Choisissez Somfy si** : Vous cherchez une solution complète avec domotique avancée et assistants vocaux.

**Choisissez Bubendorff si** : Vous préférez une solution française de qualité premium avec un excellent rapport qualité/prix.

Chez **Répar'Action Volets**, nous installons et maintenons les deux marques avec expertise. Contactez-nous pour une recommandation personnalisée.
    `
  },
  {
    id: "guide-motorisation",
    title: "Guide Complet : Motoriser vos Volets Roulants - Avantages et Processus",
    excerpt: "La motorisation de vos volets roulants offre confort, sécurité et économies d'énergie. Découvrez comment et pourquoi motoriser vos volets.",
    date: "18 février 2026",
    author: "Répar'Action Volets",
    category: "Motorisation",
    image: "https://images.unsplash.com/photo-1581092162562-40038f56386a?w=800&h=400&fit=crop",
    slug: "guide-motorisation",
    content: `
## Pourquoi motoriser vos volets roulants ?

La motorisation offre de nombreux avantages au-delà du simple confort.

### Confort quotidien

Fini les efforts pour ouvrir et fermer vos volets. Un simple clic suffit. Programmez l'ouverture automatique le matin et la fermeture le soir.

### Sécurité renforcée

Simulez votre présence en fermant vos volets à heures régulières, même en vacances. Cela dissuade les cambrioleurs.

### Économies d'énergie

Fermez vos volets automatiquement au coucher du soleil pour réduire les appels de froid en hiver et les apports de chaleur en été.

### Accessibilité

Pour les personnes à mobilité réduite, la motorisation rend les volets facilement accessibles.

## Types de motorisation disponibles

### Motorisation filaire
- Prix : À partir de 200€/volet
- Avantages : Fiable, économique
- Inconvénients : Nécessite du câblage

### Motorisation radio
- Prix : À partir de 300€/volet
- Avantages : Flexible, sans câblage
- Inconvénients : Piles à changer

### Motorisation solaire
- Prix : À partir de 400€/volet
- Avantages : Écologique, autonome
- Inconvénients : Moins performante en hiver

### Motorisation connectée
- Prix : À partir de 450€/volet
- Avantages : Contrôle smartphone, assistants vocaux
- Inconvénients : Plus coûteuse

## Processus d'installation

1. **Diagnostic** : Évaluation de votre configuration
2. **Devis** : Proposition personnalisée
3. **Installation** : Intervention rapide (1-2 heures par volet)
4. **Configuration** : Mise en place des automatismes
5. **Formation** : Explication du fonctionnement

Chez **Répar'Action Volets**, nous gérons l'intégralité du processus. Contactez-nous pour un devis gratuit.
    `
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog Expert Volets - Conseils & Guides | Répar'Action Volets";
    
    // Schema.org BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://reparaction-volets.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://reparaction-volets.fr/blog"
        }
      ]
    };

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    return () => {
      document.head.removeChild(scriptBreadcrumb);
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
              <span>Blog Expert</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Blog Expert Volets & Vitrerie
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Conseils professionnels, guides d'entretien, comparatifs de marques et actualités du secteur. Restez informé sur les meilleures pratiques pour vos volets roulants et votre vitrerie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl overflow-hidden border border-accent/10 card-shadow hover:card-shadow-hover transition-all"
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {article.author}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold text-sm"
                  >
                    Lire l'article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Besoin d'une intervention ?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Nos experts sont disponibles pour vous conseiller et intervenir rapidement. Contactez-nous dès maintenant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 rounded-full">
                <Link to="/#devis">Demander un Devis <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/30 text-primary hover:bg-primary/5 gap-2 rounded-full">
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

export default BlogPage;
