export type Projects = {
  [key: string]: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveLink?: string;
    githubLink?: string;
  }[];
};

export const projects: Projects = {
  "pt-BR": [
    {
      title: "P2P File Transfer",
      description:
      "Aplicação web moderna para transferência de arquivos entre pares usando WebRTC com criptografia AES-256-GCM.",
      tags: ["Typescript", "NextJS", "WebRTC", "AES-256-GCM"],
      image: "/assets/systems/p2p-file-transfer.webp",
      liveLink: "https://rafa-carmo.github.io/P2P-File-Transfer/",
      githubLink: "https://github.com/rafa-carmo/P2P-File-Transfer"
    },
    {
      title: "Sistema de Gestão Financeira",
      description:
        "Controle de contas a pagar e a receber.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/financeiro.png",
      liveLink: "https://templates.rafaelcarmo.dev/financeiro",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Landing Page Restaurante",
      description:
        "Site com sistema de reservas e cardápio digital.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/restaurant.png",
      liveLink: "https://templates.rafaelcarmo.dev/food",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Landing Page Agência",
      description:
        "Site para agência de branding com portfólio.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/agency.png",
      liveLink: "https://templates.rafaelcarmo.dev/agency",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Mini Jogos Online",
      description:
        "Coleção de mini jogos online.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/assets/systems/mini-games.webp",
      liveLink: "https://rafa-carmo.github.io/mini-games/",
      githubLink: "https://github.com/rafa-carmo/mini-games",
    },
    {
      title: "Loja de Jogos Online",
      description:
        "E-commerce com integração de pagamento e download automático.",
      tags: ["Typescript", "Strapi", "NextJS", "Stripe"],
      image: "/assets/systems/game-store.png",
      githubLink: "https://github.com/rafa-carmo/won-games",
    },
  ],
  en: [
    {
      title: "P2P File Transfer",
      description:
      "Modern web application for peer-to-peer file transfer using WebRTC with AES-256-GCM encryption.",
      tags: ["Typescript", "NextJS", "WebRTC", "AES-256-GCM"],
      image: "/assets/systems/p2p-file-transfer.webp",
      liveLink: "https://rafa-carmo.github.io/P2P-File-Transfer/",
      githubLink: "https://github.com/rafa-carmo/P2P-File-Transfer"
    },
    {
      title: "Financial Management System",
      description:
        "System with accounts payable and receivable control.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/financeiro.png",
      liveLink: "https://templates.rafaelcarmo.dev/financeiro",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Restaurant Landing Page",
      description:
        "Website with reservation system and digital menu.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/restaurant.png",
      liveLink: "https://templates.rafaelcarmo.dev/food",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Branding Agency Landing Page",
      description:
        "Website for branding agency with portfolio.",
      tags: ["Typescript", "NextJS"],
      image: "/assets/systems/agency.png",
      liveLink: "https://templates.rafaelcarmo.dev/agency",
      githubLink: "https://github.com/rafa-carmo/templates-web",
    },
    {
      title: "Online Mini Games",
      description:
        "Collection of online mini games.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/assets/systems/mini-games.webp",
      liveLink: "https://rafa-carmo.github.io/mini-games/",
      githubLink: "https://github.com/rafa-carmo/mini-games",
    },
    {
      title: "Online Game Store",
      description:
        "E-commerce with payment integration and automatic download.",
      tags: ["Typescript", "Strapi", "NextJS", "Stripe"],
      image: "/assets/systems/game-store.png",
      githubLink: "https://github.com/rafa-carmo/won-games",
    },
  ],
};
