'use client';

import Image from 'next/image';
import { Download, Star, ArrowRight } from 'lucide-react';

const apps = [
  {
    name: 'TaskPilot',
    description: 'AI-powered task management that prioritizes and organizes your day automatically.',
    image: '/placeholder-app-1.png',
    rating: 4.9,
    downloads: '10K+',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'NotePilot',
    description: 'Smart note-taking app that organizes and connects your ideas with AI assistance.',
    image: '/placeholder-app-2.png',
    rating: 4.8,
    downloads: '25K+',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'TimePilot',
    description: 'Time tracking that intelligently identifies your activities and provides insights.',
    image: '/placeholder-app-3.png',
    rating: 4.7,
    downloads: '15K+',
    color: 'from-green-500 to-emerald-600'
  }
];

export default function Apps() {
  return (
    <section id="apps" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Apps</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Download our collection of AI-powered apps designed to solve real problems with minimal effort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div key={index} className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* App Image */}
              <div className={`h-48 overflow-hidden bg-gradient-to-r ${app.color}`}>
                <Image
                  src={app.image}
                  width={400}
                  height={200}
                  alt={app.name}
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200' fill='none'%3E%3Crect width='400' height='200' fill='%23F3F4F6'/%3E%3Cpath d='M200 100C200 111.046 191.046 120 180 120C168.954 120 160 111.046 160 100C160 88.9543 168.954 80 180 80C191.046 80 200 88.9543 200 100Z' fill='%239CA3AF'/%3E%3Cpath d='M240 100C240 111.046 231.046 120 220 120C208.954 120 200 111.046 200 100C200 88.9543 208.954 80 220 80C231.046 80 240 88.9543 240 100Z' fill='%236B7280'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              {/* App Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{app.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-medium">{app.rating}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {app.downloads} downloads
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={`#download-${app.name.toLowerCase()}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Download size={18} />
                    Download
                  </a>
                  <a
                    href={`#learn-${app.name.toLowerCase()}`}
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#all-apps" 
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
          >
            View all apps <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
} 