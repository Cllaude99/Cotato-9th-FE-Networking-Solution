import { useQuery } from '@tanstack/react-query';
import { useMatch, useNavigate } from 'react-router-dom';
import Loading from '../components/loading';
import MovieLists from '../components/movie-list';
import MovieModal from '../components/movie-modal';
import { getPopularMovie } from '../apis/movie';

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ['movies', 'popular-movie'],
    queryFn: getPopularMovie,
  });
  const navigate = useNavigate();
  const bigMovieMatch = useMatch('/:movieId');
  const clickedMovie =
    bigMovieMatch &&
    data?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );
  const onClickMovie = (movieId) => {
    navigate(`/${movieId}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MovieLists data={data} onClickMovie={onClickMovie} />
          {bigMovieMatch && (
            <MovieModal
              layoutId={bigMovieMatch.params.movieId}
              clickedMovie={clickedMovie}
            />
          )}
        </>
      )}
    </>
  );
}
