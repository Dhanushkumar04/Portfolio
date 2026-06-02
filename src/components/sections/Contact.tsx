import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TiltCard from '@/components/ui/TiltCard';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dkdhanush1970@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject || "New contact form submission",
          message: formData.message,
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dkdhanush1970@gmail.com',
      href: 'mailto:dkdhanush1970@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6374382347',
      href: 'tel:+916374382347',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sivakasi, Tamil Nadu, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
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
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, innovative ideas, 
                  or collaborative tech projects. Feel free to reach out through any of 
                  the channels below — I’d love to connect!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.08 }}
                      className="flex items-center gap-5 p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-portfolio-purple/40 rounded-2xl transition-all duration-300 group shadow-md"
                    >
                      <div className="p-3.5 bg-portfolio-purple/10 rounded-xl group-hover:bg-portfolio-purple/20 transition-colors border border-portfolio-purple/20 text-portfolio-purple-light flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground">{info.label}</div>
                        <div className="font-semibold text-white/95 mt-0.5">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-6 bg-gradient-to-r from-portfolio-purple/10 to-portfolio-cyan/10 border border-portfolio-purple/20 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-dots opacity-[0.02]" />
                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <CheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                  <span className="font-bold text-white tracking-tight">Available for new opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">
                  Actively looking for exciting full-time roles and freelance web development projects.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form styled with TiltCard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-full"
            >
              <TiltCard className="p-8 border-white/5 hover:border-portfolio-purple/35 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple/30 text-white placeholder-muted-foreground/60 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple/30 text-white placeholder-muted-foreground/60 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple/30 text-white placeholder-muted-foreground/60 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/10 rounded-xl focus:border-portfolio-purple focus:ring-1 focus:ring-portfolio-purple/30 text-white placeholder-muted-foreground/60 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero group disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2.5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </TiltCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
