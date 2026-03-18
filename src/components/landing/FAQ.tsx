import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment l'app choisit mes correspondances ?",
    a: "Le Match analyse tes centres d'intérêt et hobbies pour te proposer des profils compatibles. Plus tu précises tes passions, plus les suggestions sont pertinentes.",
  },
  {
    q: "Le match mène à quoi ?",
    a: "Quand deux personnes se « matchent », elles passent directement en conversation. Échanges textuels, vocaux — tout est pensé pour faciliter la discussion.",
  },
  {
    q: "Je peux publier et interagir ?",
    a: "Absolument ! Tu peux publier du contenu, liker, commenter et utiliser des hashtags. Explore aussi les tendances pour découvrir de nouvelles communautés.",
  },
  {
    q: "C'est sécurisé ?",
    a: "Oui. Authentification par token, protections serveur (rate limiting, headers sécurisés) et gestion de la disponibilité avec un écran dédié côté app.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-primary font-body py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-body pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
