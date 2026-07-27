import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';
interface MinistryProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}
export function MinistryCard({
  title,
  description,
  image,
  icon
}: MinistryProps) {
  return (
    <Card hover className="group overflow-hidden">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-primary rounded-lg mr-3 group-hover:bg-secondary transition-colors">
              {icon}
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>

          <p className="text-slate-200 mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 ease-in-out">
            {description}
          </p>

          <div className="flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </Card>);

}