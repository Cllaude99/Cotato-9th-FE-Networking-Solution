import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useMovieListStore = create(
  persist(
    (set, get) => ({
      MovieList: [],
      // 새로운 영화를 추가하는 함수
      setMovieList: (newMovie) =>
        set({ MovieList: [...get().MovieList, newMovie] }),
      // 봤던 영화들에 추가해주는 함수
      onClickAddWatched: (id) =>
        set({
          MovieList: get().MovieList.map((movie) =>
            movie.id !== id ? movie : { ...movie, watched: true }
          ),
        }),
      // 영화목록에서 해당 id값에 해당하는 영화를 삭제하는 함수
      onClickDeleteMovie: (id) =>
        set({
          MovieList: get().MovieList.filter((movie) => movie.id !== id),
        }),
      // 좋아하는 영화들에 추가해주는 함수
      onClickAddLike: (id) =>
        set({
          MovieList: get().MovieList.map((movie) =>
            movie.id !== id ? movie : { ...movie, like: true }
          ),
        }),
      // 봤던 영화목록에서 제거하는 함수
      onClickRemoveWatched: (id) =>
        set({
          MovieList: get().MovieList.map((movie) =>
            movie.id !== id ? movie : { ...movie, watched: false }
          ),
        }),
      // 👎를 클릭할때 트리거되는 함수로 좋아하는 영화목록에서 제거하는 함수
      onClickUnLike: (id) =>
        set({
          MovieList: get().MovieList.map((movie) =>
            movie.id !== id ? movie : { ...movie, like: false }
          ),
        }),
    }),
    {
      name: 'MovieList', // name of the item in the storage (must be unique)
    }
  )
);
