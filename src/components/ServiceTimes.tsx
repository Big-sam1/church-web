import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Card } from './ui/Card';
export function ServiceTimes() {
  const locations = [
  {
    name: 'Jesus Is King Ministry',
    address: 'Nyagatare Town, Nyagatare District, Eastern Province, Rwanda',
    times: ['Sundays: Worship Services, Prayer & Fellowship', 'Sunday Services: 9:00 AM']
  },
  {
    name: 'Ministry Office Hours',
    address: 'Nyagatare Town, Nyagatare District',
    times: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM']
  }];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">
            Join Us This Week
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We have multiple service times and locations to fit your schedule.
            Come as you are and experience God's presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc) =>
          <Card
            key={loc.name}
            className="p-8 hover:border-primary transition-colors">
            
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text">{loc.name}</h3>
                    <p className="text-text-muted">{loc.address}</p>
                  </div>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-border">
                  {loc.times.map((time, idx) =>
                <div key={idx} className="flex items-center text-text">
                      <Clock className="w-4 h-4 mr-3 text-accent" />
                      <span className="font-medium">{time}</span>
                    </div>
                )}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                  href="#"
                  className="text-primary font-medium hover:text-secondary transition-colors text-sm flex items-center">
                  
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

}