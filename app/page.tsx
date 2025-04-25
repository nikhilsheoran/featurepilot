import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
