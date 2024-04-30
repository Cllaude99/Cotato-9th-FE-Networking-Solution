import Buttton from '@/components/Button';
import ErrorMessage from '@/components/ErrorMessage';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formSchema } from '@/constants/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { MOVIE_TYPE } from '@/constants/movieType';
import ZustandMovieList from '@/components/ZustandMovieList';
import { useMovieListStore } from '@/stores/Zustand_Store';

// Zustand 사용 버전
export default function HomeZustand() {
  const setMovieList = useMovieListStore((state) => state.setMovieList);
  const [formLoading, setLoading] = useState(false); // form 처리완료를 확인하는 변수
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(formSchema),
  });

  /**
   * form유효성 검사를 위한 함수
   * @param data // form안에 적은 항목들을 받아오는 객체
   */
  const onValid = (data) => {
    // 처리중인 상태
    setLoading(true);

    // 새로운 영화를 추가하는 과정
    setMovieList({
      id: Date.now(),
      watched: false,
      like: false,
      movieName: data.movieName,
    });

    // 영화제목 입력칸 초기화
    setValue('movieName', '');

    // 처리완료된 상태
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen mx-auto text-white bg-black">
      <div className="flex flex-col w-screen max-w-3xl gap-4 p-5 my-5">
        <h1 className="title">내가 보고싶은 영화들</h1>
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-3">
          <input
            {...register('movieName')}
            placeholder="영화 제목"
            className="w-2/5 text-white bg-transparent border-none rounded-md ring-1 ring-white focus:ring-2 focus:ring-white"
          />
          {errors.movieName && (
            <ErrorMessage errorMessage={errors.movieName.message} />
          )}
          <Buttton text="Add Movie" pending={formLoading} />
        </form>
        <ZustandMovieList type={MOVIE_TYPE.WANNA_WATCH} />

        <h1 className="title">내가 봤던 영화들</h1>
        <ZustandMovieList type={MOVIE_TYPE.WATCHED} />

        <h1 className="title">내가 좋아하는 영화들</h1>
        <ZustandMovieList type={MOVIE_TYPE.LIKE} />
      </div>
    </div>
  );
}
