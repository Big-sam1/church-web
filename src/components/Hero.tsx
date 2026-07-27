import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Play, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
          alt="Worship Background"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />

        {/* Bokeh Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}>
          
          <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
              Welcome Home
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Jesus Reigns <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Forever
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hope, Faith, and Salvation for All. "Christ Above All, Love for All."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto min-w-[160px]">
                
                <Calendar className="mr-2 h-5 w-5" />
                Join Us
              </Button>
            </Link>
            <Link to="/sermons">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[160px] border-white text-white hover:bg-white hover:text-slate-900">
                
                <Play className="mr-2 h-5 w-5" />
                Watch Sermons
              </Button>
            </Link>
            <Link to="/give">
              <Button
                size="lg"
                variant="accent"
                className="w-full sm:w-auto min-w-[160px]">
                
                <Heart className="mr-2 h-5 w-5" />
                Give
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}>
        
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </motion.div>
    </div>);

}