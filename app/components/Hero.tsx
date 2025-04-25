'use client';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background gradient and animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white -z-10" />
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-pink-300/20 to-purple-300/20 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-300/20 to-indigo-300/20 blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="bg-white p-2 rounded-full shadow-md">
            <Sparkles className="h-6 w-6 text-indigo-600" />
          </div>
          <span className="text-sm font-medium bg-white/80 backdrop-blur-sm text-indigo-600 px-4 py-1.5 rounded-full shadow-sm">
            Welcome to FeaturePilot
          </span>
        </motion.div>
        
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Crafting<br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-400 text-transparent bg-clip-text">Extraordinary</span><br />
            Digital Experiences
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed"
          >
            We're a forward-thinking app studio building innovative solutions that empower users with intelligence, simplicity, and beauty.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a 
            href="#contact" 
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-8 py-4 rounded-full font-medium shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#about" 
            className="flex items-center gap-2 bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-medium shadow-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.9)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-full blur-xl opacity-70 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>
    </div>
  );
} 