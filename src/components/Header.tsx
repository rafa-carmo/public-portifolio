'use client'

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { US } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { useTranslations } from "next-intl";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const header = useTranslations('Header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-foreground font-display">
              Rafael <span className="text-primary">Portfolio</span>
            </a>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {header("home")}
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {header("services")}
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {header("projects")}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {header("contact")}
            </a>
            <div className="flex items-center space-x-2">
              <a href="/pt-BR" title="Português" aria-label="Português">
                  <BR className="w-5 h-5" />
              </a>
              <a href="/en" title="English" aria-label="English">
                  <US className="w-5 h-5" />
              </a>
            </div>
            <a href="#contact">
              <Button size="sm" className="ml-4">
                {header("cta")}
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#inicio"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {header("home")}
            </a>
            <a
              href="#servicos"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {header("services")}
            </a>
            <a
              href="#projetos"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {header("projects")}
            </a>
            <a
              href="#contato"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {header("contact")}
            </a>
            <div className="px-3 py-3">
              <Button className="w-full">
                {header("cta")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
