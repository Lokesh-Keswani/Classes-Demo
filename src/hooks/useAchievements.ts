import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { achievementsApi, Achievement } from '@/services/achievements';
import { useToast } from '@/hooks/use-toast';

export const useAchievements = () => {
  return useQuery({
    queryKey: ['achievements'],
    queryFn: achievementsApi.getAll,
    staleTime: 2 * 60 * 1000, // 2 minutes - reasonable caching
    cacheTime: 5 * 60 * 1000, // 5 minutes - good performance
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useAchievement = (id: string) => {
  return useQuery({
    queryKey: ['achievements', id],
    queryFn: () => achievementsApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateAchievement = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: achievementsApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast({
        title: "Success",
        description: "Achievement added successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to add achievement",
        variant: "destructive",
      });
    },
  });
};

export const useUpdateAchievement = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Achievement> }) =>
      achievementsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast({
        title: "Success",
        description: "Achievement updated successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update achievement",
        variant: "destructive",
      });
    },
  });
};

export const useDeleteAchievement = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: achievementsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast({
        title: "Success",
        description: "Achievement deleted successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to delete achievement",
        variant: "destructive",
      });
    },
  });
};
