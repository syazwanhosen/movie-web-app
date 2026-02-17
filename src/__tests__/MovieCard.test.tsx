import { render, screen } from '@testing-library/react';

// Components
import MovieCard from '@/components/ui/MovieCard';

// Types
import { Movie } from '@/types/movie';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => {
    // Destructure fill and priority so they aren't passed to the DOM
    // If fill is true, we simulate its behavior with a style
    const style = fill 
      ? { position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover' } 
      : {};
      
    return <img {...props} style={{ ...props.style, ...style }} />;
  },
}));

const mockMovie: Movie = {
  id: 123,
  title: 'Inception',
  poster_path: '/inception.jpg',
  backdrop_path: '/bg.jpg',
  release_date: '2010-07-16',
  popularity: 99.9,
  vote_average: 8.8,
};

describe('MovieCard', () => {
  it('renders movie information correctly', () => {
    render(<MovieCard movie={mockMovie} />);

    expect(screen.getByText(/Inception/i)).toBeInTheDocument();
    expect(screen.getByText(/2010/)).toBeInTheDocument();
    expect(screen.getByText(/8.8/)).toBeInTheDocument();
  });
});