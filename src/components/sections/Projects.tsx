import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A feature-rich e-commerce platform built with Django and MySQL. Includes user authentication, cart management, and product favoriting.',
      image: '🛍️',
      tags: ['Django', 'MySQL', 'Bootstrap', 'HTML/CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Movie Database App',
      description: 'A modern UI application using React and TMDB API to explore and search for movie details, ratings, and posters.',
      image: '🎬',
      tags: ['React', 'Bootstrap', 'TMDB API'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Bookshop Management System',
      description: 'A complete website to manage book sales and inventory using Django, HTML, and CSS.',
      image: '📚',
      tags: ['Django', 'HTML', 'CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: false,
    },
    {
      title: 'Hand Sign Detection Model',
      description: 'Real-time hand gesture recognition using YOLOv5 and OpenCV. Supports webcam-based live detection of signs like Hello, Thanks, Yes.',
      image: '🤟',
      tags: ['Python', 'YOLOv5', 'Computer Vision', 'AI'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04',
      featured: true,
    },
    {
      title: 'Bus Booking App',
      description: 'A frontend application to book bus tickets with a smooth and responsive UI.',
      image: '🚌',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Bus_Booking_React',
      featured: false,
    },
    {
      title: 'Chat App',
      description: 'A real-time chat application built with React for seamless messaging.',
      image: '💬',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/chatapp_react',
      featured: false,
    },
    {
      title: 'Instagram Clone',
      description: 'Clone of Instagram UI showcasing posts, profiles, and interactions.',
      image: '📷',
      tags: ['React', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/instagramClone_React',
      featured: false,
    },
    {
      title: 'YOLO Object Detection',
      description: 'Fork of the YOLO object detection framework for real-time recognition.',
      image: '🎯',
      tags: ['C', 'YOLO', 'Darknet'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/object_detection_yolo',
      featured: false,
    },
    {
      title: 'Heart Disease Prediction Model',
      description: 'Developed an ML model using Logistic Regression on the UCI Heart Disease Dataset to predict heart disease based on medical attributes with 85% accuracy.',
      image: '❤️',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Heart_Disease_Prediction', 
      featured: true,
    },
    {
      title: 'Salary Prediction Model',
      description: 'Built and deployed a Linear Regression model to predict salaries based on years of experience. Deployed using a serialized model with API testing via Postman.',
      image: '💼',
      tags: ['Python', 'Scikit-learn', 'Linear Regression', 'ML', 'API'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Salary_Prediction', 
      featured: false,
    },
    {
      title: 'Loan Risk Prediction Model',
      description: 'Developed a Random Forest ML model to predict loan approval based on financial and demographic features. Achieved 98% accuracy and deployed with model.pkl for real-time predictions via Postman.',
      image: '🏦',
      tags: ['Python', 'Scikit-learn', 'Random Forest', 'ML', 'EDA','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Loan_Risk_Prediction', 
      featured: false,
    },
    {
      title: 'YouTube Comments Sentiment Analysis',
      description: 'Built an NLP model using SVM to classify 18k+ YouTube comments into Positive, Neutral, and Negative sentiments. Used TF-IDF for feature extraction, achieved balanced accuracy, and visualized sentiment trends with keyword insights.',
      image: '💬',
      tags: ['Python', 'NLP', 'SVM', 'TF-IDF', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Sentiment_Analysis', 
      featured: false,
    },
    {
      title: 'News Title Classification Model',
      description: 'Developed an NLP-based text classification model using Logistic Regression to categorize news article titles into Politics, Business, Sports, Health, and Entertainment. Applied TF-IDF vectorization, Label Encoding, and scikit-learn pipeline for preprocessing and training.',
      image: '📰',
      tags: ['Python', 'NLP', 'Logistic Regression', 'TF-IDF', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/News_Classification',
      featured: false,
    },
    {
      title: 'Customer Segmentation Model',
      description: 'Built a customer segmentation system using K-Means Clustering to group users by gender, age, income, and spending score. Enabled targeted marketing by identifying Low Spenders and High Spenders, with insights visualized through PCA scatter plots and distribution charts.',
      image: '👥',
      tags: ['Python', 'K-Means', 'Machine Learning', 'Pandas', 'Matplotlib','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Customer_Segmentation',
      featured: false,
    },
    {
      title: 'Personality Prediction Model',
      description: 'Developed a personality classification system using behavioral trait data (600k+ entries) to predict Introvert, Ambivert, or Extrovert. Built an MLP model with TensorFlow/Keras, applied PCA for visualization, and achieved reliable accuracy with EarlyStopping.',
      image: '🧠',
      tags: ['Python', 'TensorFlow', 'Keras', 'MLP', 'Pandas', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/Personality_Prediction',
      featured: false,
    },
    {
      title: 'Credit Card Fraud Detection',
      description: 'Built an anomaly detection model using Autoencoders to identify fraudulent credit card transactions. Trained on normal data, used reconstruction error as anomaly score, and achieved ~97% accuracy with strong AUC-ROC performance.',
      image: '💳',
      tags: ['Python', 'TensorFlow', 'Keras', 'Autoencoder', 'Scikit-learn','ML'],
      demoLink: '#',
      githubLink: 'https://github.com/Dhanushkumar04/CreditCard_Fraud_Detection',
      featured: false,
    },
    {
      title: 'Time Series Forecasting',
      description: 'Developed a SARIMAX-based forecasting model with exogenous features to predict future values up to 2025. Achieved low error (1.59% relative RMSE) with strong handling of seasonality and trends for reliable future predictions.',
      image: '📈',
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
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-portfolio-purple text-white'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-portfolio-purple/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card-glow card-3d group relative overflow-hidden"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-portfolio-purple px-3 py-1 rounded-full text-xs font-medium text-white">
                      Featured
                    </span>
                  </div>
                )}

                <div className="w-full h-48 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-cyan/20 rounded-xl mb-6 flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-portfolio-purple transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 text-sm font-medium text-portfolio-cyan hover:text-portfolio-cyan-light transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
