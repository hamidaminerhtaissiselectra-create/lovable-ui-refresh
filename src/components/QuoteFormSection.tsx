import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wrench, RefreshCcw, GlassWater, Cpu, LayoutGrid, AlertTriangle, ArrowRight, ArrowLeft, CheckCircle2, ClipboardList, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "reparation", icon: Wrench, label: "Réparation de volets", color: "border-accent bg-accent/5 text-accent" },
  { id: "remplacement", icon: RefreshCcw, label: "Remplacement de volets", color: "border-primary bg-primary/5 text-primary" },
  { id: "vitrerie", icon: GlassWater, label: "Vitrerie & Vitrage", color: "border-emerald-500 bg-emerald-500/5 text-emerald-600" },
  { id: "motorisation", icon: Cpu, label: "Motorisation & Domotique", color: "border-violet-500 bg-violet-500/5 text-violet-600" },
  { id: "installation", icon: LayoutGrid, label: "Installation complète", color: "border-amber-500 bg-amber-500/5 text-amber-600" },
  { id: "urgence", icon: AlertTriangle, label: "Dépannage urgent", color: "border-destructive bg-destructive/5 text-destructive" },
];

const urgencyOptions = [
  { id: "normal", label: "Sous 1 semaine", desc: "Planification classique" },
  { id: "rapide", label: "Sous 48h", desc: "Intervention rapide" },
  { id: "urgent", label: "Aujourd'hui / Demain", desc: "Urgence immédiate" },
];

const QuoteFormSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [urgency, setUrgency] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const canNext = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return urgency !== "";
    if (step === 3) return name && phone && email;
    return false;
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "✅ Demande envoyée !", description: "Nous vous recontactons sous 24h avec votre devis personnalisé." });
      setStep(1);
      setSelectedServices([]);
      setUrgency("");
      setDetails("");
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
    }, 1200);
  };

  const steps = [
    { num: 1, label: "Service", icon: ClipboardList },
    { num: 2, label: "Détails", icon: Settings },
    { num: 3, label: "Contact", icon: User },
  ];

  return (
    <section id="devis" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20 mb-4">
            Devis Gratuit en 2 minutes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Obtenez votre devis personnalisé
          </h2>
          <p className="text-muted-foreground">Répondez à quelques questions pour recevoir une estimation adaptée à vos besoins.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          {/* Progress steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${step >= s.num ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                  {step > s.num ? <CheckCircle2 className="h-4 w-4" /> : <s.icon className="h-4 w-4" />}
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">{s.num}</span>
                </div>
                {i < steps.length - 1 && <div className={`w-8 h-0.5 ${step > s.num ? "bg-accent" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 card-shadow border border-border min-h-[320px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">De quel service avez-vous besoin ?</h3>
                  <p className="text-sm text-muted-foreground mb-6">Sélectionnez un ou plusieurs services.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map((s) => {
                      const selected = selectedServices.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all ${selected ? s.color + " border-current" : "border-border hover:border-muted-foreground/30 bg-background"}`}
                        >
                          <s.icon className={`h-5 w-5 shrink-0 ${selected ? "" : "text-muted-foreground"}`} />
                          <span className={`text-sm font-medium ${selected ? "" : "text-foreground"}`}>{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">Détails de votre demande</h3>
                  <p className="text-sm text-muted-foreground mb-6">Précisez l'urgence et décrivez votre besoin.</p>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">Urgence de l'intervention</label>
                    <div className="grid grid-cols-3 gap-3">
                      {urgencyOptions.map((o) => (
                        <button
                          key={o.id}
                          onClick={() => setUrgency(o.id)}
                          className={`p-3 rounded-lg border-2 text-center transition-all ${urgency === o.id ? "border-accent bg-accent/5" : "border-border hover:border-muted-foreground/30"}`}
                        >
                          <div className={`text-sm font-semibold ${urgency === o.id ? "text-accent" : "text-foreground"}`}>{o.label}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{o.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Description du problème (optionnel)</label>
                    <Textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Décrivez votre situation : type de volet, panne constatée, dimensions..." rows={4} className="bg-background" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">Vos coordonnées</h3>
                  <p className="text-sm text-muted-foreground mb-6">Pour vous recontacter avec votre devis personnalisé.</p>

                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jean Dupont" className="bg-background" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone *</label>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} required type="tel" placeholder="06 XX XX XX XX" className="bg-background" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="votre@email.com" className="bg-background" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Ville / Code postal</label>
                        <Input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Fontenay-Trésigny (77)" className="bg-background" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    Sans engagement
                    <span className="mx-1">•</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    Réponse sous 24h
                    <span className="mx-1">•</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    Données sécurisées
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep(step - 1)} className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Retour
                </Button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <Button onClick={() => setStep(step + 1)} disabled={!canNext()} className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Continuer <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canNext() || loading} className="bg-hero-gradient text-primary-foreground gap-2 font-semibold">
                  {loading ? "Envoi en cours..." : "Envoyer ma demande"} {!loading && <ArrowRight className="h-4 w-4" />}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
