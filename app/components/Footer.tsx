'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-white -z-10" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-500 text-transparent bg-clip-text mr-2">F</span>
              <span className="text-xl font-bold">eaturePilot</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600">
              © 2023 FeaturePilot. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <motion.a 
                href="#" 
                className="text-sm text-gray-600 hover:text-indigo-600"
                whileHover={{ scale: 1.05, color: '#4f46e5' }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-sm text-gray-600 hover:text-indigo-600"
                whileHover={{ scale: 1.05, color: '#4f46e5' }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 