import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Services
import { movieApi, getImageUrl } from '@/services/api';

// Utils
import { formatRuntime } from '@/utils';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;

  let movie;
  
  try {
    movie = await movieApi.getMovieDetail(id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-10 dark:bg-gray-900 dark:text-white">
      <div className="fixed top-4 left-4 z-10">
        <Link href="/" className="rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm hover:bg-black/70">
          ← Back
        </Link>
      </div>

      <div className="relative h-[40vh] w-full lg:h-[60vh]">
        <Image
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">{movie.title}</h1>
        </div>
      </div>

      <div className="container mx-auto mt-6 px-4">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative hidden aspect-[2/3] w-48 shrink-0 overflow-hidden rounded-lg shadow-xl md:block">
            <Image
              src={getImageUrl(movie.poster_path)}
              alt={`${movie.title} Poster`}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-6">
            <section>
              <h2 className="text-xl font-semibold">Synopsis</h2>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">
                {movie.overview || 'No synopsis available.'}
              </p>
            </section>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block font-medium text-gray-500">Genres</span>
                <span>{movie.genres.map((g: any) => g.name).join(', ')}</span>
              </div>
              <div>
                <span className="block font-medium text-gray-500">Duration</span>
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
              <div>
                <span className="block font-medium text-gray-500">Language</span>
                <span className="uppercase">{movie.original_language}</span>
              </div>
            </div>

            <a 
              href="https://www.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-indigo-600 px-6 py-4 text-center font-bold text-white shadow-lg transition-colors hover:bg-indigo-700 md:inline-block md:w-auto"
            >
              Book Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}