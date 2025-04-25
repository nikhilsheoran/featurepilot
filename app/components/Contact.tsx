'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-200/40 to-purple-200/40 blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-200/30 blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-violet-500 text-transparent bg-clip-text">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Interested in our app development services? Reach out to us today.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-stretch">
          <motion.div 
            className="md:w-2/5 space-y-8"
            variants={contactInfoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-lg shadow-md">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">contact@featurepilot.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-lg shadow-md">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-sky-500 to-blue-500 p-3 rounded-lg shadow-md">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-600">123 App Studio Lane, San Francisco, CA 94103</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-indigo-50">
              <motion.div 
                className="mb-6"
                custom={0}
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                custom={1}
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </motion.div>
              
              <motion.div 
                className="mb-8"
                custom={2}
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>
              
              <motion.button
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform"
                type="submit"
                custom={3}
                variants={inputVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 