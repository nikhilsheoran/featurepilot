'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/80 rounded-full px-6 py-3 shadow-lg">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-500 text-transparent bg-clip-text">F</span>
              <span className="text-xl font-bold">eaturePilot</span>
            </a>
          </motion.div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <motion.a 
                href="#about" 
                className="text-gray-700 hover:text-indigo-600 relative"
                whileHover={{ scale: 1.1 }}
              >
                <span>About</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white mt-2 mx-4 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 px-6 space-y-4">
            <motion.a 
              href="#about" 
              className="block text-base font-medium text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              className="block text-base font-medium bg-gradient-to-r from-indigo-600 to-violet-500 text-white py-2 px-4 rounded-full"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 