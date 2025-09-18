import { Course } from '../services/courses';

export const mockCourses: Course[] = [
  {
    _id: '1',
    title: 'Class 10 CBSE Complete Course',
    batchSize: '25-30 students',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
    description: 'Comprehensive preparation for CBSE Class 10 board exams with experienced faculty and personalized attention.',
    features: [
      'Expert faculty with 10+ years experience',
      'Regular mock tests and assessments',
      'Doubt clearing sessions',
      'Study material and notes provided',
      'Parent-teacher meetings'
    ],
    fees: '₹15,000',
    rating: 4.8,
    students: 156,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '2',
    title: 'Class 12 Science Stream',
    batchSize: '20-25 students',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    description: 'Advanced preparation for Class 12 Science stream with focus on competitive exams.',
    features: [
      'JEE/NEET preparation included',
      'Advanced problem solving techniques',
      'Laboratory practical sessions',
      'Career guidance and counseling',
      'Regular performance tracking'
    ],
    fees: '₹25,000',
    rating: 4.9,
    students: 98,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '3',
    title: 'Class 11 Commerce Stream',
    batchSize: '30-35 students',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
    description: 'Complete Commerce stream preparation with practical business insights.',
    features: [
      'CA Foundation preparation',
      'Case study analysis',
      'Financial literacy workshops',
      'Industry expert sessions',
      'Project-based learning'
    ],
    fees: '₹18,000',
    rating: 4.7,
    students: 124,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '4',
    title: 'Class 9 Foundation Course',
    batchSize: '35-40 students',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
    description: 'Strong foundation building for Class 9 students with interactive learning methods.',
    features: [
      'Conceptual clarity focus',
      'Interactive learning sessions',
      'Regular homework and assignments',
      'Progress reports to parents',
      'Extracurricular activities'
    ],
    fees: '₹12,000',
    rating: 4.6,
    students: 203,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '5',
    title: 'Competitive Exam Preparation',
    batchSize: '15-20 students',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Logical Reasoning', 'General Knowledge'],
    description: 'Intensive preparation for various competitive exams like JEE, NEET, CLAT, etc.',
    features: [
      'Exam-specific strategies',
      'Previous year papers analysis',
      'Time management techniques',
      'Stress management sessions',
      'Mock test series'
    ],
    fees: '₹35,000',
    rating: 4.9,
    students: 67,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    _id: '6',
    title: 'Class 8 Foundation Program',
    batchSize: '30-35 students',
    subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'],
    description: 'Comprehensive foundation program for Class 8 students focusing on conceptual clarity and skill development.',
    features: [
      'Conceptual learning approach',
      'Regular assessments and feedback',
      'Interactive learning sessions',
      'Project-based assignments',
      'Parent-teacher collaboration',
      'Extracurricular skill development'
    ],
    fees: '₹10,000',
    rating: 4.5,
    students: 178,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
];
