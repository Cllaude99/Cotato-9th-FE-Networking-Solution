import PropTypes from 'prop-types';
import { MOVIE_TYPE } from '@/constants/movieType';
import { useEffect, useState } from 'react';
import { useMovieListStore } from '@/stores/Zustand_Store';

ZustandMovieList.propTypes = {
  type: PropTypes.string,
};

export default function ZustandMovieList({ type }) {
  const movieList = useMovieListStore((state) => state.MovieList);
  const {
    onClickAddWatched,
    onClickDeleteMovie,
    onClickAddLike,
    onClickRemoveWatched,
    onClickUnLike,
  } = useMovieListStore();
  const [movies, setMovies] = useState(null);

  // type에 따라 moives변수를 초기화하는 과정
  useEffect(() => {
    setMovies(getMovieByType(type));
  }, [type, movieList]);

  // type에 따라 알맞는 atom을 반환해주는 과정
  const getMovieByType = (type) => {
    switch (type) {
      case MOVIE_TYPE.WANNA_WATCH:
        return movieList.filter((movie) => !movie.watched && !movie.like);
      case MOVIE_TYPE.WATCHED:
        return movieList.filter((movie) => movie.watched && !movie.like);
      case MOVIE_TYPE.LIKE:
        return movieList.filter((movie) => movie.like);
    }
  };

  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id} className="flex">
          <h4 className="mr-4">{movie.movieName}</h4>
          {type === MOVIE_TYPE.WANNA_WATCH ? (
            <>
              <button
                onClick={() => onClickAddWatched(movie.id)}
                className="mr-2"
              >
                ✅
              </button>
              <button onClick={() => onClickDeleteMovie(movie.id)}>🗑️</button>
            </>
          ) : type === MOVIE_TYPE.WATCHED ? (
            <>
              <button onClick={() => onClickAddLike(movie.id)} className="mr-2">
                👍
              </button>
              <button onClick={() => onClickRemoveWatched(movie.id)}>❌</button>
            </>
          ) : (
            <button onClick={() => onClickUnLike(movie.id)} className="mr-2">
              👎
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
