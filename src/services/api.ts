// Types
import { Movie, MovieDetail, PaginatedResponse, SortOption } from '@/types/movie';

export const getImageUrl = (path: string | null | undefined) =>
  path ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${path}` : '/placeholder.svg';

async function fetchClient<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const query = new URLSearchParams({
    api_key: process.env.NEXT_PUBLIC_API_KEY!,
    ...params,
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}?${query}`);
  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const movieApi = {
  getMovies: (page: number, sortBy: SortOption) => 
    fetchClient<PaginatedResponse<Movie>>('/discover/movie', {
      page: page.toString(),
      sort_by: sortBy,
      'primary_release_date.lte': new Date().toISOString().split('T')[0],
    }),

  getMovieDetail: (id: string) => 
    fetchClient<MovieDetail>(`/movie/${id}`),
};