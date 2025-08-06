import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, BookOpen, Gamepad2 } from 'lucide-react';
import ProjectCarousel, { ProjectCarouselItem } from './ProjectCarousel';

const personalProjects: ProjectCarouselItem[] = [
  {
    id: 1,
    title: 'Social Media Detox App',
    description: 'Developed a mobile application to track and reduce social media usage. Features include session timers, daily usage tracking, and user-friendly UI.',
    tags: ['Flutter', 'Dart', 'Mobile Development'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'personal',
    icon: <Smartphone className="w-4 h-4 text-white" />
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'Created a responsive portfolio website to showcase personal projects, certifications, and skills. Built using React and styled with TypeScript.',
    tags: ['React', 'TypeScript', 'Web Development'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'personal',
    icon: <Globe className="w-4 h-4 text-white" />
  }
];

const academicProjects: ProjectCarouselItem[] = [
  {
    id: 3,
    title: 'Quiz Web App',
    description: 'Designed a web-based quiz application to help students prepare for exams. Built as part of a university project to demonstrate frontend fundamentals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'academic',
    icon: <BookOpen className="w-4 h-4 text-white" />
  },
  {
    id: 4,
    title: 'Online Book Store',
    description: 'Built a dynamic web application with a local server and database for managing books, users, and orders. Backend developed in Node.js with MSSQL database integration.',
    tags: ['Node.js', 'MSSQL Server', 'Web Development'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'academic',
    icon: <BookOpen className="w-4 h-4 text-white" />
  },
  {
    id: 5,
    title: 'Color Sort Game',
    description: 'Developed a puzzle game using C++ and RayLib graphics library as a semester project. Includes color sorting mechanics and keyboard-based gameplay.',
    tags: ['C++', 'RayLib', 'Game Development'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    category: 'academic',
    icon: <Gamepad2 className="w-4 h-4 text-white" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">{'<Projects />'}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Academic Projects - Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-mono font-semibold text-editor-accent mb-8">Academic Projects</h3>
            <div className="flex justify-center">
              <ProjectCarousel
                items={academicProjects}
                baseWidth={350}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </motion.div>

          {/* Personal Projects - Right Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-mono font-semibold text-editor-accent mb-8">Personal Projects</h3>
            <div className="flex justify-center">
              <ProjectCarousel
                items={personalProjects}
                baseWidth={350}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;