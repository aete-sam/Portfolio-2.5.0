import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Terminal, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/aete-sam', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:aetesamasfarullah18@gmail.com', label: 'Email' }
  ];

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[90vh] flex flex-col justify-center"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <Terminal className="w-12 h-12 text-editor-accent" />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <TypeAnimation
            sequence={[
              'Hello World!',
              1000,
              'Aetesam Asfar Ullah',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={true}
            className="text-editor-text"
          />
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-xl md:text-2xl text-editor-text/70 mb-8"
        >
          Computer Science Student at Bahria University
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="font-mono text-editor-comment mb-8"
        >
          <p>// Crafting elegant solutions to complex problems</p>
          <p>// One algorithm at a time</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="/Resume.pdf"
            download="Aetesam_Asfar_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-editor-accent text-white px-6 py-3 rounded-lg font-mono hover:bg-editor-accent/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-editor-sidebar/50 backdrop-blur-sm border border-editor-line rounded-lg text-editor-text hover:text-editor-accent hover:border-editor-accent transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;