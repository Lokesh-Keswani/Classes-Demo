export interface Achievement {
  _id?: string;
  type: 'Our Star Performers' | 'Recent Milestones' | 'Success Stories' | 'Awards & Recognition';
  studentName?: string;
  percentage?: string;
  year: string;
  details: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Other';
  // Additional fields for different types
  title?: string; // For Recent Milestones and Awards & Recognition
  institution?: string; // For Awards & Recognition
  rank?: string; // For Our Star Performers
  exam?: string; // For Our Star Performers
  quote?: string; // For Success Stories
  testimonial?: string; // For Success Stories
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data import
import { mockAchievements } from '../data/achievements';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const achievementsApi = {
  // Get all achievements
  getAll: async (): Promise<Achievement[]> => {
    await delay(500); // Simulate API delay
    return [...mockAchievements];
  },

  // Get achievement by ID
  getById: async (id: string): Promise<Achievement> => {
    await delay(300); // Simulate API delay
    const achievement = mockAchievements.find(a => a._id === id);
    if (!achievement) {
      throw new Error('Achievement not found');
    }
    return achievement;
  },

  // Create new achievement
  create: async (achievement: Omit<Achievement, '_id' | 'createdAt' | 'updatedAt'>): Promise<Achievement> => {
    await delay(500); // Simulate API delay
    const newAchievement: Achievement = {
      ...achievement,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };
    mockAchievements.push(newAchievement);
    return newAchievement;
  },

  // Update achievement
  update: async (id: string, achievement: Partial<Achievement>): Promise<Achievement> => {
    await delay(400); // Simulate API delay
    const index = mockAchievements.findIndex(a => a._id === id);
    if (index === -1) {
      throw new Error('Achievement not found');
    }
    mockAchievements[index] = {
      ...mockAchievements[index],
      ...achievement,
      updatedAt: new Date().toISOString()
    };
    return mockAchievements[index];
  },

  // Delete achievement
  delete: async (id: string): Promise<void> => {
    await delay(300); // Simulate API delay
    const index = mockAchievements.findIndex(a => a._id === id);
    if (index === -1) {
      throw new Error('Achievement not found');
    }
    mockAchievements.splice(index, 1);
  },
};
