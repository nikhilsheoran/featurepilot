import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "FeaturePilot's TaskPilot app completely transformed how I manage my day. The AI suggestions are spot-on!",
    author: "Sarah J.",
    role: "Marketing Director"
  },
  {
    quote: "As someone who takes tons of notes, NotePilot's organization features have been a game changer for my productivity.",
    author: "Michael T.",
    role: "Product Manager"
  },
  {
    quote: "I've tried dozens of productivity apps, but FeaturePilot's suite is in a league of its own. Simple yet powerful.",
    author: "Aisha K.",
    role: "Software Engineer"
  },
  {
    quote: "TimePilot helped me identify where I was wasting time and improved my work-life balance dramatically.",
    author: "David L.",
    role: "Freelance Designer"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-indigo-950/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Hear from people who have transformed their productivity with FeaturePilot apps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-indigo-200 dark:text-indigo-800" />
              <p className="text-lg mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xl mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 