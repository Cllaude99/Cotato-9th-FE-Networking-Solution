import { useQuery } from '@tanstack/react-query';
import { getNowPlaying } from '../apis/movie';
import { useMatch, useNavigate } from 'react-router-dom';

import Loading from '../components/loading';
import MovieLists from '../components/movie-list';
import MovieModal from '../components/movie-modal';

export default function Nowplaying() {
  const { isLoading, data } = useQuery({
    queryKey: ['movies', 'now-playing'],
    queryFn: getNowPlaying,
  });
  const navigate = useNavigate();
  const bigMovieMatch = useMatch(`/now-playing/:movieId`);
  const clickedMovie =
    bigMovieMatch &&
    data?.results.find(
      (movie) => movie.id + '' === bigMovieMatch.params.movieId
    );

  const onClickMovie = (movieId) => {
    navigate(`/now-playing/${movieId}`);
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
