import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, BookmarkCheck, Upload, User, 
  TrendingUp, Award, Target, MapPin, Clock, FileText
} from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Job } from '../App';
import { mockJobs } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ProfileSection } from './ProfileSection';
import { SponsoredContent } from './SponsoredContent';

interface JobSeekerDashboardProps {
  savedJobs: string[];
  appliedJobs: string[];
  onJobClick: (job: Job) => void;
  onToggleSave: (jobId: string) => void;
}

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'];

export function JobSeekerDashboard({ savedJobs, appliedJobs, onJobClick, onToggleSave }: JobSeekerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'applied' | 'saved' | 'profile'>('overview');

  const savedJobsData = mockJobs.filter(job => savedJobs.includes(job.id));
  const appliedJobsData = mockJobs.filter(job => appliedJobs.includes(job.id));
  const recommendedJobs = mockJobs.slice(0, 3);

  const profileCompleteness = 75;

  const applicationStats = [
    { name: 'Applied', value: appliedJobs.length },
    { name: 'In Review', value: Math.floor(appliedJobs.length * 0.6) },
    { name: 'Interviews', value: Math.floor(appliedJobs.length * 0.3) },
    { name: 'Offers', value: Math.floor(appliedJobs.length * 0.1) }
  ];

  const activityData = [
    { month: 'Jan', applications: 4 },
    { month: 'Feb', applications: 7 },
    { month: 'Mar', applications: 5 },
    { month: 'Apr', applications: appliedJobs.length || 8 }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">My Dashboard</h1>
          <p className="text-slate-600">Track your job search progress</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          <Button
            onClick={() => setActiveTab('overview')}
            variant={activeTab === 'overview' ? 'default' : 'outline'}
            className={activeTab === 'overview' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Overview
          </Button>
          <Button
            onClick={() => setActiveTab('applied')}
            variant={activeTab === 'applied' ? 'default' : 'outline'}
            className={activeTab === 'applied' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Applied ({appliedJobs.length})
          </Button>
          <Button
            onClick={() => setActiveTab('saved')}
            variant={activeTab === 'saved' ? 'default' : 'outline'}
            className={activeTab === 'saved' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <BookmarkCheck className="w-4 h-4 mr-2" />
            Saved ({savedJobs.length})
          </Button>
          <Button
            onClick={() => setActiveTab('profile')}
            variant={activeTab === 'profile' ? 'default' : 'outline'}
            className={activeTab === 'profile' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white"
                style={{
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                }}
              >
                <Briefcase className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">{appliedJobs.length}</div>
                <p className="text-blue-100">Applications</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"
                style={{
                  boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)'
                }}
              >
                <BookmarkCheck className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">{savedJobs.length}</div>
                <p className="text-purple-100">Saved Jobs</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white"
                style={{
                  boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)'
                }}
              >
                <Award className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">{Math.floor(appliedJobs.length * 0.3)}</div>
                <p className="text-pink-100">Interviews</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white"
                style={{
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.3)'
                }}
              >
                <Target className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">{profileCompleteness}%</div>
                <p className="text-orange-100">Profile Complete</p>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <h3 className="mb-4">Application Activity</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar dataKey="applications" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <h3 className="mb-4">Application Status</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={applicationStats}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {applicationStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {applicationStats.map((stat, index) => (
                    <div key={stat.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm text-slate-600">{stat.name}: {stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* AI Recommended Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2>AI Recommended Jobs</h2>
                  <p className="text-sm text-slate-600">Based on your profile and activity</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {recommendedJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => onJobClick(job)}
                    className="bg-white rounded-xl p-4 cursor-pointer border border-transparent hover:border-blue-300 transition-all"
                  >
                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg mb-3" />
                    <h3 className="mb-2 line-clamp-2">{job.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{job.company}</p>
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-3 h-3 mr-1" />
                      {job.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Applied Jobs Tab */}
        {activeTab === 'applied' && (
          <div className="space-y-4">
            {appliedJobsData.length > 0 ? (
              appliedJobsData.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onJobClick(job)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer hover:border-blue-300 transition-all"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-xl" />
                    <div className="flex-1">
                      <h3 className="mb-1">{job.title}</h3>
                      <p className="text-slate-600 mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Applied {job.posted}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                      In Review
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="mb-2">No applications yet</h3>
                <p className="text-slate-600 mb-4">Start applying to jobs to see them here</p>
              </div>
            )}
          </div>
        )}

        {/* Saved Jobs Tab */}
        {activeTab === 'saved' && (
          <div className="space-y-4">
            {savedJobsData.length > 0 ? (
              savedJobsData.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200"
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-xl" />
                    <div className="flex-1">
                      <h3 className="mb-1">{job.title}</h3>
                      <p className="text-slate-600 mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="text-blue-600">{job.salary}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => onJobClick(job)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600"
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(job.id);
                          }}
                          variant="outline"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <BookmarkCheck className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="mb-2">No saved jobs</h3>
                <p className="text-slate-600 mb-4">Save jobs you're interested in to review later</p>
              </div>
            )}
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <ProfileSection />
        )}
      </div>
    </div>
  );
}