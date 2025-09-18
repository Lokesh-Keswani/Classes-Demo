export interface Settings {
  _id?: string;
  instituteName: string;
  contactEmail: string;
  address: string;
  phoneNumber: string;
  whatsappNumber: string;
  heroTagline: string;
  aboutDescription: string;
  createdAt?: string;
  updatedAt?: string;
}

// Mock data import
import { mockSettings } from '../data/settings';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const settingsApi = {
  // Get settings
  get: async (): Promise<Settings> => {
    await delay(300); // Simulate API delay
    return { ...mockSettings };
  },

  // Update settings
  update: async (settings: Partial<Settings>): Promise<Settings> => {
    await delay(400); // Simulate API delay
    const updatedSettings = {
      ...mockSettings,
      ...settings,
      updatedAt: new Date().toISOString()
    };
    // Update the mock data
    Object.assign(mockSettings, updatedSettings);
    return updatedSettings;
  },
};
