import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-gray-200/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">
        {navItems.map((item) => (
          <motion.div key={item.id} className="relative">
            {activeSection === item.id ? (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gray-800 rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            ) : null}
            <a
              href={item.href}
              className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;