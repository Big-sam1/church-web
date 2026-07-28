import React, { Children } from 'react';
import { MinistryCard } from '../components/MinistryCard';
import { Users, Heart, Music, BookOpen, Coffee, Globe } from 'lucide-react';
import { localImages } from '../images';
export function MinistriesPage() {
  const ministries = [
  {
    title: 'Youth Ministry',
    description:
    'Empowering the next generation to live boldly for Christ through weekly gatherings, camps, and mentorship.',
    image:
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    title: "Women's Fellowship",
    description:
    'A sisterhood of believers growing together through Bible study, prayer, and authentic connection.',
    image:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Heart className="w-6 h-6 text-white" />
  },
  {
    title: "Men's Ministry",
    description:
    'Equipping men to be spiritual leaders in their homes, workplaces, and communities.',
    image:
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <Coffee className="w-6 h-6 text-white" />
  },
  {
    title: "Children's Ministry",
    description:
    "Creating a fun, safe environment where kids can learn about God's love and truth.",
    image:
    'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: <BookOpen className="w-6 h-6 text-white" />
  },
  {
    title: 'Worship & Arts',
    description:
    'Using music, media, and creative arts to glorify God and lead the congregation in praise.',
    image: localImages.p18,
    icon: <Music className="w-6 h-6 text-white" />
  },
  {
    title: 'Community Outreach',
    description:
    "Extending God's love beyond our walls through food drives, service projects, and local missions.",
    image: localImages.p17,
    icon: <Globe className="w-6 h-6 text-white" />
  }];

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text mb-4">Our Ministries</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            There's a place for everyone to serve, grow, and belong at Jesus Is King
            Ministry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, idx) =>
          <MinistryCard key={idx} {...ministry} />
          )}
        </div>
      </div>
    </div>);

}