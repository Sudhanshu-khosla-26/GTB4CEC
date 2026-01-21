
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NoticeBoard from './components/NoticeBoard';
import Labs from './components/Labs';
import Specializations from './components/Specializations';
import Societies from './components/Societies';
import Gallery from './components/Gallery';
import ConnectUs from './components/ConnectUs';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading and splash screen duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <div className="container mx-auto px-4 py-12 space-y-24">
          <section id="about">
            <About />
          </section>

          <section id="notices" className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
             <div className="lg:col-span-2">
                <NoticeBoard />
             </div>
             <div className="bg-primary text-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-secondary pb-2">Why GTB4CEC?</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  Experience world-class engineering education with state-of-the-art facilities, 
                  dedicated research labs, and a vibrant campus life.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span> 100% Placement Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span> Industry-Standard Labs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-secondary">✓</span> Experienced PhD Faculty
                  </li>
                </ul>
             </div>
          </section>

          <section id="specialisations">
            <Specializations />
          </section>

          <section id="labs">
            <Labs />
          </section>

          <section id="societies">
            <Societies />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <section id="connect">
            <ConnectUs />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
