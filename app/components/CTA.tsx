import { Download, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl">
              Join thousands of users who have transformed their workflow with FeaturePilot's AI-powered apps. Experience the future of productivity today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#apps" 
                className="flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg"
              >
                <Download size={20} />
                Download Now
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-indigo-700/50 border border-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transform scale-110 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                <Download className="h-12 w-12 md:h-16 md:w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 