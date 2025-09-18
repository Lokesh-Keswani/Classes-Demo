import { useQuery } from '@tanstack/react-query';
import { announcementsApi } from '@/services/announcements';

export const useAnnouncementCategories = () => {
  return useQuery({
    queryKey: ['announcement-categories'],
    queryFn: announcementsApi.getCategories,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

