import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Users, Server } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description:
        'Experienced with Django, React, Bootstrap, Node.js, and MongoDB for dynamic web apps.',
    },
    {
      icon: Brain,
      title: 'AI & Deep Learning',
      description:
        'Built an AI-powered real-time hand sign detection system using YOLOv5.',
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description:
        'Skilled in building RESTful APIs, MySQL integration, and user authentication systems.',
    },
    {
      icon: Users,
      title: 'Team & Leadership',
      description:
        'Strong in communication, collaboration, leadership, and problem-solving during team projects and competitions.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm an enthusiastic full-stack developer with a passion for building seamless digital experiences using Django, React, and modern web technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="w-full h-full bg-gradient-to-br from-portfolio-purple to-portfolio-cyan rounded-3xl opacity-80" />
                  <div className="absolute inset-4 bg-secondary rounded-2xl flex items-center justify-center">
                    <span className="text-6xl">🧑‍💻</span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-purple rounded-full animate-float" />
                  <div
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-portfolio-cyan rounded-full animate-float"
                    style={{ animationDelay: '1s' }}
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Hey there! 👋</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently pursuing Computer Science Engineering at Kumaraguru College of Technology. I enjoy solving problems using technology and have built applications in e-commerce, movie databases, and real-time AI using YOLOv5. I love participating in hackathons and continuously improving my skills in full-stack development and deep learning.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    className="card-glow group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-portfolio-purple/10 rounded-xl group-hover:bg-portfolio-purple/20 transition-colors">
                        <Icon className="w-6 h-6 text-portfolio-purple" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '4+', label: 'Major Projects' },
              { number: '3+', label: 'AI Models Trained' },
              { number: '24/7', label: 'Curiosity & Learning' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
