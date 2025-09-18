import { Faculty } from '../services/faculty';

export const mockFaculty: Faculty[] = [
  {
    _id: '1',
    name: 'Dr. Rajesh Kumar',
    position: 'Principal & Mathematics Professor',
    subject: 'Mathematics',
    qualification: 'Ph.D. in Mathematics, IIT Delhi',
    experience: '15+ years',
    achievements: [
      'Published 25+ research papers',
      'Former IIT faculty',
      'Mentored 100+ successful JEE aspirants',
      'Award for Excellence in Teaching'
    ],
    bio: 'Dr. Rajesh Kumar brings over 15 years of experience in mathematics education. He has been instrumental in developing innovative teaching methods that have helped hundreds of students excel in competitive exams.',
    rating: 4.9,
    studentsT: 450,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    name: 'Prof. Priya Sharma',
    position: 'Physics Head',
    subject: 'Physics',
    qualification: 'M.Sc. Physics, Delhi University',
    experience: '12+ years',
    achievements: [
      'Former Delhi University faculty',
      'Specialized in Modern Physics',
      'Author of Physics textbooks',
      'Best Teacher Award 2023'
    ],
    bio: 'Prof. Priya Sharma specializes in making complex physics concepts simple and understandable. Her teaching methodology has helped students achieve top ranks in various competitive exams.',
    rating: 4.8,
    studentsT: 380,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '3',
    name: 'Dr. Amit Verma',
    position: 'Chemistry Professor',
    subject: 'Chemistry',
    qualification: 'Ph.D. in Chemistry, BHU',
    experience: '10+ years',
    achievements: [
      'Research in Organic Chemistry',
      'NEET expert',
      'Published in international journals',
      'Innovation in Teaching Award'
    ],
    bio: 'Dr. Amit Verma is known for his expertise in organic and inorganic chemistry. His practical approach to teaching has made chemistry enjoyable for students.',
    rating: 4.7,
    studentsT: 320,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '4',
    name: 'Ms. Sunita Singh',
    position: 'English Language Expert',
    subject: 'English',
    qualification: 'M.A. English, JNU',
    experience: '8+ years',
    achievements: [
      'IELTS certified trainer',
      'Communication skills expert',
      'Creative writing instructor',
      'Student mentor award'
    ],
    bio: 'Ms. Sunita Singh specializes in English language and literature. She helps students develop strong communication skills and excel in language-based exams.',
    rating: 4.6,
    studentsT: 280,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '5',
    name: 'Dr. Anil Gupta',
    position: 'Biology Professor',
    subject: 'Biology',
    qualification: 'Ph.D. in Botany, DU',
    experience: '13+ years',
    achievements: [
      'Botany research specialist',
      'NEET Biology expert',
      'Environmental science advocate',
      'Teaching excellence award'
    ],
    bio: 'Dr. Anil Gupta is passionate about biology education and environmental conservation. His teaching methods make biology concepts easy to understand and remember.',
    rating: 4.8,
    studentsT: 350,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '6',
    name: 'Prof. Meera Joshi',
    position: 'Commerce Head',
    subject: 'Accountancy & Business Studies',
    qualification: 'M.Com, CA, Delhi University',
    experience: '11+ years',
    achievements: [
      'Chartered Accountant',
      'Commerce expert',
      'Industry experience',
      'Student success mentor'
    ],
    bio: 'Prof. Meera Joshi brings real-world business experience to the classroom. Her practical approach helps students understand commerce concepts better.',
    rating: 4.7,
    studentsT: 290,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
];
