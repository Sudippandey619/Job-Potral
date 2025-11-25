import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, MapPin, Bookmark, BookmarkCheck, Briefcase, DollarSign, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Job } from '../App';
import { mockJobs } from '../data/mockData';

interface JobListingsProps {
  onJobClick: (job: Job) => void;
  savedJobs: string[];
  onToggleSave: (jobId: string) => void;
  isLoggedIn: boolean;
  onNavigateToAuth: () => void;
}

export function JobListings({ onJobClick, savedJobs, onToggleSave, isLoggedIn, onNavigateToAuth }: JobListingsProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [salaryRange, setSalaryRange] = useState([0]);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter === 'all' || job.location.includes(locationFilter);
    const matchesType = typeFilter === 'all' || job.type === typeFilter;
    const matchesExperience = experienceFilter === 'all' || job.experience.includes(experienceFilter);
    
    return matchesSearch && matchesLocation && matchesType && matchesExperience;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">Find Your Perfect Job</h1>
          <p className="text-slate-600">
            Showing {filteredJobs.length} of {mockJobs.length} jobs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full gap-2"
              variant="outline"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.aside
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                className="lg:w-80 flex-shrink-0"
              >
                <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filters
                    </h2>
                    <button
                      onClick={() => {
                        setLocationFilter('all');
                        setTypeFilter('all');
                        setExperienceFilter('all');
                        setSalaryRange([0]);
                      }}
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      Clear All
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Search */}
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        Search
                      </label>
                      <Input
                        placeholder="Job title or company..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Location
                      </label>
                      <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Locations</SelectItem>
                          <SelectItem value="Kathmandu">Kathmandu</SelectItem>
                          <SelectItem value="Pokhara">Pokhara</SelectItem>
                          <SelectItem value="Lalitpur">Lalitpur</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Job Type */}
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        <Briefcase className="w-4 h-4 inline mr-1" />
                        Job Type
                      </label>
                      <Select value={typeFilter} onValueChange={setTypeFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Experience Level
                      </label>
                      <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Levels</SelectItem>
                          <SelectItem value="Entry">Entry Level</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="2-4">2-4 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5+">5+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Salary Range */}
                    <div>
                      <label className="block text-sm text-slate-700 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        Minimum Salary (NPR)
                      </label>
                      <Slider
                        value={salaryRange}
                        onValueChange={setSalaryRange}
                        max={150000}
                        step={10000}
                        className="my-4"
                      />
                      <div className="text-sm text-slate-600 text-center">
                        NPR {salaryRange[0].toLocaleString()}+
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Job Cards */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all cursor-pointer group"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transform: 'perspective(1000px) rotateX(0deg)'
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Company Logo */}
                    <div onClick={() => onJobClick(job)}>
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    </div>

                    {/* Job Info */}
                    <div className="flex-1" onClick={() => onJobClick(job)}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="mb-1 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-slate-600">{job.company}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-blue-600">{job.salary}</div>
                        <span className="text-sm text-slate-500">• {job.posted}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex md:flex-col gap-2">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isLoggedIn) {
                            onToggleSave(job.id);
                          } else {
                            onNavigateToAuth();
                          }
                        }}
                        variant="outline"
                        size="sm"
                        className={`gap-2 ${
                          savedJobs.includes(job.id)
                            ? 'bg-blue-50 text-blue-600 border-blue-200'
                            : ''
                        }`}
                      >
                        {savedJobs.includes(job.id) ? (
                          <>
                            <BookmarkCheck className="w-4 h-4" />
                            Saved
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-4 h-4" />
                            Save
                          </>
                        )}
                      </Button>
                      <Button
                        onClick={() => onJobClick(job)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="mb-2">No jobs found</h3>
                  <p className="text-slate-600 mb-4">
                    Try adjusting your filters to see more results
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setLocationFilter('all');
                      setTypeFilter('all');
                      setExperienceFilter('all');
                      setSalaryRange([0]);
                    }}
                    variant="outline"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}