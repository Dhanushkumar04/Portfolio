import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Users, Server, LineChart, PenTool, BarChart } from 'lucide-react';

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
        'Experienced in building scalable applications using Django, React, Node.js, and PostgreSQL. Developed platforms like Job Portals and Charity systems.',
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      description:
        'Passionate about creating intuitive and engaging user experiences, designing mobile apps and web platforms using tools like Figma, as seen in my LearnHub project.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics & Power BI',
      description:
        'Skilled in transforming raw data into actionable insights through interactive dashboards and visualizations using Power BI and Tableau for e-commerce and sales.',
    },
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description:
        'Developed predictive models and AI solutions including sentiment analysis, fraud detection, and explainable AI systems for healthcare.',
    },
    {
      icon: Users,
      title: 'Teamwork & Leadership',
      description:
        'Strong collaboration, leadership, and problem-solving skills developed through hackathons, internships, and team-based development projects.',
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
              I'm a passionate technologist who loves turning ideas into impactful digital solutions. Having completed internships across full-stack development, UI/UX design, and data analytics, I've gained hands-on experience in building scalable web applications, designing intuitive user interfaces, and extracting meaningful insights using Power BI and machine learning. Whether it's crafting a responsive frontend, visualizing complex data, or training a deep learning model, I'm always eager to learn and create.
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
                  I'm Dhanush, currently pursuing Computer Science Engineering at Kumaraguru College of Technology. My journey in tech has been incredibly exciting, spanning across full-stack web development, UI/UX design, and data analytics. Through my recent internships and personal projects—like building interactive Tableau/Power BI dashboards, AI-powered healthcare platforms, and designing mobile apps in Figma—I've developed a versatile skill set. I thrive at the intersection of design, development, and data, bringing a holistic approach to every project I tackle.
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
              { number: '12+', label: 'Projects Completed' },
              { number: '7+', label: 'ML/DL Models Built' },
              { number: '∞', label: 'Curiosity & Learning' },
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
