import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import { Button } from './ui/Button';
import { localImages } from '../images';
interface SermonSlide {
  id: number;
  preacher: string;
  role: string;
  photo: string;
  theme: string;
  verse: string;
  quote: string;
  description: string;
  date: string;
}
const sermons: SermonSlide[] = [
{
  id: 1,
  preacher: 'Rev. Dr. Samuel Johnson',
  role: 'Senior Pastor',
  photo: localImages.p15,
  theme: 'Walking in Faith',
  verse: 'Hebrews 11:1',
  quote:
  "Faith is taking the first step even when you don't see the whole staircase.",
  description:
  "Discover how to maintain unwavering faith during challenging times and trust in God's perfect timing for your life.",
  date: 'Oct 15, 2023'
},
{
  id: 2,
  preacher: 'Pastor Sarah Williams',
  role: 'Associate Pastor',
  photo: localImages.p12,
  theme: 'The Power of Grace',
  verse: 'Ephesians 2:8',
  quote:
  'Grace is not just a theological concept; it is the very air we breathe as believers.',
  description:
  "An exploration of how God's grace transforms our daily interactions and relationships with others.",
  date: 'Oct 22, 2023'
},
{
  id: 3,
  preacher: 'Bishop Michael Chen',
  role: 'Guest Speaker',
  photo: localImages.p8,
  theme: 'Community & Fellowship',
  verse: 'Acts 2:42',
  quote:
  'We were never meant to walk this journey alone. We are stronger together.',
  description:
  'Understanding the vital importance of authentic Christian community in a disconnected world.',
  date: 'Oct 29, 2023'
}];

export function SermonSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sermons.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % sermons.length);
  const prevSlide = () =>
  setCurrentIndex((prev) => (prev - 1 + sermons.length) % sermons.length);
  return (
    <div
      className="relative w-full bg-surface overflow-hidden py-12 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">Latest Sermons</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative h-[600px] md:h-[500px] bg-background rounded-2xl shadow-xl border border-border overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 100
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -100
              }}
              transition={{
                duration: 0.5
              }}
              className="absolute inset-0 flex flex-col md:flex-row">
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none bg-slate-950/20">
                <img
                  src={sermons[currentIndex].photo}
                  alt={sermons[currentIndex].preacher}
                  className="w-full h-auto block object-contain" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r z-10" />
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <p className="font-bold text-lg">
                    {sermons[currentIndex].preacher}
                  </p>
                  <p className="text-sm opacity-90">
                    {sermons[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-surface">
                <div className="flex items-center space-x-2 text-primary mb-4">
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    {sermons[currentIndex].date}
                  </span>
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    Sunday Service
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-text mb-2">
                  {sermons[currentIndex].theme}
                </h3>
                <p className="text-lg text-primary font-medium mb-6">
                  {sermons[currentIndex].verse}
                </p>

                <div className="relative pl-6 border-l-4 border-accent mb-6">
                  <Quote className="absolute -top-2 -left-2 w-4 h-4 text-accent fill-current opacity-50" />
                  <p className="text-lg text-text italic">
                    "{sermons[currentIndex].quote}"
                  </p>
                </div>

                <p className="text-text-muted mb-8 line-clamp-3">
                  {sermons[currentIndex].description}
                </p>

                <div className="flex items-center space-x-4">
                  <Button variant="primary">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline">Read Notes</Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-background/80 hover:bg-primary hover:text-white transition-colors border border-border shadow-sm">
              
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-background/80 hover:bg-primary hover:text-white transition-colors border border-border shadow-sm">
              
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 md:left-4 md:translate-x-0">
            {sermons.map((_, idx) =>
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-primary' : 'bg-slate-400'}`} />

            )}
          </div>
        </div>
      </div>
    </div>);

}