'use client';

import { useState, useEffect, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

// Components
import MovieCard from '@/components/ui/MovieCard';
import { SortSelect } from '@/components/ui/SortSelect';

// Hooks
import { useInfiniteMovies } from '@/hooks/useMovies';

// Types
import { SortOption } from '@/types/movie';

const MovieList = () => {
  const [sortBy, setSortBy] = useState<SortOption>('release_date.desc');
  
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
    isRefetching
  } = useInfiniteMovies(sortBy);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (status === 'pending') return <div className="p-8 text-center">Loading movies...</div>;
  if (status === 'error') return <div className="p-8 text-center text-red-500">Error loading movies.</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col justify-between sm:flex-row sm:items-center">
        <h1 className="mb-4 text-2xl font-bold">Discover Movies</h1>
        <SortSelect value={sortBy} onChange={(v) => setSortBy(v as SortOption)} />
      </div>

      <button 
        onClick={() => refetch()} 
        disabled={isRefetching}
        className="mb-4 w-full rounded bg-gray-100 py-2 text-sm text-gray-600 active:bg-gray-200 sm:hidden"
      >
        {isRefetching ? 'Refreshing...' : 'Pull to Refresh (Tap to Refresh)'}
      </button>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.pages.map((page, i) => (
          <Fragment key={i}>
            {page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Fragment>
        ))}
      </div>

      <div ref={ref} className="mt-8 flex justify-center py-4">
        {isFetchingNextPage && <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>}
        {!hasNextPage && <p className="text-gray-500">No more movies to load.</p>}
      </div>
    </div>
  );
}

export default MovieList;