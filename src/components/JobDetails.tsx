import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, MapPin, Briefcase, Clock, DollarSign, 
  Bookmark, BookmarkCheck, Share2, Building2, CheckCircle2
} from 'lucide-react';
import { Button } from './ui/button';
import { Job } from '../App';
import { mockJobs } from '../data/mockData';
import { Carousel } from './Carousel';
import { LoginPrompt } from './LoginPrompt';

interface JobDetailsProps {
  job: Job;
  isSaved: boolean;
  isApplied: boolean;
  onToggleSave: (jobId: string) => void;
  onApply: (jobId: string) => void;
  onJobClick: (job: Job) => void;
  onBack: () => void;
  isLoggedIn: boolean;
  onNavigateToAuth: () => void;
}

export function JobDetails({ 
  job, 
  isSaved, 
  isApplied, 
  onToggleSave, 
  onApply,
  onJobClick,
  onBack,
  isLoggedIn,
  onNavigateToAuth
}: JobDetailsProps) {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const similarJobs = mockJobs.filter(j => j.id !== job.id).slice(0, 4);

  const handleApply = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
      return;
    }
    onApply(job.id);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `Check out this job: ${job.title} at ${job.company}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Jobs
        </Button>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 mb-6"
          style={{
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={job.logo}
              alt={job.company}
              className="w-20 h-20 rounded-xl object-cover"
            />
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="mb-2">{job.title}</h1>
                  <div className="flex items-center gap-2 text-slate-600 mb-3">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg">{job.company}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-xs text-slate-500">Job Type</p>
                    <p>{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-slate-500">Experience</p>
                    <p>{job.experience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-500">Salary</p>
                    <p>{job.salary}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleApply}
                    disabled={isApplied}
                    className={`gap-2 h-12 px-8 ${
                      isApplied
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    }`}
                    style={{
                      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Applied Successfully
                      </>
                    ) : (
                      'Apply Now'
                    )}
                  </Button>
                </motion.div>

                <Button
                  onClick={() => onToggleSave(job.id)}
                  variant="outline"
                  className="gap-2 h-12 px-6"
                >
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="w-5 h-5" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-5 h-5" />
                      Save Job
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="gap-2 h-12 px-6"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <h2 className="mb-4">Job Description</h2>
              <p className="text-slate-700 leading-relaxed">{job.description}</p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <h2 className="mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                    </div>
                    <span className="text-slate-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <h2 className="mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
            >
              <h3 className="mb-4">Benefits & Perks</h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Apply */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <h3 className="mb-4">Quick Apply</h3>
              <p className="text-sm text-slate-600 mb-4">
                Submit your application in just one click with your saved profile.
              </p>
              <Button
                onClick={handleApply}
                disabled={isApplied}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isApplied ? 'Already Applied' : 'Apply Now'}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Similar Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="mb-6">Similar Jobs</h2>
          <Carousel>
            {similarJobs.map((similarJob) => (
              <div key={similarJob.id} className="px-2">
                <motion.div
                  whileHover={{ y: -5 }}
                  onClick={() => onJobClick(similarJob)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer h-full"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <img
                    src={similarJob.logo}
                    alt={similarJob.company}
                    className="w-12 h-12 rounded-lg object-cover mb-4"
                  />
                  <h3 className="mb-2 line-clamp-2">{similarJob.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{similarJob.company}</p>
                  <div className="flex items-center text-sm text-slate-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {similarJob.location}
                  </div>
                  <div className="text-sm text-blue-600">{similarJob.salary}</div>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
      {showLoginPrompt && (
        <LoginPrompt
          isOpen={showLoginPrompt}
          onClose={() => setShowLoginPrompt(false)}
          onNavigateToAuth={onNavigateToAuth}
        />
      )}
    </div>
  );
}