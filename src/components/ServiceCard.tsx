
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-sm rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-5">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
