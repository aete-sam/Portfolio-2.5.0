import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      <MatrixRain />
      <ParticleBackground />
      <div className="relative z-10">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='255, 255, 255'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.2}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            '.nav-link',
            '.project-card',
            '.interactive'
          ]}
        />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        <Navbar />
        <main className="container mx-auto px-4 py-16 space-y-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
        <motion.div
          className="fixed bottom-8 right-8 text-sm text-editor-text/50 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Built with React + TypeScript
        </motion.div>
      </div>
    </div>
  );
}

export default App;