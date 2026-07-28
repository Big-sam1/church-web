import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { localImages } from '../images';
const testimonials = [
{
  id: 1,
  name: 'John',
  role: 'Members since 2018',
  image: localImages.p2,
  text: "Finding Jesus Is King Ministry was a turning point for our family. The community here is so welcoming and genuine. We've grown so much in our faith."
},
{
  id: 2,
  name: 'Emily Chen',
  role: 'Youth Leader',
  image: localImages.p4,
  text: 'The youth ministry here is incredible. Seeing young lives transformed by the Gospel is the highlight of my week. This church truly cares about the next generation.'
},
{
  id: 3,
  name: 'Marcus Johnson',
  role: 'Worship Team',
  image: localImages.p1,
  text: "There's a spirit of excellence and freedom in worship here that I haven't found anywhere else. It's a place where you can truly encounter God."
}];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text mb-4">
            Stories of Transformation
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
        </div>

        <div className="relative h-[400px] sm:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.5
              }}
              className="absolute inset-0 flex flex-col items-center text-center">
              
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-surface shadow-lg">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover" />
                
              </div>

              <div className="relative max-w-2xl">
                <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/20 fill-current transform -scale-x-100" />
                <p className="text-xl md:text-2xl text-text font-medium italic mb-6 leading-relaxed">
                  "{testimonials[current].text}"
                </p>
                <Quote className="absolute -bottom-4 -right-6 w-8 h-8 text-primary/20 fill-current" />
              </div>

              <div>
                <h4 className="font-bold text-lg text-text">
                  {testimonials[current].name}
                </h4>
                <p className="text-primary text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, idx) =>
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-primary' : 'bg-border'}`}
            aria-label={`Go to testimonial ${idx + 1}`} />

          )}
        </div>
      </div>
    </section>);

}