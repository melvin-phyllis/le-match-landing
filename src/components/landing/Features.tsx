import { motion } from "framer-motion";
import { Compass, MessageSquare, Rss, Hash } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Découverte par centre d'intérêt",
    description: "Recherche et découverte de profils basée sur tes hobbies. Explore une communauté qui partage tes passions.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageSquare,
    title: "Match & conversations",
    description: "Quand tu « matches », tu passes directement en discussion. Des échanges textuels et vocaux, naturels et fluides.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Rss,
    title: "Feed & contenu",
    description: "Publie, engage (likes), commente et utilise des hashtags pour partager tes moments et inspirations.",
    color: "bg-le-match-orange/10 text-le-match-orange",
  },
  {
    icon: Hash,
    title: "Tendances & hashtags",
    description: "Explore les sujets qui font vibrer la communauté. Suis les tendances et découvre de nouvelles passions.",
    color: "bg-le-match-brown/10 text-le-match-brown",
  },
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Aperçu des <span className="text-gradient">fonctionnalités</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow group"
            >
              <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
