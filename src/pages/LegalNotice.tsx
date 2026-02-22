import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalNoticePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mentions Légales | Répar'Action Volets";
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
              <span>Mentions Légales</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Mentions Légales
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-invert max-w-none">
            <h2>1. Informations Légales</h2>
            <p>
              <strong>Nom de l'entreprise :</strong> Répar'Action Volets<br />
              <strong>Forme juridique :</strong> SARL<br />
              <strong>Adresse :</strong> 62 Rue Emile Zola, 77610 Fontenay-Trésigny, FRANCE<br />
              <strong>Téléphone :</strong> 06 03 20 59 67<br />
              <strong>Email :</strong> contact@reparaction-volets.fr<br />
              <strong>SIRET :</strong> [À compléter]<br />
              <strong>Numéro de TVA :</strong> [À compléter]
            </p>

            <h2>2. Directeur de la Publication</h2>
            <p>
              Le directeur de la publication est le gérant de l'entreprise Répar'Action Volets.
            </p>

            <h2>3. Hébergement du Site</h2>
            <p>
              Ce site est hébergé par [Nom de l'hébergeur], situé à [Adresse de l'hébergeur].
            </p>

            <h2>4. Propriété Intellectuelle</h2>
            <p>
              Tous les éléments du site (textes, images, logos, graphiques) sont la propriété exclusive de Répar'Action Volets ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>

            <h2>5. Responsabilité</h2>
            <p>
              Répar'Action Volets s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne pouvons pas garantir l'absence d'erreurs ou d'omissions. L'utilisateur assume l'entière responsabilité de l'utilisation des informations fournies.
            </p>

            <h2>6. Limitation de Responsabilité</h2>
            <p>
              Répar'Action Volets ne peut être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site, y compris les pertes de données, les interruptions de service ou les erreurs.
            </p>

            <h2>7. Liens Externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. Répar'Action Volets n'est pas responsable du contenu de ces sites externes et ne les approuve pas nécessairement.
            </p>

            <h2>8. Droit d'Accès et de Rectification</h2>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à contact@reparaction-volets.fr.
            </p>

            <h2>9. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer, vous acceptez l'utilisation de cookies. Vous pouvez modifier les paramètres de vos cookies dans les paramètres de votre navigateur.
            </p>

            <h2>10. Modifications des Mentions Légales</h2>
            <p>
              Répar'Action Volets se réserve le droit de modifier ces mentions légales à tout moment. Les modifications seront publiées sur cette page.
            </p>

            <h2>11. Loi Applicable</h2>
            <p>
              Ces mentions légales sont régies par la loi française. Tout litige sera soumis aux tribunaux compétents de France.
            </p>

            <h2>12. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, veuillez nous contacter :<br />
              Email : contact@reparaction-volets.fr<br />
              Téléphone : 06 03 20 59 67
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default LegalNoticePage;
