import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 영화 목록 상태 + localstorage저장을 위해 atomWithStorage사용함
export const MyMovieList = atomWithStorage('MovieList', []);

// 보고싶은 영화 atom
export const WANNA_WATHCH_LIST = atom((get) =>
  get(MyMovieList).filter((movie) => !movie.watched && !movie.like)
);

// 봤던 영화 atom
export const WATCHED_LIST = atom((get) =>
  get(MyMovieList).filter((movie) => movie.watched && !movie.like)
);

// 좋아하는 영화 atom
export const LIKE_LIST = atom((get) =>
  get(MyMovieList).filter((movie) => movie.like)
);
