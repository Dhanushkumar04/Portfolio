import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
    <section id="internships" className="py-24 relative overflow-hidden">
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
              Internships & Masterclass
            </h2>
            <p className="text-xl text-muted-foreground">
              Verified credentials from top global platforms
            </p>
          </motion.div>

          {/* Internships Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card-glow group hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl overflow-hidden shadow-md bg-secondary/50 border border-border"
              >
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {internship.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {internship.platform}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Issued: {internship.issuedDate}
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

export default Internships;