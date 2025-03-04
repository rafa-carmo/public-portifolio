import { Code, Layout, Database, Search, Smartphone, BarChart } from "lucide-react";

export type Service = {
  [key: string]: {
    icon: any;
    title: string;
    description: string;
  }[]
}

export const services: Service = {
  "pt-BR": [
    {
      icon: Code,
      title: "Desenvolvimento Frontend",
      description:
        "Interfaces modernas, responsivas e otimizadas para uma experiência de usuário excepcional.",
    },
    {
      icon: Database,
      title: "Desenvolvimento Backend",
      description:
        "Sistemas robustos, escaláveis e seguros que sustentam aplicações complexas.",
    },
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description:
        "Aplicações que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.",
    },
    {
      icon: Layout,
      title: "UX/UI Design",
      description:
        "Experiências de usuário intuitivas com interfaces visualmente atraentes.",
    },
    {
      icon: Search,
      title: "Otimização SEO",
      description:
        "Melhoria de visibilidade nos motores de busca para atrair mais tráfego qualificado.",
    },
    {
      icon: BarChart,
      title: "Análise de Performance",
      description:
        "Monitoramento e otimização do desempenho de aplicações para máxima eficiência.",
    },
  ],
  'en': [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Modern, responsive, and optimized interfaces for an exceptional user experience.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust, scalable, and secure systems that support complex applications.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Applications that work perfectly on all devices and screen sizes.",
    },
    {
      icon: Layout,
      title: "UX/UI Design",
      description:
        "Intuitive user experiences with visually appealing interfaces.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improving visibility in search engines to attract more qualified traffic.",
    },
    {
      icon: BarChart,
      title: "Performance Analysis",
      description:
        "Monitoring and optimizing application performance for maximum efficiency.",
    },
  ]
};