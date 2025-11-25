import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, TrendingUp, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Carousel } from './Carousel';
import { Job } from '../App';
import { mockJobs, jobCategories, popularCompanies } from '../data/mockData';
import { SponsoredContent } from './SponsoredContent';

interface LandingProps {
  onNavigate: (page: 'listings' | 'auth') => void;
  onJobClick: (job: Job) => void;
}

export function Landing({ onNavigate, onJobClick }: LandingProps) {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onNavigate('listings');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">AI-Powered Job Search</span>
            </motion.div>
            
            <h1 className="mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Find Your Dream Job with AI
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Discover thousands of job opportunities with AI-powered recommendations.
              Your next career move is just a search away.
            </p>

            {/* 3D Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 border border-slate-200"
                style={{
                  transform: 'perspective(1000px) rotateX(2deg)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
                }}
              >
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      placeholder="Job title, keywords..."
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className="pl-12 h-14 border-0 bg-slate-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      placeholder="Location..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                      className="pl-12 h-14 border-0 bg-slate-50 focus:bg-white transition-colors"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    className="h-14 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Jobs
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12"
            >
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  10,000+
                </div>
                <p className="text-sm text-slate-600">Active Jobs</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  5,000+
                </div>
                <p className="text-sm text-slate-600">Companies</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  50,000+
                </div>
                <p className="text-sm text-slate-600">Job Seekers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Trending Job Categories</h2>
              <p className="text-slate-600">Explore opportunities by category</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jobCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => onNavigate('listings')}
                className="group relative p-6 bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="mb-1">{category.name}</h3>
                  <p className="text-sm text-slate-500">{category.count} jobs</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Companies */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Top Companies Hiring</h2>
              <p className="text-slate-600">Join industry-leading organizations</p>
            </div>
            <Building2 className="w-8 h-8 text-purple-600" />
          </div>

          <Carousel>
            {popularCompanies.map((company, index) => (
              <div key={index} className="px-2">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                  onClick={() => onNavigate('listings')}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-xl object-cover mb-4"
                  />
                  <h3 className="mb-2">{company.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{company.industry}</p>
                  <div className="flex items-center text-blue-600">
                    <span className="text-sm">{company.openings} open positions</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Sponsored Banner Ad */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <SponsoredContent variant="banner" />
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Jobs</h2>
              <p className="text-slate-600">Hand-picked opportunities for you</p>
            </div>
            <Button
              onClick={() => onNavigate('listings')}
              variant="outline"
              className="gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.slice(0, 6).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onJobClick(job)}
                className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer transition-all hover:border-blue-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="mb-1 line-clamp-1">{job.title}</h3>
                    <p className="text-sm text-slate-600">{job.company}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="text-sm text-blue-600">{job.salary}</div>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs">
                    {job.experience}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h2 className="mb-4 text-white">Ready to Start Your Journey?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of job seekers finding their dream careers with AI-powered recommendations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('auth')}
                  className="bg-white text-blue-600 hover:bg-slate-100 h-12 px-8"
                  size="lg"
                >
                  Get Started Free
                </Button>
                <Button
                  onClick={() => onNavigate('listings')}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 h-12 px-8"
                  size="lg"
                >
                  Browse Jobs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsored Content */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <SponsoredContent />
        </div>
      </section>
    </div>
  );
}