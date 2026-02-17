export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  popularity: number;
  vote_average: number;
}

export interface MovieDetail extends Movie {
  overview: string;
  genres: Array<{ id: number; name: string }>;
  original_language: string;
  runtime: number;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export type SortOption = 'release_date.desc' | 'original_title.asc' | 'vote_average.desc';