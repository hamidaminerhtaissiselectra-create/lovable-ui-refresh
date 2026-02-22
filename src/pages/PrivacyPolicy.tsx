import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Politique de Confidentialité | Répar'Action Volets";
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
              <span>Politique de Confidentialité</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Politique de Confidentialité
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2>1. Introduction</h2>
              <p>
                Répar'Action Volets (ci-après « nous », « notre » ou « l'entreprise ») s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et sauvegardons vos informations lorsque vous visitez notre site web.
              </p>
            </div>

            <div>
              <h2>2. Informations que nous Collectons</h2>
              <p>Nous collectons les informations suivantes :</p>
              <ul>
                <li><strong>Informations personnelles :</strong> Nom, prénom, adresse email, numéro de téléphone, adresse postale</li>
                <li><strong>Informations de navigation :</strong> Adresse IP, type de navigateur, pages visitées, durée de visite</li>
                <li><strong>Informations de formulaire :</strong> Données saisies dans nos formulaires de devis ou de contact</li>
                <li><strong>Cookies :</strong> Identifiants stockés sur votre appareil pour améliorer votre expérience</li>
              </ul>
            </div>

            <div>
              <h2>3. Base Légale du Traitement</h2>
              <p>
                Nous traitons vos données personnelles sur la base de :
              </p>
              <ul>
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat (devis, intervention)</li>
                <li>Nos obligations légales</li>
                <li>Nos intérêts légitimes (amélioration du service, sécurité)</li>
              </ul>
            </div>

            <div>
              <h2>4. Utilisation de vos Données</h2>
              <p>Nous utilisons vos données pour :</p>
              <ul>
                <li>Répondre à vos demandes de devis et d'intervention</li>
                <li>Vous contacter pour confirmer les rendez-vous</li>
                <li>Envoyer des factures et des reçus</li>
                <li>Améliorer notre site et nos services</li>
                <li>Vous envoyer des informations marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            <div>
              <h2>5. Partage de vos Données</h2>
              <p>
                Nous ne partageons vos données personnelles qu'avec :
              </p>
              <ul>
                <li>Nos prestataires de services (hébergement, email, paiement)</li>
                <li>Les autorités légales si requis par la loi</li>
                <li>Nos partenaires commerciaux (avec votre consentement)</li>
              </ul>
              <p>
                Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </div>

            <div>
              <h2>6. Durée de Conservation</h2>
              <p>
                Nous conservons vos données personnelles aussi longtemps que nécessaire pour :
              </p>
              <ul>
                <li>Fournir nos services</li>
                <li>Respecter nos obligations légales</li>
                <li>Résoudre les litiges</li>
              </ul>
              <p>
                Généralement, vos données sont conservées pendant 3 ans après votre dernière interaction avec nous.
              </p>
            </div>

            <div>
              <h2>7. Vos Droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d'accès :</strong> Accéder à vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                <li><strong>Droit à l'oubli :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              </ul>
            </div>

            <div>
              <h2>8. Exercer vos Droits</h2>
              <p>
                Pour exercer vos droits, veuillez nous contacter à :
              </p>
              <p>
                Email : contact@reparaction-volets.fr<br />
                Adresse : 62 Rue Emile Zola, 77610 Fontenay-Trésigny, FRANCE
              </p>
              <p>
                Nous traiterons votre demande dans un délai de 30 jours.
              </p>
            </div>

            <div>
              <h2>9. Sécurité des Données</h2>
              <p>
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification ou la destruction. Cependant, aucune transmission sur Internet n'est 100% sécurisée.
              </p>
            </div>

            <div>
              <h2>10. Cookies et Technologies de Suivi</h2>
              <p>
                Notre site utilise des cookies pour :
              </p>
              <ul>
                <li>Mémoriser vos préférences</li>
                <li>Analyser l'utilisation du site (Google Analytics)</li>
                <li>Améliorer votre expérience utilisateur</li>
              </ul>
              <p>
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2>11. Modifications de cette Politique</h2>
              <p>
                Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.
              </p>
            </div>

            <div>
              <h2>12. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :
              </p>
              <p>
                Email : contact@reparaction-volets.fr<br />
                Téléphone : 06 03 20 59 67<br />
                Adresse : 62 Rue Emile Zola, 77610 Fontenay-Trésigny, FRANCE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
