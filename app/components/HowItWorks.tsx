import { Download, Sparkles, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-8 w-8 text-white" />,
    title: 'Download the App',
    description: 'Choose from our collection of specialized AI-powered apps and download them to your device.',
    color: 'bg-blue-500'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: 'Tell Us Your Needs',
    description: 'Simply explain what you need in natural language, and our AI understands your requirements.',
    color: 'bg-purple-500'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-white" />,
    title: 'Get Instant Results',
    description: 'Watch as the app generates solutions tailored to your specific needs in seconds.',
    color: 'bg-indigo-500'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Using FeaturePilot apps is as simple as these three steps.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`flex items-center justify-center ${step.color} w-16 h-16 rounded-full mb-6 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center w-full my-6">
                    <svg className="w-8 h-8 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#apps" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/20"
          >
            <Download size={20} />
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
} 