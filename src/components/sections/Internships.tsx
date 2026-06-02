import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from '@/components/ui/TiltCard';

const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const internships = [
    {
      title: 'Full Stack Development',
      image: '/internships/FSD_certificate.png',
      platform: 'NoviTech R&D Pvt Ltd',
      issuedDate: 'March 2026',
    },
    {
      title: 'UI/UX Design',
      image: '/internships/cert_uiux.png',
      platform: 'NoviTech R&D Pvt Ltd',
      issuedDate: 'January 2026',
    },
    {
      title:'Data Analytics',
      image:'/internships/DHANUSH KUMAR S_DA_page-0001.jpg',
      platform: 'NoviTech R&D Pvt Ltd',
      issuedDate: 'March 2026',
    },
    {
      title: 'Power BI',
      image: '/internships/DHANUSH KUMAR S_powerBI_page-0001.jpg',
      platform: 'NoviTech R&D Pvt Ltd',
      issuedDate: 'December 2025',
    },
   
  ];

  return (
    <section id="internships" className="py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
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
              Internships & Masterclass
            </h2>
            <p className="text-xl text-muted-foreground">
              Verified credentials from top global platforms
            </p>
          </motion.div>

          {/* Internships Grid with 3D TiltCards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
                className="h-full"
              >
                <TiltCard className="p-0 border-white/5 overflow-hidden hover:border-portfolio-purple/35 transition-all duration-350 cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="overflow-hidden relative h-60 w-full bg-white/[0.02]">
                      <img
                        src={internship.image}
                        alt={internship.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-portfolio-purple-light transition-colors">
                        {internship.title}
                      </h3>
                      <p className="text-xs md:text-sm text-portfolio-cyan font-semibold mb-1">
                        {internship.platform}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 mt-auto">
                    <p className="text-xs text-muted-foreground">
                      Issued: {internship.issuedDate}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;