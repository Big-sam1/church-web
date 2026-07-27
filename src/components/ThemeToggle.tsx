import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle theme">
      
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'dark' ? 1 : 0,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 90
          }}
          transition={{
            duration: 0.2
          }}
          className="absolute inset-0 flex items-center justify-center text-primary">
          
          <Moon className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: theme === 'light' ? 1 : 0,
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -90
          }}
          transition={{
            duration: 0.2
          }}
          className="absolute inset-0 flex items-center justify-center text-accent">
          
          <Sun className="w-6 h-6" />
        </motion.div>
      </div>
    </button>);

}