import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const certificates = [
    {
      title: 'CyberSecurity',
      image: '/certificates/CyberSecurity.png',
      platform: 'Skill India Digital Hub',
      issuedDate: 'July 2025',
    },
    {
      title: 'Generative AI in Action',
      image: '/certificates/GenerativeAi.png',
      platform: 'IBM skillsBuild',
      issuedDate: 'July 2025',
    },
    {
      title: 'Python',
      image: '/certificates/python.png',
      platform: 'GUVI',
      issuedDate: 'October 2024',
    },
    {
      title: 'Getting Started with Artificial Intelligence',
      image: '/certificates/AI.png',
      platform: 'IBM SkillsBuild',
      issuedDate: 'August 2025',
    },
    {
      title: 'Run AI Models with IBM Watson Studio',
      image: '/certificates/RunAiModels.png',
      platform: 'IBM SkillsBuild',
      issuedDate: 'August 2025',
    },
    {
      title: 'Machine Learning and Deep Learning',
      image: '/certificates/ML_DL.png',
      platform: 'IBM skillsBuild',
      issuedDate: 'August 2025',
    },
    {
      title: 'Website Testing and Deployment',
      image: '/certificates/webTest_Deploy.png',
      platform: 'IBM skillsBuild',
      issuedDate: 'August 2025',
    },
    {
      title: 'Build your first chatbot',
      image: '/certificates/Chatbot.png',
      platform: 'IBM skillsBuild',
      issuedDate: 'July 2025',
    },
    {
      title: 'Analyze Traffic Safety Data with Python',
      image: '/certificates/Casestudy.png',
      platform: 'Codecademy',
      issuedDate: 'July 2025',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

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
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Verified credentials from top global platforms
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card-glow group hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-md bg-secondary/50 border border-border"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.platform}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Issued: {cert.issuedDate}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;