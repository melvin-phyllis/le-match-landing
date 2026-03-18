import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-cream min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary font-body">Disponible bientôt</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6">
              Partage tes passions.<br />
              <span className="text-gradient">Fais un match.</span><br />
              Discute en audio.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mb-8 leading-relaxed font-body">
              Le Match relie les gens par leurs passions. Découvre des profils compatibles, 
              fais un match et lance la conversation facilement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold font-body hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Télécharger l'app
              </button>
              <a
                href="#how"
                className="rounded-full border-2 border-foreground px-8 py-4 text-lg font-semibold font-body text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroMockup}
              alt="Le Match - Application de connexion par passions"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
