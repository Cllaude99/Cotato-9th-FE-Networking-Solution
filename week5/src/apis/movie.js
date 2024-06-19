import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_MOVIE_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNowPlaying = async () => {
  const { data } = await axios.get(BASE_URL + `/movie/now_playing`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return data;
};

export const getPopularMovie = async () => {
  const { data } = await axios.get(BASE_URL + `/movie/popular`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return data;
};

export const getUpcomingMovie = async () => {
  const { data } = await axios.get(BASE_URL + `/movie/upcoming`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  });
  return data;
};

export const getMovieDetail = async (movieId) => {
  const { data } = await axios.get(
    BASE_URL +
      `/movie/${movieId}
    `,
    { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
  );
  return data;
};
