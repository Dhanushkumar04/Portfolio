import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from '../effects/ParticleBackground';
import Scene3D from '../3d/Scene3D';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Premium Background Textures and Overlays */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dots opacity-[0.07] pointer-events-none" />

      {/* Background Effects */}
      <ParticleBackground />
      <Scene3D />

      {/* Dynamic Glowing Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/10 via-transparent to-portfolio-cyan/10 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-10 md:left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-portfolio-purple/20 rounded-full blur-[100px] md:blur-[180px] animate-pulse-glow pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 md:right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-portfolio-cyan/15 rounded-full blur-[100px] md:blur-[180px] animate-pulse-glow pointer-events-none z-0" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="mb-6"
          >
            <span className="inline-block px-5 rounded-full text-sm font-semibold tracking-wider text-portfolio-purple-light bg-gradient-to-r from-portfolio-purple/10 to-portfolio-cyan/10 border border-portfolio-purple/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.15)]">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 80 }}
            className="text-3xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          >
            <span className="text-gradient">Dhanush Kumar S</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-3xl font-medium mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed uppercase tracking-wider bg-white/5 border border-white/5 py-3 px-6 rounded-2xl backdrop-blur-md shadow-md"
          >
            Full Stack Developer | UI/UX Designer | Power BI & Data Analytics
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting engaging user experiences, scalable web applications, and deriving actionable insights through data analytics and machine learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            <button onClick={scrollToContact} className="btn-hero group flex items-center justify-center min-w-[160px]">
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>

            <button onClick={scrollToProjects} className="btn-secondary group flex items-center justify-center min-w-[160px]">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center space-x-5"
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
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                  className="p-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-portfolio-purple/50 rounded-2xl text-muted-foreground hover:text-white transition-all duration-300 hover:scale-115 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
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
            transition={{ delay: 1.3 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-md">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3.5 bg-gradient-to-b from-portfolio-purple to-portfolio-cyan rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
