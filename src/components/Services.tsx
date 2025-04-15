"use client";
import { services as serviceList } from "@/constants/services";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

const Services = ({ locale }: { locale: string }) => {
  const services = useTranslations("Services");
  const services_items = serviceList[locale];
  if (!services_items) {
    return <p>Loading...</p>;
  }
  return (
    <section id="services" className="bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
            {services("title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-16">
            {services("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services_items.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
