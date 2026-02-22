import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Combien coûte la réparation d'un volet roulant ?", a: "Le coût dépend du type de panne et du modèle de volet. En moyenne, une réparation standard se situe entre 80€ et 250€. Nous réalisons un diagnostic gratuit et vous fournissons un devis détaillé avant toute intervention, sans surprise." },
  { q: "Intervenez-vous en urgence le week-end ?", a: "Oui, nous proposons un service d'intervention d'urgence 7j/7 pour les cas de volets bloqués en position ouverte, bris de glace ou problèmes de sécurité. Contactez-nous au 06 03 20 59 67 pour une intervention rapide." },
  { q: "Quels types de volets roulants réparez-vous ?", a: "Nous intervenons sur tous types de volets roulants : manuels (sangle, manivelle), électriques (filaires, radio), solaires, en aluminium, PVC ou bois. Quelle que soit la marque ou l'année d'installation." },
  { q: "La motorisation de volets existants est-elle possible ?", a: "Absolument ! Nous motorisons vos volets manuels existants sans travaux importants. L'opération prend généralement 1 à 2 heures par volet. Nous proposons des moteurs filaires, radio et connectés compatibles avec la domotique." },
  { q: "Proposez-vous une garantie sur vos interventions ?", a: "Oui, toutes nos interventions sont couvertes par une garantie. Les réparations sont garanties 2 ans pièces et main d'œuvre. Les installations neuves bénéficient d'une garantie décennale. Nous utilisons exclusivement des pièces de qualité." },
  { q: "Quelle est votre zone d'intervention ?", a: "Nous intervenons dans toute la France, avec une forte présence à Paris (tous les arrondissements), en Île-de-France et dans toutes les grandes villes : Lyon, Marseille, Toulouse, Bordeaux, Nantes, Strasbourg, etc. Notre réseau de techniciens qualifiés couvre l'ensemble du territoire." },
  { q: "Comment se déroule un remplacement de vitrage ?", a: "Après un diagnostic de vos besoins, nous prenons les mesures exactes et commandons le vitrage adapté (simple, double ou triple). L'installation est réalisée en 1 à 3 heures selon la complexité. Nous assurons aussi le nettoyage complet." },
];

const FAQSection = () => (
  <section className="py-20 bg-section-gradient">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-semibold border border-amber-500/20 mb-4">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          Questions Fréquentes
        </h2>
        <p className="text-muted-foreground">Retrouvez les réponses aux questions les plus posées sur nos services</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border card-shadow px-6">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground text-sm hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
