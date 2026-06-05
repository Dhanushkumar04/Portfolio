import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Topi Vappa Biryani - Premium Restaurant Website',
      description: 'A high-fidelity, interactive single-page application for a luxury restaurant, featuring a hardware-accelerated 3D serving cloche/pot lid epicenter with Three.js, responsive particle steam effects, GSAP scroll triggers, a real-time menu search/filter system, a custom cart dashboard, and dine-in reservation validation.',
      image: '/projects/topi_vappa.png',
      tags: ['Three.js', 'GSAP', 'JavaScript', 'HTML5/CSS3'],
      demoLink: '#',
      featured: true,
    },
    {
      title: '3DMania - Immersive Virtual Tours & Drone Showcase',
      description: 'An interactive React-based SPA built with React 19, Vite, React Router, Three.js (@react-three/fiber/@react-three/drei), and Framer Motion. Features a global 3D orbiting dodecahedron particle background, a programmatically synthesized 3D drone model, responsive services detail pages, and direct-action Google Street View integrations.',
      image: '/projects/3dmania.png',
      tags: ['React', 'Three.js', 'React Three Fiber', 'Framer Motion'],
      demoLink: '#',
      featured: true,
    },
    {
      title: 'Taj Furniture - Luxury Showroom Platform',
      description: 'A hybrid SPA/MPA showroom platform designed with a dark, gold-accented "quiet luxury" aesthetic. Features an interactive 3D WebGL showroom system using OBJLoader and custom OrbitControls for realistic lighting, normal/roughness mapping material reflections, a state-driven local-storage cart system, and responsive layouts.',
      image: '/projects/taj_furniture.png',
      tags: ['Tailwind CSS', 'Three.js', 'WebGL', 'JavaScript'],
      demoLink: '#',
      featured: true,
    },
    {
      title: 'Job Portal – Full-Stack Web Application',
      description: 'A comprehensive job portal built with Django and React, featuring user authentication, job listings, application tracking, and an admin dashboard for managing postings and users.',
      image: '/projects/job_portal.png',
      tags: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS'],
      demoLink: '#',
    },
    {
      title: 'Gemini Clone - AI Chat Application',
      description: 'A React-based clone of Google\'s Gemini AI chat application, featuring natural language processing and seamless integration with the Gemini API.',
      image: '/projects/gemini_clone.png',
      tags: ['React', 'AI', 'API Integration'],
      demoLink: '#',
    },
    {
      title: 'YouTube Clone – Video Streaming Platform',
      description: 'A React-based clone of YouTube, featuring video playback, search functionality, and a responsive UI.',
      image: '/projects/youtube_clone.png',
      tags: ['React', 'JavaScript', 'API Integration'],
      demoLink: '#',
    },
    {
      title: 'Golf Charity Platform – Subscription-Based Web Application',
      description: 'A subscription-based web application for a golf charity, built with Django and React. Features include user registration, subscription management, event listings, and a donation system.',
      image: '/projects/golf_platform.png',
      tags: ['Next.js', 'Stripe API', 'CSS','PostgreSQL','Supabase'],
      demoLink: '#',
    },
    {
      title: 'Explainable Multi-Level Diabetes Prediction System – AI/ML Web Application',
      description: 'An AI/ML web application that predicts diabetes risk using a multi-level model. Built with Django and React, it provides users with personalized risk assessments and actionable insights based on their health data.',
      image: '/projects/diabetes_prediction.png',
      tags: ['Django', 'React', 'Machine Learning', 'XGBoost', 'SHAP'],
      demoLink: '#',
    },
    {
      title: 'LearnHub – Mobile App UI/UX Design (Figma)',
      description: 'A mobile app UI/UX design for LearnHub, an online learning platform. Created using Figma, the design focuses on user-friendly navigation, engaging visuals, and a seamless learning experience.',
      image: '/projects/learnhub_design.png',
      tags: ['Figma', 'UI/UX Design', 'Mobile App'],
      demoLink: '#',
    },
    {
      title: 'E-Commerce Sales Dashboard – Data Visualization (Tableau)',
      description: 'A data visualization project using Tableau to create an interactive sales dashboard for an e-commerce company. The dashboard provides insights into sales performance, customer demographics, and product trends.',
      image: '/projects/sales_dashboard.png',
      tags: ['Tableau', 'Data Visualization', 'E-Commerce'],
      demoLink: '#',
    },
    {
      title: 'E-Commerce Website',
      description: 'A feature-rich e-commerce platform built with Django and MySQL. Includes user authentication, cart management, and product favoriting.',
      image: '/projects/ecommerce_store.png',
      tags: ['Django', 'MySQL', 'Bootstrap', 'HTML/CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Movie Database App',
      description: 'A modern UI application using React and TMDB API to explore and search for movie details, ratings, and posters.',
      image: '/projects/youtube_clone.png',
      tags: ['React', 'Bootstrap', 'TMDB API'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Bookshop Management System',
      description: 'A complete website to manage book sales and inventory using Django, HTML, and CSS.',
      image: '/projects/ecommerce_store.png',
      tags: ['Django', 'HTML', 'CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: false,
    },
    {
      title: 'Hand Sign Detection Model',
      description: 'Real-time hand gesture recognition using YOLOv5 and OpenCV. Supports webcam-based live detection of signs like Hello, Thanks, Yes.',
      image: '/projects/hand_sign.png',
      tags: ['Python', 'YOLOv5', 'Computer Vision', 'AI'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Bus Booking App',
      description: 'A frontend application to book bus tickets with a smooth and responsive UI.',
      image: '/projects/job_portal.png',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Bus_Booking_React',
      featured: false,
    },
    {
      title: 'Chat App',
      description: 'A real-time chat application built with React for seamless messaging.',
      image: '/projects/gemini_clone.png',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/chatapp_react',
      featured: false,
    },
    {
      title: 'Instagram Clone',
      description: 'Clone of Instagram UI showcasing posts, profiles, and interactions.',
      image: '/projects/learnhub_design.png',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/instagramClone_React',
      featured: false,
    },
    {
      title: 'YOLO Object Detection',
      description: 'Fork of the YOLO object detection framework for real-time recognition.',
      image: '/projects/hand_sign.png',
      tags: ['C', 'YOLO', 'Darknet'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/object_detection_yolo',
      featured: false,
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Developed an ML model using Logistic Regression on the UCI Heart Disease Dataset to predict heart disease based on medical attributes with 85% accuracy.',
      image: '/projects/diabetes_prediction.png',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Heart_Disease_Prediction', 
      featured: true,
    },
    {
      title: 'Salary Prediction Model',
      description: 'Built and deployed a Linear Regression model to predict salaries based on years of experience. Deployed using a serialized model with API testing via Postman.',
      image: '/projects/salary_prediction.png',
      tags: ['Python', 'Scikit-learn', 'Linear Regression', 'ML', 'API'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Salary_Prediction', 
      featured: false,
    },
    {
      title: 'Loan Risk Prediction',
      description: 'Developed a Random Forest ML model to predict loan approval based on financial and demographic features. Achieved 98% accuracy and deployed with model.pkl for real-time predictions via Postman.',
      image: '/projects/loan_risk.png',
      tags: ['Python', 'Scikit-learn', 'Random Forest', 'ML', 'EDA','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Loan_Risk_Prediction', 
      featured: false,
    },
    {
      title: 'YouTube Comments Sentiment Analysis',
      description: 'Built an NLP model using SVM to classify 18k+ YouTube comments into Positive, Neutral, and Negative sentiments. Used TF-IDF for feature extraction, achieved balanced accuracy, and visualized sentiment trends with keyword insights.',
      image: '/projects/nlp_sentiment.png',
      tags: ['Python', 'NLP', 'SVM', 'TF-IDF', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Sentiment_Analysis', 
      featured: false,
    },
    {
      title: 'News Title Classification Model',
      description: 'Developed an NLP-based text classification model using Logistic Regression to categorize news article titles into Politics, Business, Sports, Health, and Entertainment. Applied TF-IDF vectorization, Label Encoding, and scikit-learn pipeline for preprocessing and training.',
      image: '/projects/news_classification.png',
      tags: ['Python', 'NLP', 'Logistic Regression', 'TF-IDF', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/News_Classification',
      featured: false,
    },
    {
      title: 'Customer Segmentation Model',
      description: 'Built a customer segmentation system using K-Means Clustering to group users by gender, age, income, and spending score. Enabled targeted marketing by identifying Low Spenders and High Spenders, with insights visualized through PCA scatter plots and distribution charts.',
      image: '/projects/customer_segmentation.png',
      tags: ['Python', 'K-Means', 'Machine Learning', 'Pandas', 'Matplotlib','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Customer_Segmentation',
      featured: false,
    },
    {
      title: 'Personality Prediction Model',
      description: 'Developed a personality classification system using behavioral trait data (600k+ entries) to predict Introvert, Ambivert, or Extrovert. Built an MLP model with TensorFlow/Keras, applied PCA for visualization, and achieved reliable accuracy with EarlyStopping.',
      image: '/projects/personality_prediction.png',
      tags: ['Python', 'TensorFlow', 'Keras', 'MLP', 'Pandas', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Personality_Prediction',
      featured: false,
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Built an anomaly detection model using Autoencoders to identify fraudulent credit card transactions. Trained on normal data, used reconstruction error as anomaly score, and achieved ~97% accuracy with strong AUC-ROC performance.',
      image: '/projects/credit_card_fraud.png',
      tags: ['Python', 'TensorFlow', 'Keras', 'Autoencoder', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/CreditCard_Fraud_Detection',
      featured: false,
    },
    {
      title: 'Time Series Forecasting',
      description: 'Developed a SARIMAX-based forecasting model with exogenous features to predict future values up to 2025. Achieved low error (1.59% relative RMSE) with strong handling of seasonality and trends for reliable future predictions.',
      image: '/projects/time_series_forecasting.svg',
      tags: ['Python', 'SARIMAX', 'Time Series', 'Statsmodels','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/TimeSeries_Forecasting',
      featured: false,
    },
  ];

  const filters = ['All', 'React', 'JavaScript','ML'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-lines opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-3">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Some of my recent work and projects
            </p>
          </motion.div>

          {/* Filter Pills with layout animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16 relative z-20"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative border ${
                  activeFilter === filter
                    ? 'border-portfolio-purple/50 bg-portfolio-purple/10 text-white shadow-[0_0_25px_rgba(139,92,246,0.25)]'
                    : 'border-white/5 bg-white/[0.02] text-muted-foreground hover:text-white hover:border-white/15 hover:bg-white/[0.05]'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-portfolio-purple/10 -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid with fluid layout transition */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  className="h-full"
                >
                  <TiltCard className="h-full flex flex-col justify-between p-6 border-white/5 hover:border-portfolio-purple/35 transition-all duration-300">
                    <div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-pink px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-white shadow-md">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Premium Graphic Card */}
                      <div className="w-full h-48 bg-[#050b18]/60 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-white/5 group-hover:scale-[1.02] transition-transform duration-300 p-2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.03]"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-portfolio-purple-light transition-colors leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-white/[0.03] border border-white/5 text-portfolio-cyan-light rounded-md text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-4 pt-2 border-t border-white/5">
                        <a
                          href={project.demoLink}
                          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-portfolio-cyan hover:text-portfolio-cyan-light transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-white transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
