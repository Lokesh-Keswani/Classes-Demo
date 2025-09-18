export interface Course {
  _id?: string;
  title: string;
  batchSize: string;
  subjects: string[];
  description: string;
  features: string[];
  fees: string;
  rating: number;
  students: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data import
import { mockCourses } from '../data/courses';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const coursesApi = {
  // Get all courses
  getAll: async (): Promise<Course[]> => {
    await delay(500); // Simulate API delay
    return [...mockCourses];
  },

  // Get course by ID
  getById: async (id: string): Promise<Course> => {
    await delay(300); // Simulate API delay
    const course = mockCourses.find(c => c._id === id);
    if (!course) {
      throw new Error('Course not found');
    }
    return course;
  },

  // Create new course
  create: async (course: Omit<Course, '_id' | 'createdAt' | 'updatedAt'>): Promise<Course> => {
    await delay(500); // Simulate API delay
    const newCourse: Course = {
      ...course,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };
    mockCourses.push(newCourse);
    return newCourse;
  },

  // Update course
  update: async (id: string, course: Partial<Course>): Promise<Course> => {
    await delay(400); // Simulate API delay
    const index = mockCourses.findIndex(c => c._id === id);
    if (index === -1) {
      throw new Error('Course not found');
    }
    mockCourses[index] = {
      ...mockCourses[index],
      ...course,
      updatedAt: new Date().toISOString()
    };
    return mockCourses[index];
  },

  // Delete course
  delete: async (id: string): Promise<void> => {
    await delay(300); // Simulate API delay
    const index = mockCourses.findIndex(c => c._id === id);
    if (index === -1) {
      throw new Error('Course not found');
    }
    mockCourses.splice(index, 1);
  },
};
