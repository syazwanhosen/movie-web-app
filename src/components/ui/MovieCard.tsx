'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Services
import { getImageUrl } from '@/services/api';

// Types
import { Movie } from '@/types/movie';


interface MovieCardProps {
  movie: Movie;
}

const MovieCard = memo(({ movie }: MovieCardProps) => {
  return (
    <Link 
      href={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02] dark:bg-gray-800"
      aria-label={`View details for ${movie.title}`}
    >
      <div className="relative aspect-[2/3] w-full bg-gray-200">
        <Image
          src={getImageUrl(movie.poster_path || movie.backdrop_path)}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h2 className="line-clamp-1 text-sm font-bold text-gray-900 dark:text-white">
          {movie.title}
        </h2>
        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(movie.release_date).getFullYear()}</span>
          <span className="flex items-center text-yellow-600">
            ★ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;