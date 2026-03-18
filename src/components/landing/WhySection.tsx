import { motion } from "framer-motion";
import { Heart, Zap, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Connexions authentiques",
    description: "Fini le swipe au hasard. Découvre des profils qui partagent vraiment tes passions.",
  },
  {
    icon: Zap,
    title: "Conversations faciles",
    description: "Plus besoin de chercher un sujet. Vos hobbies communs lancent la discussion.",
  },
  {
    icon: Users,
    title: "Communauté vibrante",
    description: "Explore un feed riche : publications, likes, commentaires et hashtags tendances.",
  },
  {
    icon: Shield,
    title: "Sécurisé & fiable",
    description: "Authentification robuste, protections serveur et expérience toujours disponible.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pourquoi <span className="text-gradient">Le Match</span> ?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-body">
            Une app pensée pour créer des discussions plus authentiques, plus faciles à lancer, 
            et guidées par ce que tu aimes vraiment.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={item}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
