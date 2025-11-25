import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Edit, Plus, Download, Mail, Phone, MapPin, Calendar,
  Briefcase, GraduationCap, Award, Code, FileText, CheckCircle, Upload, X
} from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
}

interface Skill {
  id: string;
  name: string;
  level: number;
}

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  summary: string;
}

export function ProfileSection() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+977 9812345678',
    location: 'Kathmandu, Nepal',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    summary: 'Passionate software developer with 5+ years of experience in building modern web applications. Expertise in React, TypeScript, and Node.js. Looking for challenging opportunities to create impactful solutions.'
  });

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Nepal',
      location: 'Kathmandu, Nepal',
      startDate: '2021-01',
      endDate: '',
      current: true,
      description: 'Leading frontend development team, building scalable React applications, mentoring junior developers.'
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Digital Solutions',
      location: 'Lalitpur, Nepal',
      startDate: '2019-06',
      endDate: '2020-12',
      current: false,
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design and backend teams.'
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      degree: 'Bachelor of Computer Science',
      institution: 'Tribhuvan University',
      location: 'Kathmandu, Nepal',
      year: '2019'
    }
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'React.js', level: 90 },
    { id: '2', name: 'TypeScript', level: 85 },
    { id: '3', name: 'Node.js', level: 80 },
    { id: '4', name: 'JavaScript', level: 95 },
    { id: '5', name: 'CSS/Tailwind', level: 90 },
    { id: '6', name: 'Git', level: 85 }
  ]);

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      id: '2',
      title: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2022'
    }
  ]);

  // Edit states
  const [editPersonalOpen, setEditPersonalOpen] = useState(false);
  const [editSummaryOpen, setEditSummaryOpen] = useState(false);
  const [editExpOpen, setEditExpOpen] = useState(false);
  const [editEduOpen, setEditEduOpen] = useState(false);
  const [editSkillOpen, setEditSkillOpen] = useState(false);
  const [editAchievementOpen, setEditAchievementOpen] = useState(false);

  // Temp form states
  const [tempPersonal, setTempPersonal] = useState<ProfileData>(profileData);
  const [tempSummary, setTempSummary] = useState(profileData.summary);
  const [tempExp, setTempExp] = useState<Experience>({
    id: '',
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });
  const [tempEdu, setTempEdu] = useState<Education>({
    id: '',
    degree: '',
    institution: '',
    location: '',
    year: ''
  });
  const [tempSkill, setTempSkill] = useState<Skill>({
    id: '',
    name: '',
    level: 50
  });
  const [tempAchievement, setTempAchievement] = useState<Achievement>({
    id: '',
    title: '',
    issuer: '',
    date: ''
  });

  const [editingExpId, setEditingExpId] = useState<string | null>(null);
  const [editingEduId, setEditingEduId] = useState<string | null>(null);
  const [editingSkillId, setEditingSkillId] = useState<string | null>(null);
  const [editingAchievementId, setEditingAchievementId] = useState<string | null>(null);

  // Handlers
  const handleSavePersonal = () => {
    setProfileData(tempPersonal);
    setEditPersonalOpen(false);
  };

  const handleSaveSummary = () => {
    setProfileData({ ...profileData, summary: tempSummary });
    setEditSummaryOpen(false);
  };

  const handleSaveExperience = () => {
    if (editingExpId) {
      setExperiences(experiences.map(exp => 
        exp.id === editingExpId ? tempExp : exp
      ));
    } else {
      setExperiences([...experiences, { ...tempExp, id: Date.now().toString() }]);
    }
    setEditExpOpen(false);
    setEditingExpId(null);
    setTempExp({
      id: '',
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    });
  };

  const handleEditExperience = (exp: Experience) => {
    setTempExp(exp);
    setEditingExpId(exp.id);
    setEditExpOpen(true);
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const handleSaveEducation = () => {
    if (editingEduId) {
      setEducation(education.map(edu => 
        edu.id === editingEduId ? tempEdu : edu
      ));
    } else {
      setEducation([...education, { ...tempEdu, id: Date.now().toString() }]);
    }
    setEditEduOpen(false);
    setEditingEduId(null);
    setTempEdu({
      id: '',
      degree: '',
      institution: '',
      location: '',
      year: ''
    });
  };

  const handleEditEducation = (edu: Education) => {
    setTempEdu(edu);
    setEditingEduId(edu.id);
    setEditEduOpen(true);
  };

  const handleDeleteEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleSaveSkill = () => {
    if (editingSkillId) {
      setSkills(skills.map(skill => 
        skill.id === editingSkillId ? tempSkill : skill
      ));
    } else {
      setSkills([...skills, { ...tempSkill, id: Date.now().toString() }]);
    }
    setEditSkillOpen(false);
    setEditingSkillId(null);
    setTempSkill({
      id: '',
      name: '',
      level: 50
    });
  };

  const handleEditSkill = (skill: Skill) => {
    setTempSkill(skill);
    setEditingSkillId(skill.id);
    setEditSkillOpen(true);
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleSaveAchievement = () => {
    if (editingAchievementId) {
      setAchievements(achievements.map(ach => 
        ach.id === editingAchievementId ? tempAchievement : ach
      ));
    } else {
      setAchievements([...achievements, { ...tempAchievement, id: Date.now().toString() }]);
    }
    setEditAchievementOpen(false);
    setEditingAchievementId(null);
    setTempAchievement({
      id: '',
      title: '',
      issuer: '',
      date: ''
    });
  };

  const handleEditAchievement = (ach: Achievement) => {
    setTempAchievement(ach);
    setEditingAchievementId(ach.id);
    setEditAchievementOpen(true);
  };

  const handleDeleteAchievement = (id: string) => {
    setAchievements(achievements.filter(ach => ach.id !== id));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempPersonal({ ...tempPersonal, photo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoUrl = (url: string) => {
    setTempPersonal({ ...tempPersonal, photo: url });
  };

  const handleDownloadCV = () => {
    alert('CV download feature - In production, this would generate a PDF of your profile');
  };

  return (
    <div className="space-y-6">
      {/* Header with Download Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2>My CV Profile</h2>
          <p className="text-slate-600">Complete your profile to stand out</p>
        </div>
        <Button
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </div>

      {/* Personal Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <h3>Personal Information</h3>
          <Dialog open={editPersonalOpen} onOpenChange={setEditPersonalOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => setTempPersonal(profileData)}
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Edit Personal Information</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {/* Photo Upload */}
                <div>
                  <Label>Profile Photo</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={tempPersonal.photo}
                      alt="Profile"
                      className="w-20 h-20 rounded-xl object-cover border-2 border-slate-200"
                    />
                    <div className="flex-1 space-y-2">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="cursor-pointer"
                      />
                      <div className="flex gap-2">
                        <Input
                          placeholder="Or paste image URL"
                          value={tempPersonal.photo}
                          onChange={(e) => handlePhotoUrl(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Full Name</Label>
                  <Input 
                    placeholder="Full Name" 
                    value={tempPersonal.name}
                    onChange={(e) => setTempPersonal({...tempPersonal, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input 
                    type="email"
                    placeholder="Email" 
                    value={tempPersonal.email}
                    onChange={(e) => setTempPersonal({...tempPersonal, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input 
                    placeholder="Phone" 
                    value={tempPersonal.phone}
                    onChange={(e) => setTempPersonal({...tempPersonal, phone: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input 
                    placeholder="Location" 
                    value={tempPersonal.location}
                    onChange={(e) => setTempPersonal({...tempPersonal, location: e.target.value})}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSavePersonal}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setEditPersonalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative">
            <img
              src={profileData.photo}
              alt={profileData.name}
              className="w-32 h-32 rounded-2xl object-cover border-2 border-slate-200"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h2>{profileData.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{profileData.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm">{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Professional Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3>Professional Summary</h3>
          </div>
          <Dialog open={editSummaryOpen} onOpenChange={setEditSummaryOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => setTempSummary(profileData.summary)}
              >
                <Edit className="w-4 h-4" />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Professional Summary</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <Textarea 
                  placeholder="Write about your professional background..."
                  value={tempSummary}
                  onChange={(e) => setTempSummary(e.target.value)}
                  rows={6}
                />
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveSummary}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setEditSummaryOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-slate-700 leading-relaxed">{profileData.summary}</p>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3>Work Experience</h3>
          </div>
          <Dialog open={editExpOpen} onOpenChange={setEditExpOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => {
                  setEditingExpId(null);
                  setTempExp({
                    id: '',
                    title: '',
                    company: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    current: false,
                    description: ''
                  });
                }}
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingExpId ? 'Edit' : 'Add'} Work Experience</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Job Title</Label>
                  <Input 
                    placeholder="e.g. Senior Frontend Developer"
                    value={tempExp.title}
                    onChange={(e) => setTempExp({...tempExp, title: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Company</Label>
                  <Input 
                    placeholder="e.g. TechCorp Nepal"
                    value={tempExp.company}
                    onChange={(e) => setTempExp({...tempExp, company: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input 
                    placeholder="e.g. Kathmandu, Nepal"
                    value={tempExp.location}
                    onChange={(e) => setTempExp({...tempExp, location: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Start Date</Label>
                    <Input 
                      type="month"
                      value={tempExp.startDate}
                      onChange={(e) => setTempExp({...tempExp, startDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input 
                      type="month"
                      value={tempExp.endDate}
                      onChange={(e) => setTempExp({...tempExp, endDate: e.target.value})}
                      disabled={tempExp.current}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="current"
                    checked={tempExp.current}
                    onChange={(e) => setTempExp({...tempExp, current: e.target.checked, endDate: ''})}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <Label htmlFor="current" className="cursor-pointer">I currently work here</Label>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea 
                    placeholder="Describe your responsibilities and achievements..."
                    value={tempExp.description}
                    onChange={(e) => setTempExp({...tempExp, description: e.target.value})}
                    rows={4}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveExperience}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {editingExpId ? 'Update' : 'Add'} Experience
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setEditExpOpen(false);
                      setEditingExpId(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 border-l-2 border-blue-200">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4>{exp.title}</h4>
                  <p className="text-slate-600">{exp.company}</p>
                </div>
                <div className="flex gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleEditExperience(exp)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteExperience(exp.id)}
                  >
                    <X className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p className="text-slate-700 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h3>Education</h3>
          </div>
          <Dialog open={editEduOpen} onOpenChange={setEditEduOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => {
                  setEditingEduId(null);
                  setTempEdu({
                    id: '',
                    degree: '',
                    institution: '',
                    location: '',
                    year: ''
                  });
                }}
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingEduId ? 'Edit' : 'Add'} Education</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Degree</Label>
                  <Input 
                    placeholder="e.g. Bachelor of Computer Science"
                    value={tempEdu.degree}
                    onChange={(e) => setTempEdu({...tempEdu, degree: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Institution</Label>
                  <Input 
                    placeholder="e.g. Tribhuvan University"
                    value={tempEdu.institution}
                    onChange={(e) => setTempEdu({...tempEdu, institution: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input 
                    placeholder="e.g. Kathmandu, Nepal"
                    value={tempEdu.location}
                    onChange={(e) => setTempEdu({...tempEdu, location: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Year</Label>
                  <Input 
                    placeholder="e.g. 2019"
                    value={tempEdu.year}
                    onChange={(e) => setTempEdu({...tempEdu, year: e.target.value})}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveEducation}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {editingEduId ? 'Update' : 'Add'} Education
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setEditEduOpen(false);
                      setEditingEduId(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="flex items-start justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <h4>{edu.degree}</h4>
                <p className="text-slate-600">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {edu.year}
                  </span>
                </div>
              </div>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleEditEducation(edu)}
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleDeleteEducation(edu.id)}
                >
                  <X className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            <h3>Skills</h3>
          </div>
          <Dialog open={editSkillOpen} onOpenChange={setEditSkillOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => {
                  setEditingSkillId(null);
                  setTempSkill({
                    id: '',
                    name: '',
                    level: 50
                  });
                }}
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingSkillId ? 'Edit' : 'Add'} Skill</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Skill Name</Label>
                  <Input 
                    placeholder="e.g. React.js"
                    value={tempSkill.name}
                    onChange={(e) => setTempSkill({...tempSkill, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Proficiency Level: {tempSkill.level}%</Label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={tempSkill.level}
                    onChange={(e) => setTempSkill({...tempSkill, level: parseInt(e.target.value)})}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveSkill}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {editingSkillId ? 'Update' : 'Add'} Skill
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setEditSkillOpen(false);
                      setEditingSkillId(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-700">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-blue-600">{skill.level}%</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => handleEditSkill(skill)}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => handleDeleteSkill(skill.id)}
                  >
                    <X className="w-3 h-3 text-red-500" />
                  </Button>
                </div>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications & Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl p-6 border border-slate-200"
        style={{
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600" />
            <h3>Certifications & Achievements</h3>
          </div>
          <Dialog open={editAchievementOpen} onOpenChange={setEditAchievementOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => {
                  setEditingAchievementId(null);
                  setTempAchievement({
                    id: '',
                    title: '',
                    issuer: '',
                    date: ''
                  });
                }}
              >
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingAchievementId ? 'Edit' : 'Add'} Certification/Achievement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Label>Title</Label>
                  <Input 
                    placeholder="e.g. AWS Certified Developer"
                    value={tempAchievement.title}
                    onChange={(e) => setTempAchievement({...tempAchievement, title: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Issuer/Organization</Label>
                  <Input 
                    placeholder="e.g. Amazon Web Services"
                    value={tempAchievement.issuer}
                    onChange={(e) => setTempAchievement({...tempAchievement, issuer: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Date/Year</Label>
                  <Input 
                    placeholder="e.g. 2023"
                    value={tempAchievement.date}
                    onChange={(e) => setTempAchievement({...tempAchievement, date: e.target.value})}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleSaveAchievement}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {editingAchievementId ? 'Update' : 'Add'} Achievement
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setEditAchievementOpen(false);
                      setEditingAchievementId(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="mb-1">{achievement.title}</h4>
                <p className="text-sm text-slate-600">{achievement.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">{achievement.date}</p>
              </div>
              <div className="flex flex-col gap-1">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => handleEditAchievement(achievement)}
                >
                  <Edit className="w-3 h-3" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => handleDeleteAchievement(achievement.id)}
                >
                  <X className="w-3 h-3 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
