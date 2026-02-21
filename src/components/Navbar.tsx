import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Zones d'intervention", href: "#regions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#accueil" className="font-display font-bold text-xl text-primary">
          Répar'Action <span className="text-accent">Volets</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-muted-foreground hover:text-primary" : "text-foreground/80 hover:text-primary"}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button size="sm" variant="outline" className="gap-2 border-accent/30 text-accent hover:bg-accent/5">
            <Phone className="h-4 w-4" /> 01 64 07 XX XX
          </Button>
          <Button size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#devis">Devis Gratuit</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button size="sm" variant="outline" className="w-full gap-2 border-accent/30 text-accent">
              <Phone className="h-4 w-4" /> 01 64 07 XX XX
            </Button>
            <Button size="sm" asChild className="w-full bg-accent text-accent-foreground">
              <a href="#devis" onClick={() => setOpen(false)}>Devis Gratuit</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
