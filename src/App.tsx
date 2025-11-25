import React, { useState } from 'react';
import { Landing } from './components/Landing';
import { JobListings } from './components/JobListings';
import { JobDetails } from './components/JobDetails';
import { JobSeekerDashboard } from './components/JobSeekerDashboard';
import { EmployerDashboard } from './components/EmployerDashboard';
import { Auth } from './components/Auth';
import { AIAssistant } from './components/AIAssistant';
import { Header } from './components/Header';

export type UserRole = 'jobseeker' | 'employer' | null;

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  posted: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'listings' | 'details' | 'dashboard' | 'employer' | 'auth'>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentPage(role === 'employer' ? 'employer' : 'landing');
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setCurrentPage('details');
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const applyToJob = (jobId: string) => {
    setAppliedJobs(prev => [...new Set([...prev, jobId])]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {currentPage !== 'auth' && (
        <Header
          isLoggedIn={isLoggedIn}
          userRole={userRole}
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
        />
      )}

      {currentPage === 'landing' && (
        <Landing 
          onNavigate={setCurrentPage}
          onJobClick={handleJobClick}
        />
      )}

      {currentPage === 'listings' && (
        <JobListings 
          onJobClick={handleJobClick}
          savedJobs={savedJobs}
          onToggleSave={toggleSaveJob}
          isLoggedIn={isLoggedIn}
          onNavigateToAuth={() => setCurrentPage('auth')}
        />
      )}

      {currentPage === 'details' && selectedJob && (
        <JobDetails
          job={selectedJob}
          isSaved={savedJobs.includes(selectedJob.id)}
          isApplied={appliedJobs.includes(selectedJob.id)}
          onToggleSave={toggleSaveJob}
          onApply={applyToJob}
          onJobClick={handleJobClick}
          onBack={() => setCurrentPage('listings')}
          isLoggedIn={isLoggedIn}
          onNavigateToAuth={() => setCurrentPage('auth')}
        />
      )}

      {currentPage === 'dashboard' && (
        <JobSeekerDashboard
          savedJobs={savedJobs}
          appliedJobs={appliedJobs}
          onJobClick={handleJobClick}
          onToggleSave={toggleSaveJob}
        />
      )}

      {currentPage === 'employer' && (
        <EmployerDashboard />
      )}

      {currentPage === 'auth' && (
        <Auth onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />
      )}

      <AIAssistant currentPage={currentPage} userRole={userRole} />
    </div>
  );
}