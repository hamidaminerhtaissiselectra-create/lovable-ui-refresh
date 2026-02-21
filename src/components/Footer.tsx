import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="font-display font-bold text-lg mb-4">Répar'Action Volets</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Spécialiste de la réparation et de l'installation de volets roulants en France. Qualité, rapidité et garantie.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Réparation de volets</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Remplacement de volets</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Vitrerie</a></li>
            <li><a href="#services" className="hover:text-primary-foreground transition-colors">Motorisation & Domotique</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#accueil" className="hover:text-primary-foreground transition-colors">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-primary-foreground transition-colors">À propos</a></li>
            <li><a href="#regions" className="hover:text-primary-foreground transition-colors">Zones d'intervention</a></li>
            <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> 62 Rue Emile Zola, 77610 Fontenay-Trésigny</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> 01 64 07 XX XX</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> contact@reparaction-volets.fr</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Répar'Action Volets. Tous droits réservés.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
