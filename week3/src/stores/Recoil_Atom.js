import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 영화목록 상태
export const MyMovieList = atom({
  key: 'MovieList',
  default: [],
  effects_UNSTABLE: [persistAtom], // localstorage에 저장하기 위한 코드
});
