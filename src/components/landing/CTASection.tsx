import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent blur-[96px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
            Prêt à trouver des connexions <span className="text-primary">authentiques</span> ?
          </h2>
          <p className="text-lg text-slate-400 font-body mb-10 leading-relaxed">
            Le Match est l'application qui relie les gens par leurs passions. 
            Une connexion authentique commence par ce que tu aimes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold font-body hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
              Télécharger l'app
            </button>
            <button className="border-2 border-cream/30 text-cream px-8 py-4 rounded-full text-lg font-semibold font-body hover:bg-cream/10 transition-colors">
              Rejoindre la communauté
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
