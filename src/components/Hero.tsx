import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Phone Repair Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert repairs for all smartphone brands. Fast, reliable, and guaranteed service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/6281510034748"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Phone Repair Service"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;