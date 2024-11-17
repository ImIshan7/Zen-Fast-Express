import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrackingForm from './components/TrackingForm';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <Hero />
        <About />

        <section id="track" className="py-12 -mt-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-center mb-6 gradient-text">Track Your Package</h2>
              <TrackingForm />
            </div>
          </div>
        </section>

        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;