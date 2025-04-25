'use client';
import { Brain, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const features = [
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: 'AI-Powered',
    description: 'We leverage cutting-edge artificial intelligence to create intuitive and smart applications.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: 'Fast & Efficient',
    description: 'Our apps are designed to streamline your workflow and provide quick solutions to everyday problems.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: <Sparkles className="h-10 w-10 text-white" />,
    title: 'User-Focused',
    description: 'We prioritize simplicity and elegant user experiences to make technology more accessible.',
    color: 'from-sky-500 to-blue-500'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white -z-10" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-500 text-transparent bg-clip-text">About FeaturePilot</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            FeaturePilot is an app studio specializing in creating simple, intelligent applications 
            that solve real-world problems. We focus on combining advanced technology with intuitive design.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl -z-10" />
              <motion.div 
                className={`mb-8 inline-block p-5 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
              
              {/* Animated underline */}
              <motion.div 
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 