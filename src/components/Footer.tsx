import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone } from
'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { localImages } from '../images';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg overflow-hidden">
                <img src={localImages.favicon} alt="Jesus Is King" className="w-10 h-10 object-contain" />
              </div>
              <span className="font-bold text-xl text-white">
                JESUS IS KING MINISTRY
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              A Christian ministry dedicated to glorifying Jesus Christ through worship, prayer, biblical teaching, evangelism, discipleship, and community outreach.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Facebook: Jesus Is King Rwanda">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/JesusIsKingRW" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="X (Twitter): @JesusIsKingRW">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/jesusisking_rw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Instagram: @jesusisking_rw">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="YouTube: Jesus Is King Rwanda">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/sermons"
                  className="hover:text-primary transition-colors">
                  
                  Sermons
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-primary transition-colors">
                  
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/ministries"
                  className="hover:text-primary transition-colors">
                  
                  Ministries
                </Link>
              </li>
              <li>
                <Link
                  to="/give"
                  className="hover:text-primary transition-colors">
                  
                  Give
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors">
                  
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Eastern Province, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+250 786 139 402</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@jesusisking.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Weekly Inspiration
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive weekly sermons and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:ring-primary" />
              
              <Button variant="primary" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jesus Is King Ministry. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 italic text-slate-500 text-center md:text-right max-w-md">
            "Therefore God exalted Him to the highest place and gave Him the name that is above every name..." - Philippians 2:9
          </div>
        </div>
      </div>
    </footer>);

}