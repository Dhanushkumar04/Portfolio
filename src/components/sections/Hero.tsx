import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from '../effects/ParticleBackground';
import Scene3D from '../3d/Scene3D';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <Scene3D />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 via-transparent to-portfolio-cyan/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-purple/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-cyan/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-6 py-2 bg-secondary/30 rounded-full text-base md:text-lg font-semibold text-portfolio-purple shadow-md">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">Dhanush Kumar S</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground"
          >
            Full Stack Developer | UI/UX Designer | Power BI & Data Analytics
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
           Crafting engaging user experiences, scalable web applications, and deriving actionable insights through data analytics and machine learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button onClick={scrollToContact} className="btn-hero group">
              Hire Me
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button onClick={scrollToProjects} className="btn-ghost group">
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/Dhanushkumar04',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/dhanush-kumar-s-9b4632275/',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:dkdhanush1970@gmail.com',
                label: 'Email',
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="p-3 bg-secondary/50 backdrop-blur-sm border border-portfolio-purple/20 rounded-xl text-muted-foreground hover:text-portfolio-purple hover:border-portfolio-purple/50 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-portfolio-purple/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-portfolio-purple rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
