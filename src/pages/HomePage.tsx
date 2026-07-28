import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceTimes } from '../components/ServiceTimes';
import { SermonSlider } from '../components/SermonSlider';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { PrayerRequestForm } from '../components/PrayerRequestForm';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { localImages } from '../images';
export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      <ServiceTimes />

      <SermonSlider />

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-text mb-2">
                Upcoming Events
              </h2>
              <p className="text-text-muted">
                Join us for fellowship and growth
              </p>
            </div>
            <Link to="/events">
              <Button variant="ghost" className="hidden sm:flex">
                View All Events <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              title="Annual Worship Conference"
              date="15 NOV"
              time="6:00 PM - 9:00 PM"
              location="Main Sanctuary"
              category="Conference"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
            
            <EventCard
              title="Community Outreach Day"
              date="22 NOV"
              time="9:00 AM - 2:00 PM"
              location="City Park"
              category="Outreach"
              image={localImages.p17} />
            
            <EventCard
              title="Christmas Choir Practice"
              date="01 DEC"
              time="7:00 PM - 8:30 PM"
              location="Music Room"
              category="Music"
              image={localImages.p16} />
            
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Prayer Request Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrayerRequestForm />
        </div>
      </section>
    </div>);

}