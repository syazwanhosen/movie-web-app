import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

// Services
import { movieApi } from '@/services/api';

// Features
import MovieList from '@/features/MovieList';

export default async function HomePage() {
  const queryClient = new QueryClient();

  // Prefetch initial data on server for SEO and speed
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['movies', 'release_date.desc'],
    queryFn: () => movieApi.getMovies(1, 'release_date.desc'),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <MovieList />
      </main>
    </HydrationBoundary>
  );
}