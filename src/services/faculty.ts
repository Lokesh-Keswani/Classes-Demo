export interface Faculty {
  _id?: string;
  name: string;
  position: string;
  subject: string;
  qualification: string;
  experience: string;
  achievements: string[];
  bio: string;
  rating: number;
  studentsT: number;
  image?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data import
import { mockFaculty } from '../data/faculty';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const facultyApi = {
  // Get all faculty
  getAll: async (): Promise<Faculty[]> => {
    await delay(500); // Simulate API delay
    return [...mockFaculty];
  },

  // Get faculty by ID
  getById: async (id: string): Promise<Faculty> => {
    await delay(300); // Simulate API delay
    const faculty = mockFaculty.find(f => f._id === id);
    if (!faculty) {
      throw new Error('Faculty not found');
    }
    return faculty;
  },

  // Create new faculty
  create: async (faculty: Omit<Faculty, '_id' | 'createdAt' | 'updatedAt'>): Promise<Faculty> => {
    await delay(500); // Simulate API delay
    const newFaculty: Faculty = {
      ...faculty,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };
    mockFaculty.push(newFaculty);
    return newFaculty;
  },

  // Update faculty
  update: async (id: string, faculty: Partial<Faculty>): Promise<Faculty> => {
    await delay(400); // Simulate API delay
    const index = mockFaculty.findIndex(f => f._id === id);
    if (index === -1) {
      throw new Error('Faculty not found');
    }
    mockFaculty[index] = {
      ...mockFaculty[index],
      ...faculty,
      updatedAt: new Date().toISOString()
    };
    return mockFaculty[index];
  },

  // Delete faculty
  delete: async (id: string): Promise<void> => {
    await delay(300); // Simulate API delay
    const index = mockFaculty.findIndex(f => f._id === id);
    if (index === -1) {
      throw new Error('Faculty not found');
    }
    mockFaculty.splice(index, 1);
  },
};
