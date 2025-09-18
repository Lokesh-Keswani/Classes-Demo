import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { facultyApi, Faculty } from '@/services/faculty';
import { useToast } from '@/hooks/use-toast';

export const useFaculty = () => {
  return useQuery({
    queryKey: ['faculty'],
    queryFn: facultyApi.getAll,
  });
};

export const useFacultyMember = (id: string) => {
  return useQuery({
    queryKey: ['faculty', id],
    queryFn: () => facultyApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateFaculty = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: facultyApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({
        title: "Success",
        description: "Faculty member added successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to add faculty member",
        variant: "destructive",
      });
    },
  });
};

export const useUpdateFaculty = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Faculty> }) =>
      facultyApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({
        title: "Success",
        description: "Faculty member updated successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update faculty member",
        variant: "destructive",
      });
    },
  });
};

export const useDeleteFaculty = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: facultyApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['faculty'] });
      toast({
        title: "Success",
        description: "Faculty member deleted successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to delete faculty member",
        variant: "destructive",
      });
    },
  });
};
