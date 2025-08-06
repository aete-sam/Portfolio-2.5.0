import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Code2, GraduationCap } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-editor-accent" />,
    title: "Flutter Development Course",
    description: "Completed comprehensive Flutter development course from EHunar",
    year: "2024"
  },
  {
    icon: <Award className="w-6 h-6 text-editor-accent" />,
    title: "Google Advanced Data Analytics",
    description: "Certified in Google Advanced Data Analytics",
    year: "2024"
  },
  {
    icon: <Code2 className="w-6 h-6 text-editor-accent" />,
    title: "Google Data Analytics",
    description: "Certified in Google Data Analytics fundamentals",
    year: "2023"
  }
];

const education = [
  {
    icon: <GraduationCap className="w-6 h-6 text-editor-accent" />,
    title: "Bachelor of Science in Computer Science",
    description: "Bahria University, Expected 2027",
    year: "2021-2027"
  }
];

const About = () => {
  return (
    <>
      <section id="about" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">{'<About />'}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-editor-comment mb-4">// Who am I?</div>
              <p className="text-lg mb-6">
                I am a Computer Science student at Bahria University, 
                passionate about mobile development, web technologies, and data analytics. 
                I specialize in Flutter development and have completed multiple Google certifications 
                in data analytics.
              </p>
              <p className="text-lg text-editor-text/80">
                My journey in computer science focuses on creating user-friendly applications 
                and understanding data-driven solutions. I enjoy working on personal projects 
                that combine creativity with technical skills.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="font-mono text-editor-comment mb-4">// Certifications</div>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start gap-4 bg-editor-sidebar p-4 rounded-lg interactive"
                >
                  <div className="mt-1">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-mono text-lg font-semibold">
                        {achievement.title}
                      </h3>
                      <span className="text-sm font-mono text-editor-comment">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-editor-text/70">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="education" className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">{'<Education />'}</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 bg-editor-sidebar p-6 rounded-lg interactive"
              >
                <div className="mt-1">{edu.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-mono text-xl font-semibold">
                      {edu.title}
                    </h3>
                    <span className="text-sm font-mono text-editor-comment">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-editor-text/70 mb-4">{edu.description}</p>
                  <div className="font-mono text-editor-comment">
                    <p>// Relevant Coursework:</p>
                    <p>Web Development, Data Structures, OOP, Database Management, Software Engineering</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;