import { motion } from "framer-motion";
import { UserPlus, Search, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Crée ton profil & tes hobbies",
    description: "Définis tes centres d'intérêt et montre ce qui te passionne.",
  },
  {
    icon: Search,
    step: "02",
    title: "Découvre & match",
    description: "L'app te propose des profils compatibles selon tes passions.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Parle & construis le lien",
    description: "Conversations et interactions autour de vos sujets communs.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comment ça <span className="text-gradient">marche</span> ?
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto font-body">
            Trois étapes simples pour trouver ta prochaine connexion authentique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <s.icon className="w-9 h-9 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold font-body">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
