import React from 'react';
import { Smartphone, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PhoneFixPro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">Gallery</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
          <a
            href="https://wa.me/6281510034748"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <Phone className="h-5 w-5" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;