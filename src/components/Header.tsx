import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { localImages } from '../images';
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Leadership',
    path: '/leadership'
  },
  {
    name: 'Sermons',
    path: '/sermons'
  },
  {
    name: 'Live',
    path: '/live'
  },
  {
    name: 'Events',
    path: '/events'
  },
  {
    name: 'Ministries',
    path: '/ministries'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="rounded-lg group-hover:opacity-90 transition-opacity overflow-hidden">
              <img src={localImages.favicon} alt="Jesus Is King" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight ${scrolled ? 'text-text' : 'text-white'}`}>
                JESUS IS KING
              </span>
              <span
                className={`text-xs tracking-wider ${scrolled ? 'text-text-muted' : 'text-white/80'}`}>
                MINISTRY
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : scrolled ? 'text-text' : 'text-white/90 hover:text-white'}`}>
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/give">
              <Button variant="accent" size="sm">
                Give Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-text' : 'text-white'}`}>
              
              {isOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-background border-t border-border overflow-hidden">
          
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`block text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-text'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-4 border-t border-border">
                <Link to="/give" className="block w-full">
                  <Button className="w-full" variant="accent">
                    Give Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}