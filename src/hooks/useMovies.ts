import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

// Services
import { movieApi } from '@/services/api';

// Types
import { SortOption } from '@/types/movie';

export const useInfiniteMovies = (sortBy: SortOption) => {
  return useInfiniteQuery({
    queryKey: ['movies', sortBy],
    queryFn: ({ pageParam = 1 }) => movieApi.getMovies(pageParam, sortBy),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });
};

export const useMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => movieApi.getMovieDetail(id),
    enabled: !!id,
  });
};