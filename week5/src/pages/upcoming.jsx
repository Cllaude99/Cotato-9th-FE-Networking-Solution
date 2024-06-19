import { useQuery } from '@tanstack/react-query';
import { useMatch, useNavigate } from 'react-router-dom';

import Loading from '../components/loading';
import MovieLists from '../components/movie-list';
import MovieModal from '../components/movie-modal';
import { getUpcomingMovie } from '../apis/movie';

export default function UpComing() {
  const { isLoading, data } = useQuery({
    queryKey: ['movies', 'coming-soon'],
    queryFn: getUpcomingMovie,
  });

  const bigMovieMatch = useMatch('/coming-soon/:movieId');
  const navigate = useNavigate();
  const clickedMovie =
    bigMovieMatch &&
    data?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );
  const onClickMovie = (movieId) => {
    navigate(`/coming-soon/${movieId}`);
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
