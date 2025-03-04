export type Projects = {
    [key: string]: {
      title: string;
      description: string;
      tags: string[];
      image: string;
      liveLink?: string;
      githubLink?: string;
    }[]
}

export const projects: Projects = {
    "pt-BR": 
    [
        {
            title: "Landing Page para Restaurante",
            description: "Site institucional para restaurante com sistema de reservas e cardápio digital.",
            tags: ["Typescript", "NextJS"],
            image: "/assets/systems/restaurant.png",
            liveLink: "https://templates.rafaelcarmo.dev/food",
            githubLink: "https://github.com/rafa-carmo/templates-web",
        },
        {
            title: "Landing Page Agencia de Marcas",
            description: "Site institucional para agência de branding com portfólio e depoimentos.",
            tags: ["Typescript", "NextJS"],
            image: "/assets/systems/agency.png",
            liveLink: "https://templates.rafaelcarmo.dev/agency",
            githubLink: "https://github.com/rafa-carmo/templates-web",
        },
        {
            title: "Loja de Jogos Online",
            description: "E-commerce de jogos online com integração de pagamento e download automático.",
            tags: ["Typescript", "Strapi", "NextJS", "Stripe"],
            image: "/assets/systems/game-store.png",
  
            githubLink: "https://github.com/rafa-carmo/won-games",
        }
  ],
  'en': [
        {
            title: "Landing Page for Restaurant",
            description: "Institutional website for a restaurant with reservation system and digital menu.",
            tags: ["Typescript", "NextJS"],
            image: "/assets/systems/restaurant.png",
            liveLink: "https://templates.rafaelcarmo.dev/food",
            githubLink: "https://github.com/rafa-carmo/templates-web",
        },
        {
            title: "Branding Agency Landing Page",
            description: "Institutional website for a branding agency with portfolio and testimonials.",
            tags: ["Typescript", "NextJS"],
            image: "/assets/systems/agency.png",
            liveLink: "https://templates.rafaelcarmo.dev/agency",
            githubLink: "https://github.com/rafa-carmo/templates-web",
        },
        {
            title: "Online Game Store",
            description: "E-commerce for online games with payment integration and automatic download.",
            tags: ["Typescript", "Strapi", "NextJS", "Stripe"],
            image: "/assets/systems/game-store.png",
  
            githubLink: "https://github.com/rafa-carmo/won-games",
        }
  ]
}