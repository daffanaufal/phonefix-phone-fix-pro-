import React from 'react';
import { Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Smartphone className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">PhoneFixPro</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-8">
            <a href="#services" className="hover:text-blue-400">Services</a>
            <a href="#gallery" className="hover:text-blue-400">Gallery</a>
            <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PhoneFixPro by Daffa naufal santoso. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;