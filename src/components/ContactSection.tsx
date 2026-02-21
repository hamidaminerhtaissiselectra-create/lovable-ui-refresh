import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Demandez votre devis gratuit
          </h2>
          <p className="text-muted-foreground">Contactez-nous pour toute demande d'information ou de devis. Nous vous répondons sous 24h.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-lg p-8 card-shadow border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet</label>
                <Input required placeholder="Votre nom" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                <Input required type="tel" placeholder="06 XX XX XX XX" className="bg-background" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <Input required type="email" placeholder="votre@email.com" className="bg-background" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Service souhaité</label>
              <select required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground">
                <option value="">Sélectionnez un service</option>
                <option>Réparation de volets roulants</option>
                <option>Remplacement de volets</option>
                <option>Vitrerie & Remplacement de vitrage</option>
                <option>Motorisation & Domotique</option>
                <option>Installation complète</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <Textarea required placeholder="Décrivez votre besoin..." rows={4} className="bg-background" />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-hero-gradient text-primary-foreground font-semibold">
              {loading ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: MapPin, title: "Adresse", text: "62 Rue Emile Zola, 77610 Fontenay-Trésigny" },
              { icon: Phone, title: "Téléphone", text: "01 64 07 XX XX" },
              { icon: Mail, title: "Email", text: "contact@reparaction-volets.fr" },
              { icon: Clock, title: "Horaires", text: "Lun - Ven : 8h00 - 18h00 | Sam : 9h00 - 13h00" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-card rounded-lg p-5 card-shadow border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{item.title}</div>
                  <div className="text-muted-foreground text-sm mt-0.5">{item.text}</div>
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-lg overflow-hidden border border-border h-48">
              <iframe
                title="Localisation Répar'Action Volets"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.5!2d2.8755!3d48.7053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDQyJzE5LjEiTiAywrA1MiczMy4wIkU!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
