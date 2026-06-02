import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Calendar, MapPin } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experience = [
    {
      title: 'Job Portal – Full-Stack Web Application',
      company: 'Self Project',
      period: '2026',
      location: 'Remote',
      achievements: [
        'Built a full-stack job portal using React and Flask.',
        'Implemented job search, application tracking, and user authentication.',
      ],
    },
    {
      title: 'Golf Charity Platform – Subscription-Based Web Application',
      company: 'Self Project',
      period: '2026',
      location: 'Remote',
      achievements: [
        'Built a full-stack golf charity platform using Next.js 15, Supabase, and Stripe, featuring user authentication, subscription plans (monthly/yearly), a Stableford score tracker with PostgreSQL triggers, a charity contribution engine, and an admin panel with draw management and winner verification.'
      ],
    },
    {
      title: 'Explainable Multi-Level Diabetes Prediction System – AI/ML Web Application',
      company: 'Self Project',
      period: '2026',
      location: 'Remote',
      achievements: [
        'Developed an explainable ML system for diabetes prediction with multi-stage risk stratification, interpretable AI using SHAP and LIME, and Flask-based deployment for healthcare decision support.'
      ],
    },
    {
      title: 'LearnHub – Mobile App UI/UX Design (Figma)',
      company: 'Self Project',
      period: '2026',
      location: 'Remote',
      achievements: [
        'Designed a complete mobile learning app UI/UX using Figma with modern design elements and smooth user flows.'
      ],
    },
    {
      title: 'AI-Powered Intelligent Traffic Monitoring Dashboard',
      company: 'Self Project',
      period: '2026',
      location: 'Remote',
      achievements: [
        'Developed an end-to-end traffic monitoring system using YOLOv8 (real-time object detection), FastAPI (backend API), and Streamlit (interactive dashboard). The system tracks vehicle counts, congestion levels, and average speeds, providing real-time traffic insights for smart city applications.'
      ],
    },
    {
      title: 'Heart Disease Prediction Model',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Built a Logistic Regression model using UCI Heart Disease dataset.',
        'Achieved 85% accuracy in predicting heart disease based on patient data.',
      ],
    },
    {
      title: 'Salary Prediction Model',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Developed a Linear Regression model to predict salary based on experience.',
        'Deployed the model with Flask API and tested via Postman.',
      ],
    },
    {
      title: 'Loan Risk Prediction',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Built a RandomForest model to predict loan approval chances.',
        'Achieved 98% accuracy using financial and demographic data.',
      ],
    },
    {
      title: 'Sentiment Classification (YouTube Comments)',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Trained an SVM model on 18k+ comments for Positive, Neutral, and Negative sentiment.',
        'Used TF-IDF for feature extraction and visualized sentiment distribution.',
      ],
    },
    {
      title: 'News Text Classification',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Built a Logistic Regression model with TF-IDF to classify news titles.',
        'Improved accuracy by text preprocessing and feature engineering.',
      ],
    },
    {
      title: 'Customer Segmentation (K-Means)',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Applied K-Means clustering to segment customers into Low/High spenders.',
        'Visualized clusters and provided marketing insights.',
      ],
    },
    {
      title: 'Personality Prediction (ML + DL)',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Used Deep Learning (MLP) with behavioral traits dataset of 600k+ entries.',
        'Classified users into Introvert, Ambivert, and Extrovert with reliable accuracy.',
      ],
    },
    {
      title: 'Credit Card Fraud Detection (Autoencoders)',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Trained autoencoder on normal transactions to detect fraud via anomaly detection.',
        'Achieved 97% accuracy and high AUC-ROC despite class imbalance.',
      ],
    },
    {
      title: 'Time Series Forecasting (SARIMAX)',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Implemented SARIMAX with exogenous features to predict trends up to 2025.',
        'Achieved very low error (1.59% relative RMSE).',
      ],
    },
    {
      title: 'YOLOv5 Hand Sign Detection Model',
      company: 'Self Project',
      period: '2024',
      location: 'Remote',
      achievements: [
        'Trained YOLOv5 for real-time hand sign detection (Hello, Yes, Thanks).',
        'Enabled live webcam detection with dataset preparation and evaluation.',
      ],
    },
    {
      title: 'E-Commerce Website Development',
      company: 'Self Project',
      period: '2024',
      location: 'Remote',
      achievements: [
        'Built a full-featured e-commerce website using Django and MySQL.',
        'Implemented user login, cart functionality, and favorites.',
      ],
    },
    {
      title: 'Movie Database App',
      company: 'Self Project',
      period: '2024',
      location: 'Remote',
      achievements: [
        'Developed a React app with TMDB API to browse and search movies.',
        'Implemented responsive UI with Bootstrap.',
      ],
    },
    {
      title: 'Bus Booking App',
      company: 'Self Project',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Built a responsive frontend app to book bus tickets.',
        'Implemented smooth UI for selecting destinations and booking.',
      ],
    },
    {
      title: 'Bookshop Management System',
      company: 'Self Project',
      period: '2023',
      location: 'Remote',
      achievements: [
        'Developed a web-based system using Django, HTML, and CSS.',
        'Implemented CRUD operations for books and categories.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      school: 'Kumaraguru College of Technology',
      period: '2022 - 2026',
      location: 'Coimbatore, Tamil Nadu',
    },
    {
      degree: 'HSC (Class 12)',
      school: 'Y.R.T.V Matric Hr. Sec. School',
      period: '2020 - 2021',
      location: 'Sivakasi, Tamil Nadu',
    },
    {
      degree: 'SSLC (Class 10)',
      school: 'Y.R.T.V Matric Hr. Sec. School',
      period: '2018 - 2019',
      location: 'Sivakasi, Tamil Nadu',
    },
  ];

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-dots opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-2">
              Resume
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              My professional journey and achievements
            </p>
            
            {/* Glowing Download Button */}
            <motion.a
              href="/DhanushKumarS_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-portfolio-purple to-portfolio-cyan text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:brightness-110 transition-all w-fit mx-auto border border-white/10"
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-10 text-gradient-secondary">Experience</h3>
            
            {/* Timeline Wrapper */}
            <div className="relative border-l-2 border-portfolio-purple/20 ml-3 md:ml-6 pl-6 md:pl-10 space-y-10">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-6 w-5 h-5 rounded-full bg-background border-2 border-portfolio-purple flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-portfolio-cyan animate-pulse" />
                  </div>

                  <TiltCard className="p-6 md:p-8 hover:border-portfolio-purple/35 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">{job.title}</h4>
                        <p className="text-portfolio-purple-light font-bold text-sm md:text-base mt-1">{job.company}</p>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-0 space-y-1 md:text-right shrink-0">
                        <div className="flex items-center md:justify-end gap-2 text-portfolio-cyan-light font-medium">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                        <div className="flex items-center md:justify-end gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm md:text-base text-muted-foreground leading-relaxed flex items-start">
                          <span className="text-portfolio-cyan mr-3 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-portfolio-cyan" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-10 text-gradient-secondary">Education</h3>
            
            {/* Timeline Wrapper */}
            <div className="relative border-l-2 border-portfolio-purple/20 ml-3 md:ml-6 pl-6 md:pl-10 space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="relative"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-6 w-5 h-5 rounded-full bg-background border-2 border-portfolio-purple flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-portfolio-orange animate-pulse" />
                  </div>

                  <TiltCard className="p-6 md:p-8 hover:border-portfolio-purple/35 transition-all duration-350">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">{edu.degree}</h4>
                        <p className="text-portfolio-purple-light font-bold mt-1">{edu.school}</p>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-0 space-y-1 md:text-right shrink-0">
                        <div className="flex items-center md:justify-end gap-2 text-portfolio-orange-light font-medium">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center md:justify-end gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
