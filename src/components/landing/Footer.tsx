import leMatchLogo from "@/assets/lematch-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/10 bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={leMatchLogo}
              alt="Logo Le Match"
              className="h-11 w-11 object-contain"
            />
            <span className="font-heading text-xl font-bold text-background">Le Match</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-body text-sm text-background/70 transition-colors hover:text-background">Confidentialité</a>
            <a href="#" className="font-body text-sm text-background/70 transition-colors hover:text-background">Conditions</a>
            <a href="#" className="font-body text-sm text-background/70 transition-colors hover:text-background">Contact</a>
          </div>
          <p className="font-body text-sm text-background/70">
            © 2026 Le Match. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
