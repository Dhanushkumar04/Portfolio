import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, ExternalLink, TrendingUp } from 'lucide-react';

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
        solved: '40+ Posts',
        rating: 'AI Courses & Projects',
        ranking: 'Gen AI in Action course offered by IBM skillsbuild',
      },
      icon: '🔗',
      color: 'from-blue-600 to-indigo-600',
      link: 'https://www.linkedin.com/in/dhanush-kumar-s-9b4632275/',
      achievements: [
        'Completed IBM Watson AI Course',
        'Posted AI Project Updates',
        'AI Ethics & Prompt Engineering Certified',
        'Highly Active Professional Network'
      ],
    }
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient pb-3">
              Coding & Professional Profiles
            </h2>
            <p className="text-xl text-muted-foreground ">
              Platforms where I code, connect, and contribute
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                onClick={() => window.open(profile.link, '_blank')}
                className="card-glow group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{profile.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-portfolio-purple transition-colors">
                        {profile.platform}
                      </h3>
                      <p className="text-muted-foreground">@{profile.username}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-portfolio-purple transition-colors" />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-secondary">
                      {profile.stats.solved}
                    </div>
                    <div className="text-sm text-muted-foreground">Problems / Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-secondary">
                      {profile.stats.rating}
                    </div>
                    <div className="text-sm text-muted-foreground">Highlight</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-secondary">
                      {profile.stats.ranking}
                    </div>
                    <div className="text-sm text-muted-foreground">Achievement</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-portfolio-purple" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1 text-xs text-portfolio-purple">
                    <TrendingUp className="w-3 h-3" />
                    Active
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profiles;
