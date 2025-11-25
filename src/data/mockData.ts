import { Job } from '../App';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Nepal',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=200&fit=crop',
    location: 'Kathmandu, Nepal',
    salary: 'NPR 80,000 - 120,000',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'We are looking for an experienced Frontend Developer to join our dynamic team. You will be responsible for building modern, responsive web applications using React and TypeScript.',
    responsibilities: [
      'Design and implement user-facing features using React.js',
      'Build reusable components and front-end libraries',
      'Translate designs and wireframes into high-quality code',
      'Optimize applications for maximum speed and scalability',
      'Collaborate with backend developers and designers'
    ],
    requirements: [
      '3+ years of experience with React.js',
      'Strong proficiency in JavaScript/TypeScript',
      'Experience with state management (Redux, Context API)',
      'Familiarity with RESTful APIs',
      'Understanding of modern CSS frameworks (Tailwind, etc.)',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Flexible working hours',
      'Remote work options',
      'Professional development budget',
      'Annual team retreats'
    ],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'Design Studio',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
    location: 'Pokhara, Nepal',
    salary: 'NPR 60,000 - 90,000',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Join our creative team to design beautiful and intuitive user experiences for web and mobile applications.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with developers to implement designs',
      'Maintain design systems and style guides',
      'Present design concepts to stakeholders'
    ],
    requirements: [
      '2+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio demonstrating design skills',
      'Understanding of user-centered design principles',
      'Excellent communication skills',
      'Experience with design systems'
    ],
    benefits: [
      'Creative work environment',
      'Latest design tools and software',
      'Flexible hours',
      'Health insurance',
      'Skill development opportunities'
    ],
    posted: '1 day ago'
  },
  {
    id: '3',
    title: 'Backend Developer (Node.js)',
    company: 'Cloud Solutions',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop',
    location: 'Lalitpur, Nepal',
    salary: 'NPR 70,000 - 100,000',
    type: 'Full-time',
    experience: '2-5 years',
    description: 'We need a skilled Backend Developer to build and maintain scalable server-side applications using Node.js and related technologies.',
    responsibilities: [
      'Develop and maintain RESTful APIs',
      'Design and optimize database schemas',
      'Implement security and data protection measures',
      'Integrate with third-party services',
      'Write clean, maintainable code with tests'
    ],
    requirements: [
      '2+ years of Node.js development experience',
      'Strong knowledge of Express.js or similar frameworks',
      'Experience with MongoDB, PostgreSQL, or MySQL',
      'Understanding of microservices architecture',
      'Familiarity with Docker and cloud platforms',
      'Good problem-solving skills'
    ],
    benefits: [
      'Competitive compensation',
      'Work from home options',
      'Health and life insurance',
      'Learning and development budget',
      'Modern tech stack'
    ],
    posted: '3 days ago'
  },
  {
    id: '4',
    title: 'Digital Marketing Manager',
    company: 'Growth Agency',
    logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=200&fit=crop',
    location: 'Kathmandu, Nepal',
    salary: 'NPR 50,000 - 80,000',
    type: 'Full-time',
    experience: '3-6 years',
    description: 'Lead our digital marketing efforts and drive growth through strategic campaigns across multiple channels.',
    responsibilities: [
      'Develop and execute digital marketing strategies',
      'Manage social media campaigns and content',
      'Analyze campaign performance and ROI',
      'Lead SEO and SEM initiatives',
      'Manage marketing budget and resources'
    ],
    requirements: [
      '3+ years in digital marketing',
      'Experience with Google Ads and Facebook Ads',
      'Strong analytical skills',
      'Knowledge of SEO best practices',
      'Excellent content writing skills',
      'Marketing certifications preferred'
    ],
    benefits: [
      'Performance bonuses',
      'Health insurance',
      'Flexible working arrangements',
      'Professional growth opportunities',
      'Dynamic team environment'
    ],
    posted: '5 days ago'
  },
  {
    id: '5',
    title: 'Mobile App Developer (Flutter)',
    company: 'AppTech Nepal',
    logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop',
    location: 'Kathmandu, Nepal',
    salary: 'NPR 75,000 - 110,000',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build beautiful, high-performance mobile applications using Flutter for iOS and Android platforms.',
    responsibilities: [
      'Develop cross-platform mobile applications',
      'Implement pixel-perfect UI designs',
      'Integrate with REST APIs and backend services',
      'Optimize app performance',
      'Collaborate with design and backend teams'
    ],
    requirements: [
      '2+ years of Flutter development experience',
      'Strong knowledge of Dart programming',
      'Experience with state management (Provider, Bloc)',
      'Published apps on App Store and Play Store',
      'Understanding of mobile UI/UX principles',
      'Good communication skills'
    ],
    benefits: [
      'Competitive salary package',
      'Latest devices for testing',
      'Remote work flexibility',
      'Health insurance',
      'Skill enhancement programs'
    ],
    posted: '1 week ago'
  },
  {
    id: '6',
    title: 'Data Analyst',
    company: 'Analytics Pro',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    location: 'Kathmandu, Nepal',
    salary: 'NPR 55,000 - 85,000',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Analyze data to provide actionable insights and support business decision-making.',
    responsibilities: [
      'Collect and analyze business data',
      'Create dashboards and reports',
      'Identify trends and patterns',
      'Present findings to stakeholders',
      'Support data-driven decision making'
    ],
    requirements: [
      '1+ years of data analysis experience',
      'Proficiency in SQL and Excel',
      'Experience with Tableau or Power BI',
      'Strong analytical and problem-solving skills',
      'Knowledge of statistics',
      'Bachelor\'s degree in related field'
    ],
    benefits: [
      'Learning opportunities',
      'Health insurance',
      'Flexible schedule',
      'Performance incentives',
      'Career growth path'
    ],
    posted: '4 days ago'
  },
  {
    id: '7',
    title: 'Product Manager',
    company: 'Innovate Labs',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
    location: 'Lalitpur, Nepal',
    salary: 'NPR 90,000 - 140,000',
    type: 'Full-time',
    experience: '4-7 years',
    description: 'Lead product strategy and execution for our suite of innovative digital products.',
    responsibilities: [
      'Define product vision and roadmap',
      'Gather and prioritize requirements',
      'Work with engineering and design teams',
      'Conduct market research',
      'Track product metrics and KPIs'
    ],
    requirements: [
      '4+ years of product management experience',
      'Strong technical background',
      'Experience with Agile methodologies',
      'Excellent communication skills',
      'Data-driven decision making',
      'MBA or related degree preferred'
    ],
    benefits: [
      'High salary potential',
      'Stock options',
      'Health insurance',
      'Flexible work environment',
      'Leadership opportunities'
    ],
    posted: '2 days ago'
  },
  {
    id: '8',
    title: 'DevOps Engineer',
    company: 'Infrastructure Inc',
    logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop',
    location: 'Kathmandu, Nepal',
    salary: 'NPR 85,000 - 125,000',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Build and maintain CI/CD pipelines and cloud infrastructure to support our development teams.',
    responsibilities: [
      'Manage cloud infrastructure (AWS/Azure)',
      'Implement CI/CD pipelines',
      'Automate deployment processes',
      'Monitor system performance',
      'Ensure security and compliance'
    ],
    requirements: [
      '3+ years of DevOps experience',
      'Strong knowledge of AWS or Azure',
      'Experience with Docker and Kubernetes',
      'Proficiency in scripting (Python, Bash)',
      'Understanding of networking and security',
      'Good troubleshooting skills'
    ],
    benefits: [
      'Cutting-edge technology',
      'Certification support',
      'Health insurance',
      'Remote work options',
      'Competitive compensation'
    ],
    posted: '6 days ago'
  }
];

export const jobCategories = [
  { name: 'Technology', icon: '💻', count: 245, color: 'from-blue-500 to-cyan-500' },
  { name: 'Design', icon: '🎨', count: 128, color: 'from-purple-500 to-pink-500' },
  { name: 'Marketing', icon: '📱', count: 167, color: 'from-orange-500 to-red-500' },
  { name: 'Finance', icon: '💰', count: 89, color: 'from-green-500 to-emerald-500' },
  { name: 'Healthcare', icon: '⚕️', count: 143, color: 'from-rose-500 to-pink-500' },
  { name: 'Education', icon: '📚', count: 102, color: 'from-indigo-500 to-purple-500' },
  { name: 'Sales', icon: '📊', count: 134, color: 'from-yellow-500 to-orange-500' },
  { name: 'Engineering', icon: '⚙️', count: 198, color: 'from-slate-500 to-gray-500' }
];

export const popularCompanies = [
  {
    name: 'TechCorp Nepal',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=200&fit=crop',
    openings: 12,
    industry: 'Technology'
  },
  {
    name: 'Design Studio',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop',
    openings: 8,
    industry: 'Creative'
  },
  {
    name: 'Cloud Solutions',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop',
    openings: 15,
    industry: 'Technology'
  },
  {
    name: 'Growth Agency',
    logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=200&fit=crop',
    openings: 6,
    industry: 'Marketing'
  },
  {
    name: 'AppTech Nepal',
    logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop',
    openings: 10,
    industry: 'Technology'
  },
  {
    name: 'Analytics Pro',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop',
    openings: 5,
    industry: 'Analytics'
  }
];
