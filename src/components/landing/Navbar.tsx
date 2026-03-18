import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import leMatchLogo from "@/assets/lematch-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={leMatchLogo}
            alt="Logo Le Match"
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-xl font-bold text-foreground">Le Match</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#why" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Pourquoi ?</a>
          <a href="#how" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Comment</a>
          <a href="#features" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Fonctionnalités</a>
          <a href="#faq" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</a>
          <button className="rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Télécharger
          </button>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              <a href="#why" onClick={() => setOpen(false)} className="font-body font-medium text-muted-foreground">Pourquoi ?</a>
              <a href="#how" onClick={() => setOpen(false)} className="font-body font-medium text-muted-foreground">Comment</a>
              <a href="#features" onClick={() => setOpen(false)} className="font-body font-medium text-muted-foreground">Fonctionnalités</a>
              <a href="#faq" onClick={() => setOpen(false)} className="font-body font-medium text-muted-foreground">FAQ</a>
              <button className="w-fit rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground">
                Télécharger
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
