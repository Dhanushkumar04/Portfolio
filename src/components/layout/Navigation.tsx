import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText, BookOpen, Trophy } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'certifications', label: 'certifications', icon: BookOpen },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'profiles', label: 'Profiles', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 120 && scrollY < offsetTop + offsetHeight - 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation Floating Pill */}
      <div className="fixed top-5 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none flex justify-center">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="pointer-events-auto flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full border border-white/10 bg-background/50 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gradient cursor-pointer flex items-center"
            onClick={() => scrollToSection('hero')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu with Sliding Capsule Background */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-white"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5 z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-portfolio-purple-light transition-colors relative z-50 rounded-full bg-white/5 border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </motion.nav>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/90 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.05 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className="relative w-full max-w-xs flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-lg font-medium transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-xl ${
                        activeSection === item.id ? 'bg-portfolio-purple/20 text-portfolio-purple-light' : 'bg-white/5 text-muted-foreground'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className={activeSection === item.id ? 'text-white' : 'text-muted-foreground'}>
                        {item.label}
                      </span>
                    </div>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeMobileDot"
                        className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-cyan"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;