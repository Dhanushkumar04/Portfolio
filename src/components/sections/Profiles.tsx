import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink, TrendingUp } from 'lucide-react';
import TiltCard from '@/components/ui/TiltCard';

const Profiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'DhanushKumar-07',
      stats: {
        solved: '98',
        rating: 'Rank: 1.2M',
        ranking: 'Active Days: 23',
      },
      icon: '💻',
      color: 'from-orange-500 to-yellow-500',
      glowClass: 'hover:shadow-[0_20px_50px_rgba(249,115,22,0.25)] hover:border-orange-500/30',
      tagColor: 'text-orange-400 border-orange-500/20',
      btnBg: 'bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30 text-orange-400',
      link: 'https://leetcode.com/u/DhanushKumar-07/',
      achievements: [
        '103 Submissions in a Year',
        'Max Streak: 5',
        'Languages: Python, JS, SQL',
        'Aug LeetCoding Challenge Badge'
      ],
    },
    {
      platform: 'LinkedIn',
      username: 'dhanush-kumar-s',
      stats: {
        solved: '100+ Posts',
        rating: 'Actively Engaging',
        ranking: 'Full Stack, UI/UX, Power BI Internships',
      },
      icon: '🔗',
      color: 'from-blue-600 to-indigo-600',
      glowClass: 'hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)] hover:border-blue-500/30',
      tagColor: 'text-blue-400 border-blue-500/20',
      btnBg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30 text-blue-400',
      link: 'https://www.linkedin.com/in/dhanush-kumar-s-9b4632275/',
      achievements: [
        'Full Stack Development Intern at NoviTech',
        'UI/UX Design Intern at NoviTech',
        'Power BI Intern at NoviTech',
        'Completed IBM Watson AI Course',
        'Posted AI Project Updates',
        'AI Ethics & Prompt Engineering Certified',
        'Highly Active Professional Network'
      ],
    }
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden bg-background">
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-3">
              Coding & Professional Profiles
            </h2>
            <p className="text-xl text-muted-foreground ">
              Platforms where I code, connect, and contribute
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="h-full"
              >
                <TiltCard 
                  className={`h-full border-white/5 ${profile.glowClass} transition-all duration-350 relative overflow-hidden p-6 md:p-8 flex flex-col justify-between`}
                >
                  {/* Semi-transparent platform specific gradient backdrop overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-[0.02] group-hover:opacity-[0.03] transition-opacity pointer-events-none`} />

                  <div className="grid md:grid-cols-12 gap-6 relative z-10 h-full items-stretch">
                    {/* Left Column - platform name, stats, and action button */}
                    <div className="md:col-span-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 pr-0 md:pr-6">
                      <div>
                        <div className="flex items-center gap-3.5 mb-6">
                          <span className="text-4xl filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] select-none">{profile.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {profile.platform}
                            </h3>
                            <p className="text-xs text-muted-foreground">@{profile.username}</p>
                          </div>
                        </div>

                        {/* High contrast key statistics grid */}
                        <div className="space-y-3 my-6">
                          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Solved / Posts</span>
                            <span className="text-sm font-black text-white">{profile.stats.solved}</span>
                          </div>
                          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Highlight</span>
                            <span className="text-xs font-black text-white text-right leading-tight max-w-[120px] line-clamp-2">{profile.stats.rating}</span>
                          </div>
                          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Status</span>
                            <span className="text-xs font-black text-white text-right leading-tight max-w-[120px] line-clamp-2">{profile.stats.ranking}</span>
                          </div>
                        </div>
                      </div>

                      {/* View Profile Action Link Button */}
                      <a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md ${profile.btnBg}`}
                      >
                        <span>View Profile</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Right Column - achievements vertical list */}
                    <div className="md:col-span-7 pl-0 md:pl-2 flex flex-col justify-between">
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-portfolio-purple-light" />
                          Key Achievements & Details
                        </h4>
                        
                        {/* Descriptive Bullet List */}
                        <ul className="space-y-3.5">
                          {profile.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${profile.color} mt-1.5 shrink-0 block`} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-portfolio-cyan-light border-t border-white/5 pt-4">
                        <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
                        <span>Active Professional Account</span>
                      </div>
                    </div>
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

export default Profiles;
