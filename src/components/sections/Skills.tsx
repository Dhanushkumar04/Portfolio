import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Skills
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
                className="card-glow"
              >
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.2 + index * 0.1 }}
                          className="h-2 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Skills Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-gradient-secondary">Also Familiar With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'C Programming', 'C++', 'Java', 'Deep Learning', 'YOLOv5', 'Firebase', 'Material UI',
                'Tailwind CSS', 'OpenCV', 'Linux', 'Git', 'AWS', 'Postman', 'Bootstrap'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-secondary/50 border border-portfolio-purple/20 rounded-full text-sm font-medium text-muted-foreground hover:text-portfolio-purple hover:border-portfolio-purple/50 transition-all duration-300 cursor-default"
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
