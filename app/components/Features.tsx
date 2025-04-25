import { Brain, Zap, Clock, Sparkles, Wand2, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: 'AI-Powered Intelligence',
    description: 'Leveraging cutting-edge AI to understand your needs and provide smart, contextual solutions.'
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: 'Lightning Fast',
    description: 'Get instant results with our optimized apps that respond in milliseconds, not minutes.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: 'Time-Saving',
    description: 'Automate repetitive tasks and streamline your workflow to focus on what truly matters.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-indigo-500" />,
    title: 'Intuitive Design',
    description: 'Clean, minimalist interfaces that are immediately understandable with zero learning curve.'
  },
  {
    icon: <Wand2 className="h-8 w-8 text-pink-500" />,
    title: 'Personalized Experience',
    description: 'Apps that adapt to your preferences and usage patterns for a tailored experience.'
  },
  {
    icon: <Shield className="h-8 w-8 text-green-500" />,
    title: 'Privacy-Focused',
    description: 'Your data stays yours. We prioritize privacy and security in everything we build.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FeaturePilot</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our apps are built with you in mind, combining powerful technology with simple interfaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-5 inline-block p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 