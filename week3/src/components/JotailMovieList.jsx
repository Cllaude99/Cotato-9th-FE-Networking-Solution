import PropTypes from 'prop-types';
import { MOVIE_TYPE } from '@/constants/movieType';
import { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  LIKE_LIST,
  MyMovieList,
  WANNA_WATHCH_LIST,
  WATCHED_LIST,
} from '../stores/Jotai_Atom';

JotaiMovieList.propTypes = {
  type: PropTypes.string,
};

export default function JotaiMovieList({ type }) {
  const [movieList, setMovieList] = useAtom(MyMovieList);
  const wannaWatchList = useAtomValue(WANNA_WATHCH_LIST); // 보고싶은 영화 목록
  const watchedList = useAtomValue(WATCHED_LIST); // 봤던 영화 목록
  const likeList = useAtomValue(LIKE_LIST); // 좋아하는 영화목록

  const [movies, setMovies] = useState(null);

  // type에 따라 moives변수를 초기화하는 과정
  useEffect(() => {
    setMovies(getMovieByType(type));
  }, [type, movieList]);

  // type에 따라 알맞는 atom을 반환해주는 과정
  const getMovieByType = (type) => {
    switch (type) {
      case MOVIE_TYPE.WANNA_WATCH:
        return wannaWatchList;
      case MOVIE_TYPE.WATCHED:
        return watchedList;
      case MOVIE_TYPE.LIKE:
        return likeList;
    }
  };

  // 봤던 영화들에 추가해주는 함수
  const onClickAddWatched = (id) => {
    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id !== id ? movie : { ...movie, watched: true }
      )
    );
  };

  // 영화목록에서 해당 id값에 해당하는 영화를 삭제하는 함수
  const onClickDeleteMovie = (id) => {
    setMovieList((prev) => prev.filter((movie) => movie.id !== id));
  };

  // 좋아하는 영화들에 추가해주는 함수
  const onClickAddLike = (id) => {
    setMovieList((prev) =>
      prev.map((movie) => (movie.id !== id ? movie : { ...movie, like: true }))
    );
  };

  // 봤던 영화목록에서 제거하는 함수
  const onClickRemoveWatched = (id) => {
    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id !== id ? movie : { ...movie, watched: false }
      )
    );
  };

  // 👎를 클릭할때 트리거되는 함수로 좋아하는 영화목록에서 제거하는 함수
  const onClickUnLike = (id) => {
    setMovieList((prev) =>
      prev.map((movie) => (movie.id !== id ? movie : { ...movie, like: false }))
    );
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
