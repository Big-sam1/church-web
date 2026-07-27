import React, { useState } from 'react';
import { SermonSlider } from '../components/SermonSlider';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  Play,
  Headphones,
  FileText,
  Download,
  Search,
  Filter } from
'lucide-react';
const sermonArchive = [
{
  id: 1,
  title: 'The Power of Prayer',
  preacher: 'Rev. Dr. Samuel Johnson',
  date: 'Oct 08, 2023',
  series: 'Spiritual Disciplines',
  thumbnail:
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 2,
  title: 'Walking in Wisdom',
  preacher: 'Pastor Sarah Williams',
  date: 'Oct 01, 2023',
  series: 'Proverbs',
  thumbnail:
  'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 3,
  title: 'Grace Upon Grace',
  preacher: 'Rev. Dr. Samuel Johnson',
  date: 'Sep 24, 2023',
  series: 'Book of John',
  thumbnail:
  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 4,
  title: 'Faith in Action',
  preacher: 'Rev. David Okonjo',
  date: 'Sep 17, 2023',
  series: 'Book of James',
  thumbnail:
  'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 5,
  title: 'The Good Shepherd',
  preacher: 'Rev. Dr. Samuel Johnson',
  date: 'Sep 10, 2023',
  series: 'Psalms',
  thumbnail:
  'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 6,
  title: 'Living with Purpose',
  preacher: 'Pastor Sarah Williams',
  date: 'Sep 03, 2023',
  series: 'Vision 2023',
  thumbnail:
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];

export function SermonsPage() {
  const [filter, setFilter] = useState('All');
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Featured Sermon Slider */}
      <SermonSlider />

      {/* Archive Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-text">Sermon Archive</h2>

          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-surface border border-border focus:ring-2 focus:ring-primary focus:outline-none text-text" />
              
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2 scrollbar-hide">
          {['All', 'Recent', 'Topical', 'Series', 'Guest Speakers'].map(
            (cat) =>
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === cat ? 'bg-primary text-white' : 'bg-surface text-text hover:bg-border'}`}>
              
                {cat}
              </button>

          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermonArchive.map((sermon) =>
          <Card key={sermon.id} hover className="flex flex-col overflow-hidden">
              <div className="relative group cursor-pointer overflow-hidden rounded-t-xl bg-slate-950/20">
                <img
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-20">
                  45:20
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="text-xs font-semibold text-primary uppercase mb-2">
                  {sermon.series}
                </div>
                <h3 className="text-lg font-bold text-text mb-1 line-clamp-1">
                  {sermon.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {sermon.preacher} • {sermon.date}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                  <button className="flex items-center text-sm text-text-muted hover:text-primary transition-colors">
                    <Play className="w-4 h-4 mr-1" /> Watch
                  </button>
                  <button className="flex items-center text-sm text-text-muted hover:text-primary transition-colors">
                    <Headphones className="w-4 h-4 mr-1" /> Listen
                  </button>
                  <button className="flex items-center text-sm text-text-muted hover:text-primary transition-colors">
                    <FileText className="w-4 h-4 mr-1" /> Notes
                  </button>
                  <button className="flex items-center text-sm text-text-muted hover:text-primary transition-colors">
                    <Download className="w-4 h-4 mr-1" />
                  </button>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Sermons
          </Button>
        </div>
      </section>
    </div>);

}