import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
interface EventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
}
export function EventCard({
  title,
  date,
  time,
  location,
  image,
  category
}: EventProps) {
  const [day, month] = date.split(' ');
  return (
    <Card hover className="flex flex-col h-full overflow-hidden">
      <div className="relative overflow-hidden rounded-t-xl bg-slate-950/10">
        <img
          src={image}
          alt={title}
          className="w-full h-auto block transition-transform duration-500 hover:scale-105" />
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px] shadow-sm z-10">
          <span className="block text-xl font-bold text-slate-900 leading-none">
            {day}
          </span>
          <span className="block text-xs font-semibold text-primary uppercase">
            {month}
          </span>
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-text mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="space-y-2 mb-6 flex-1">
          <div className="flex items-center text-text-muted text-sm">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            {time}
          </div>
          <div className="flex items-center text-text-muted text-sm">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {location}
          </div>
        </div>

        <Button variant="outline" size="sm" className="w-full">
          Event Details
        </Button>
      </div>
    </Card>);

}