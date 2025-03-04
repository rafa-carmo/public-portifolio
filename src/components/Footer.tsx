
'use client'
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BR, US } from "country-flag-icons/react/3x2";
import { useTranslations } from "next-intl";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footer_t = useTranslations("Footer");

  return (
    <footer className="bg-background py-16 border-t">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-2xl font-bold text-foreground font-display mb-2 inline-block">
              Portfolio <span className="text-primary">Rafael</span>
            </a>
            <p className="text-muted-foreground max-w-md mt-2">
              {footer_t("description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:contato@seuemail.com"
                className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            {footer_t("copy", {year: new Date().getFullYear()})}

          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Português" title="Português">
              <BR className="w-5 h-5" />
            </a>
            <a href="/?lang=en-US" className="text-muted-foreground hover:text-primary transition-colors" aria-label="English" title="English">
              <US className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hidden">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hidden">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
