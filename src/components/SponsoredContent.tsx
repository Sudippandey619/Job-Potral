import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface SponsoredContentProps {
  variant?: 'banner' | 'card';
  position?: 'top' | 'middle' | 'sidebar';
}

export function SponsoredContent({ variant = 'card', position = 'middle' }: SponsoredContentProps) {
  // Mock sponsored content - in production, this would come from an ad server
  const sponsoredJobs = [
    {
      id: 's1',
      title: 'Senior Software Engineer',
      company: 'Tech Giants Inc.',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
      location: 'Remote',
      salary: 'NPR 150,000 - 200,000',
      type: 'Featured'
    },
    {
      id: 's2',
      title: 'Product Manager',
      company: 'Innovation Labs',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
      location: 'Kathmandu',
      salary: 'NPR 120,000 - 180,000',
      type: 'Premium'
    }
  ];

  const bannerAds = [
    {
      id: 'b1',
      title: 'Upgrade Your Career with Premium Courses',
      description: 'Get 50% off on all tech courses this month',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=200&fit=crop',
      ctaText: 'Learn More',
      ctaLink: '#'
    }
  ];

  if (variant === 'banner') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        {/* Sponsored Label */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-slate-600">
          <Sparkles className="w-3 h-3" />
          Sponsored
        </div>

        <div className="relative h-32 md:h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          <img
            src={bannerAds[0].image}
            alt={bannerAds[0].title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-between px-6 md:px-12">
            <div className="text-white max-w-2xl">
              <h3 className="mb-2 text-white">{bannerAds[0].title}</h3>
              <p className="text-sm text-white/90">{bannerAds[0].description}</p>
            </div>
            <Button
              className="bg-white text-blue-600 hover:bg-slate-100 gap-2 hidden md:flex"
            >
              {bannerAds[0].ctaText}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Card variant - Sponsored job cards
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Sparkles className="w-4 h-4" />
        <span>Sponsored Jobs</span>
      </div>

      {sponsoredJobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-200 relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all"
        >
          {/* Sponsored Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {job.type}
          </div>

          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/10 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative flex gap-4">
            <img
              src={job.logo}
              alt={job.company}
              className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-md"
            />
            <div className="flex-1">
              <h4 className="mb-1">{job.title}</h4>
              <p className="text-sm text-slate-600 mb-2">{job.company}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white/80 rounded-lg text-slate-700">
                  {job.location}
                </span>
                <span className="px-2 py-1 bg-white/80 rounded-lg text-blue-600">
                  {job.salary}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Apply Now
            </Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
