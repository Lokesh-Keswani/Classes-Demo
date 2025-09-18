export interface Announcement {
  _id?: string;
  title: string;
  category: string;
  content: string;
  status: 'Draft' | 'Published' | 'Scheduled';
  publishDate?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  
  // Category-specific fields
  // Exam Updates fields
  examType?: string;
  class?: string;
  examDate?: string;
  reportingTime?: string;
  additionalInfo?: string;
  
  // Holidays fields
  holidayType?: string;
  affectedClasses?: string;
  startDate?: string;
  endDate?: string;
  importantNotes?: string;
  reopeningInfo?: string;
  
  // Events fields
  eventType?: string;
  targetAudience?: string;
  eventDate?: string;
  eventTime?: string;
  venue?: string;
  participationDetails?: string;
  instructions?: string;
  
  // Academic fields
  updateType?: string;
  effectiveDate?: string;
  priority?: string;
  subject?: string;
  implementationDetails?: string;
  studentAction?: string;
}

// Mock data import
import { mockAnnouncements } from '../data/announcements';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const announcementsApi = {
  // Get all announcements
  getAll: async (): Promise<Announcement[]> => {
    await delay(500); // Simulate API delay
    return [...mockAnnouncements];
  },

  // Get announcement by ID
  getById: async (id: string): Promise<Announcement> => {
    await delay(300); // Simulate API delay
    const announcement = mockAnnouncements.find(a => a._id === id);
    if (!announcement) {
      throw new Error('Announcement not found');
    }
    return announcement;
  },

  // Create new announcement
  create: async (announcement: Omit<Announcement, '_id' | 'createdAt' | 'updatedAt'>): Promise<Announcement> => {
    await delay(500); // Simulate API delay
    const newAnnouncement: Announcement = {
      ...announcement,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true
    };
    mockAnnouncements.push(newAnnouncement);
    return newAnnouncement;
  },

  // Update announcement
  update: async (id: string, announcement: Partial<Announcement>): Promise<Announcement> => {
    await delay(400); // Simulate API delay
    const index = mockAnnouncements.findIndex(a => a._id === id);
    if (index === -1) {
      throw new Error('Announcement not found');
    }
    mockAnnouncements[index] = {
      ...mockAnnouncements[index],
      ...announcement,
      updatedAt: new Date().toISOString()
    };
    return mockAnnouncements[index];
  },

  // Delete announcement
  delete: async (id: string): Promise<void> => {
    await delay(300); // Simulate API delay
    const index = mockAnnouncements.findIndex(a => a._id === id);
    if (index === -1) {
      throw new Error('Announcement not found');
    }
    mockAnnouncements.splice(index, 1);
  },

  // Get dynamic categories
  getCategories: async (): Promise<string[]> => {
    await delay(200); // Simulate API delay
    const categories = [...new Set(mockAnnouncements.map(a => a.category))];
    return categories;
  },
};
