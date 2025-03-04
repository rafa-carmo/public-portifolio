
import { ArrowDownCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const default_values = useTranslations("Default")
  const hero_values = useTranslations("Hero")

  return (
    <section
      id="home"
      className="relative flex flex-col items-center py-20 md:min-h-0 min-h-screen overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animated-blur"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl opacity-60 animated-blur"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                {default_values("title")}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight" dangerouslySetInnerHTML={{
             __html: hero_values.markup("title", {important: (chunk) => `<span>${chunk}</span>`})
            }}>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              {hero_values("description")}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects">
                <Button size="lg" className="rounded-full px-8">
                  {hero_values("button_work")}
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  {hero_values("button_contact")}
                </Button>
              </a>
            </div>
            
            <div className="flex items-center space-x-5 pt-2">
              <a
                href="#"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative animate-fade-in-slow hidden md:block">
            <div className="aspect-square rounded-2xl overflow-hidden p-1">
              <div className="w-full h-full rounded-xl overflow-hidden ">
                <Image
                  width={1600}
                  height={1200}
                  src="/hero.svg"
                  alt="Illustration by Pixeltrue Ouch!"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Stats floating card */}
            <div className="glass-card p-4 rounded-xl absolute -bottom-5 -left-5 shadow-lg animate-slide-up delay-300 hidden">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 text-primary rounded-lg p-3">
                  <ArrowDownCircle size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{hero_values("projects")}</div>
                  <div className="text-2xl font-bold">120+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{hero_values("button_scroll")}</span>
        <ArrowDownCircle size={24} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
