import React from 'react';
import { EventCard } from '../components/EventCard';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { localImages } from '../images';
export function EventsPage() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Church Calendar</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Stay up to date with everything happening at Jesus Is King Ministry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Calendar Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-2xl font-bold text-text">November 2023</h2>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex space-x-2">
            <Button variant="primary" size="sm" className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" /> Month View
            </Button>
            <Button variant="ghost" size="sm">
              List View
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            image="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          
          <EventCard
            title="Christmas Choir Practice"
            date="01 DEC"
            time="7:00 PM - 8:30 PM"
            location="Music Room"
            category="Music"
            image={localImages.p16} />
          
          <EventCard
            title="Men's Breakfast"
            date="05 DEC"
            time="8:00 AM - 10:00 AM"
            location="Fellowship Hall"
            category="Fellowship"
            image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          
          <EventCard
            title="Youth Winter Camp"
            date="15 DEC"
            time="All Weekend"
            location="Mountain Retreat Center"
            category="Youth"
            image="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          
          <EventCard
            title="Christmas Eve Service"
            date="24 DEC"
            time="5:00 PM & 7:00 PM"
            location="Main Sanctuary"
            category="Service"
            image="https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          
        </div>
      </div>
    </div>);

}