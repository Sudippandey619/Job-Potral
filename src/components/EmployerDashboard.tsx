import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, Briefcase, Users, Eye, Download, 
  TrendingUp, MessageSquare, Edit, Trash2
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface JobPosting {
  id: string;
  title: string;
  type: string;
  location: string;
  applicants: number;
  views: number;
  posted: string;
  status: 'active' | 'closed';
}

export function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'jobs' | 'applicants' | 'post'>('overview');
  const [showPostDialog, setShowPostDialog] = useState(false);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Kathmandu',
      applicants: 45,
      views: 320,
      posted: '5 days ago',
      status: 'active'
    },
    {
      id: '2',
      title: 'UX Designer',
      type: 'Full-time',
      location: 'Lalitpur',
      applicants: 28,
      views: 215,
      posted: '1 week ago',
      status: 'active'
    },
    {
      id: '3',
      title: 'Backend Developer',
      type: 'Contract',
      location: 'Remote',
      applicants: 62,
      views: 450,
      posted: '2 weeks ago',
      status: 'active'
    }
  ]);

  const statsData = [
    { month: 'Jan', applications: 45, views: 320 },
    { month: 'Feb', applications: 62, views: 450 },
    { month: 'Mar', applications: 38, views: 280 },
    { month: 'Apr', applications: 75, views: 580 }
  ];

  const mockApplicants = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      job: 'Senior Frontend Developer',
      experience: '5 years',
      applied: '2 days ago',
      status: 'Under Review',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      job: 'UX Designer',
      experience: '3 years',
      applied: '3 days ago',
      status: 'Shortlisted',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: '3',
      name: 'Amit Thapa',
      job: 'Backend Developer',
      experience: '4 years',
      applied: '5 days ago',
      status: 'Interview Scheduled',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ];

  const handlePostJob = () => {
    setShowPostDialog(false);
    // Job posting logic would go here
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="mb-2">Employer Dashboard</h1>
            <p className="text-slate-600">Manage your job postings and applicants</p>
          </div>
          <Dialog open={showPostDialog} onOpenChange={setShowPostDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
                <Plus className="w-5 h-5" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Post a New Job</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm text-slate-700 mb-2">Job Title</label>
                  <Input placeholder="e.g. Senior Frontend Developer" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Job Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Location</label>
                    <Input placeholder="e.g. Kathmandu" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Salary Range</label>
                    <Input placeholder="e.g. NPR 80,000 - 120,000" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-700 mb-2">Experience</label>
                    <Input placeholder="e.g. 3-5 years" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-2">Description</label>
                  <Textarea placeholder="Job description..." rows={4} />
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-2">Requirements</label>
                  <Textarea placeholder="List key requirements..." rows={4} />
                </div>
                <Button 
                  onClick={handlePostJob}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  Post Job
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
            onClick={() => setActiveTab('jobs')}
            variant={activeTab === 'jobs' ? 'default' : 'outline'}
            className={activeTab === 'jobs' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            My Jobs ({jobPostings.length})
          </Button>
          <Button
            onClick={() => setActiveTab('applicants')}
            variant={activeTab === 'applicants' ? 'default' : 'outline'}
            className={activeTab === 'applicants' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
          >
            <Users className="w-4 h-4 mr-2" />
            Applicants
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
                <div className="text-3xl mb-1">{jobPostings.length}</div>
                <p className="text-blue-100">Active Jobs</p>
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
                <Users className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">
                  {jobPostings.reduce((acc, job) => acc + job.applicants, 0)}
                </div>
                <p className="text-purple-100">Total Applicants</p>
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
                <Eye className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">
                  {jobPostings.reduce((acc, job) => acc + job.views, 0)}
                </div>
                <p className="text-pink-100">Total Views</p>
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
                <MessageSquare className="w-8 h-8 mb-3" />
                <div className="text-3xl mb-1">12</div>
                <p className="text-orange-100">Interviews</p>
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
                <h3 className="mb-4">Applications Over Time</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={statsData}>
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
                    <Line 
                      type="monotone" 
                      dataKey="applications" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', r: 5 }}
                    />
                  </LineChart>
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
                <h3 className="mb-4">Job Views Analytics</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={statsData}>
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
                    <Bar dataKey="views" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Recent Applicants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-slate-200"
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <h3 className="mb-6">Recent Applicants</h3>
              <div className="space-y-4">
                {mockApplicants.map((applicant) => (
                  <div 
                    key={applicant.id}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src={applicant.avatar} 
                        alt={applicant.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4>{applicant.name}</h4>
                        <p className="text-sm text-slate-600">{applicant.job}</p>
                        <p className="text-xs text-slate-500">{applicant.experience} • Applied {applicant.applied}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">
                        {applicant.status}
                      </span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div className="space-y-4">
            {jobPostings.map((job, index) => (
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
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div>
                        <h3 className="mb-1">{job.title}</h3>
                        <p className="text-sm text-slate-600">{job.type} • {job.location}</p>
                        <p className="text-xs text-slate-500 mt-1">Posted {job.posted}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm">
                        {job.status}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="w-4 h-4" />
                        {job.applicants} applicants
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Eye className="w-4 h-4" />
                        {job.views} views
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                      View Applicants
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Applicants Tab */}
        {activeTab === 'applicants' && (
          <div className="space-y-4">
            {mockApplicants.map((applicant, index) => (
              <motion.div
                key={applicant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={applicant.avatar} 
                      alt={applicant.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="mb-1">{applicant.name}</h3>
                      <p className="text-sm text-slate-600 mb-1">{applicant.job}</p>
                      <p className="text-sm text-slate-500">{applicant.experience}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">
                      {applicant.status}
                    </span>
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Resume
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      Schedule Interview
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
