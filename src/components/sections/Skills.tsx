import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from '@/components/ui/TiltCard';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend & UI/UX',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'UI/UX Design', level: 85, icon: '✨' },
        { name: 'HTML5', level: 92, icon: '📄' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '🟨' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Django', level: 87, icon: '🌐' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'MySQL', level: 83, icon: '🐬' },
        { name: 'RESTful APIs', level: 78, icon: '🔗' },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Power BI', level: 88, icon: '📊' },
        { name: 'Tableau', level: 85, icon: '📈' },
        { name: 'Data Analytics', level: 85, icon: '🔍' },
        { name: 'Machine Learning', level: 80, icon: '🤖' },
        { name: 'Python', level: 85, icon: '🐍' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid with 3D Tilt Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.15 }}
                className="h-full"
              >
                <TiltCard className="h-full border-white/5 hover:border-portfolio-purple/35 transition-all duration-350">
                  <h3 className="text-2xl font-bold mb-8 text-gradient-secondary pb-1 tracking-tight border-b border-white/5">
                    {category.title}
                  </h3>

                  <div className="space-y-7">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 + index * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] select-none">{skill.icon}</span>
                            <span className="font-semibold text-white/95 text-sm md:text-base">{skill.name}</span>
                          </div>
                          <span className="text-xs md:text-sm font-bold text-portfolio-cyan">{skill.level}%</span>
                        </div>

                        {/* Glowing progress tracks */}
                        <div className="w-full bg-white/[0.04] border border-white/5 rounded-full h-2.5 overflow-hidden p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: 0.6 + categoryIndex * 0.1 + index * 0.05, ease: 'easeOut' }}
                            className="h-1.5 bg-gradient-to-r from-portfolio-purple via-portfolio-pink to-portfolio-cyan rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Floating Skills Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-10 text-gradient-secondary">Also Familiar With</h3>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'C Programming', 'C++', 'Java', 'Deep Learning', 'YOLOv5', 'Firebase', 'Material UI',
                'Tailwind CSS', 'OpenCV', 'Linux', 'Git', 'AWS', 'Postman', 'Bootstrap'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.04 }}
                  whileHover={{ scale: 1.1, y: -2, zIndex: 10 }}
                  className="px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-xs md:text-sm font-semibold text-muted-foreground hover:text-white hover:border-portfolio-purple/40 hover:bg-portfolio-purple/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default select-none backdrop-blur-md"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
