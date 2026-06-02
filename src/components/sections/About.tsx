import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Users, Server, LineChart, PenTool, BarChart } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';
import dhanushPhoto from './dhanush.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 100 },
    },
  } as const;

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
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate technologist who loves turning ideas into impactful digital solutions. Having completed internships across full-stack development, UI/UX design, and data analytics, I've gained hands-on experience in building scalable web applications, designing intuitive user interfaces, and extracting meaningful insights using Power BI and machine learning. Whether it's crafting a responsive frontend, visualizing complex data, or training a deep learning model, I'm always eager to learn and create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image & Info */}
            <motion.div variants={itemVariants} className="space-y-8 flex flex-col items-center md:items-stretch">
              <TiltCard className="w-80 h-80 mx-auto relative p-0 overflow-visible border-none bg-transparent hover:shadow-[0_20px_60px_rgba(139,92,246,0.3)] rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple via-portfolio-pink to-portfolio-cyan rounded-3xl opacity-80 blur-sm pointer-events-none" />
                <div className="w-full h-full bg-gradient-to-br from-portfolio-purple to-portfolio-cyan rounded-3xl opacity-80" />
                <div className="absolute inset-2 bg-secondary/95 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
                  <img
                    src={dhanushPhoto}
                    alt="Dhanush Kumar"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105 select-none"
                    onError={(e) => {
                      // Fallback in case of load failure
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-purple/20 border border-portfolio-purple/35 rounded-full flex items-center justify-center animate-float shadow-lg backdrop-blur-xl">
                  <span className="text-xl">✨</span>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-portfolio-cyan/20 border border-portfolio-cyan/35 rounded-full flex items-center justify-center animate-float shadow-lg backdrop-blur-xl"
                  style={{ animationDelay: '1.5s' }}
                >
                  <span className="text-base">🚀</span>
                </div>
              </TiltCard>

              <div className="text-center md:text-left mt-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2">
                  Hey there!
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  I'm Dhanush, currently pursuing Computer Science Engineering at Kumaraguru College of Technology. My journey in tech has been incredibly exciting, spanning across full-stack web development, UI/UX design, and data analytics. Through my recent internships and personal projects—like building interactive Tableau/Power BI dashboards, AI-powered healthcare platforms, and designing mobile apps in Figma—I've developed a versatile skill set. I thrive at the intersection of design, development, and data, bringing a holistic approach to every project I tackle.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid with 3D TiltCards */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    custom={index}
                  >
                    <TiltCard className="p-5 border-white/5 hover:border-white/20 transition-all duration-350">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-portfolio-purple/10 rounded-2xl group-hover:bg-portfolio-purple/20 transition-colors border border-portfolio-purple/20 text-portfolio-purple-light flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg md:text-xl font-bold mb-2 text-white">
                            {highlight.title}
                          </h4>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Premium Glowing Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
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
                className="relative px-6 py-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl text-center hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/5 to-portfolio-cyan/5 rounded-2xl pointer-events-none" />
                <div className="text-3xl md:text-5xl font-black text-gradient mb-2 select-none">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
