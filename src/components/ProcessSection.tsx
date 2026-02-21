import { motion } from "framer-motion";
import { Phone, ClipboardList, Calendar, Wrench, CheckCircle2, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: Phone, title: "Prise de Contact", desc: "Contactez-nous par téléphone, email ou via notre formulaire. Un conseiller vous répond sous 2 heures pour comprendre vos besoins." },
  { num: "02", icon: ClipboardList, title: "Diagnostic Gratuit", desc: "Nous analysons votre situation et réalisons un diagnostic précis. Vous recevez un devis détaillé et transparent sous 24h." },
  { num: "03", icon: Calendar, title: "Planification", desc: "Une fois le devis validé, nous planifions l'intervention à votre convenance. Nous nous adaptons à vos contraintes horaires." },
  { num: "04", icon: Wrench, title: "Intervention Experte", desc: "Nos artisans certifiés réalisent l'intervention avec soin. Travail propre, respect des lieux et finitions soignées." },
  { num: "05", icon: CheckCircle2, title: "Vérification & Garantie", desc: "Nous vérifions le bon fonctionnement de l'installation et vous remettons votre certificat de garantie décennale." },
  { num: "06", icon: Headphones, title: "Suivi & SAV", desc: "Bénéficiez d'un service après-vente réactif. Nous restons disponibles pour toute question ou ajustement." },
];

const ProcessSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-4">Notre Méthode</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Comment se déroule une intervention ?
        </h2>
        <p className="text-muted-foreground">De votre premier appel à la mise en service, découvrez notre processus éprouvé pour une réparation réussie.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative bg-card rounded-xl p-6 card-shadow border border-border hover:border-accent/30 transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-display font-extrabold text-accent/20 group-hover:text-accent/40 transition-colors">{s.num}</span>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-accent" />
              </div>
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
