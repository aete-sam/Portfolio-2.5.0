import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: 'bg-[#3776AB]', icon: '🐍' },
  { name: 'JavaScript', level: 85, color: 'bg-[#F7DF1E]', icon: '🟨' },
  { name: 'Dart', level: 88, color: 'bg-[#02569B]', icon: '📱' },
  { name: 'C++', level: 82, color: 'bg-[#00599C]', icon: '⚡' }
];

const frameworks = [
  { name: 'Flutter', level: 90, color: 'bg-[#02569B]', icon: '📱' },
  { name: 'React', level: 85, color: 'bg-[#61DAFB]', icon: '⚛️' },
  { name: 'Node.js', level: 80, color: 'bg-[#339933]', icon: '🟢' },
  { name: 'RayLib', level: 75, color: 'bg-[#FF6B35]', icon: '🎮' }
];

const databases = [
  { name: 'MSSQL Server', level: 85, color: 'bg-[#CC2927]', icon: '🗄️' },
  { name: 'SQLite', level: 80, color: 'bg-[#003B57]', icon: '💾' }
];

const tools = [
  { name: 'Git', level: 90, color: 'bg-[#F05032]', icon: '📚' },
  { name: 'VS Code', level: 95, color: 'bg-[#007ACC]', icon: '💻' },
  { name: 'Postman', level: 85, color: 'bg-[#FF6C37]', icon: '📡' },
  { name: 'npm', level: 88, color: 'bg-[#CB3837]', icon: '📦' }
];

const webTech = [
  { name: 'HTML', level: 90, color: 'bg-[#E34F26]', icon: '🌐' },
  { name: 'CSS', level: 85, color: 'bg-[#1572B6]', icon: '🎨' },
  { name: 'REST APIs', level: 82, color: 'bg-[#FF6B35]', icon: '🔗' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading">{'<Skills />'}</h2>
        
        <div className="space-y-12">
          {/* Languages */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">// Languages</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks/Libraries */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">// Frameworks / Libraries</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">// Databases</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {databases.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">// Tools</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-editor-comment mb-6">// Web Technologies</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webTech.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="font-mono text-editor-comment">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-editor-sidebar rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;