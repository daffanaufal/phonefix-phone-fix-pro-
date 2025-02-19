import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Map from './Map';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>123 Repair Street, Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+62 815-1003-4748</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@phonefixpro.com</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="https://wa.me/6281510034748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;