import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';
import Footer from '../components/Footer';
import ModernNavbar from '../components/Navbar';

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{
          backgroundColor: '#0D0D0D',
        }}>
          <img
            src="/logo.png"
            alt="Loading..."
            className="floating-animation"
            style={{ width: '120px', height: '120px' }}
          />
          <p className='typing-animation' ><strong>Tailoring Your Technologies...</strong></p>
        </div>
      ) : (
        <>
          <ModernNavbar />
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
};
