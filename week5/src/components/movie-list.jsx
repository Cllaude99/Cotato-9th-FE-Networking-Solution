import { AnimatePresence, motion } from 'framer-motion';
import { movieListVariants, movieVariants } from '../../utils/variants';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';
import { makeImagePath } from '../../utils/utils';

export default function MovieLists({ data, onClickMovie }) {
  return (
    <AnimatePresence>
      <MovieList
        variants={movieListVariants}
        initial="hidden"
        animate="visible"
      >
        {data?.results.map((movie) => (
          <Movie key={movie.id} variants={movieVariants}>
            <MovieImg
              bgphoto={makeImagePath(movie.backdrop_path)}
              whileHover={{ scale: 1.1, y: -10 }}
              layoutId={movie.id + ''}
              onClick={() => onClickMovie(movie.id)}
            />
            <MovieTitle>{movie.original_title}</MovieTitle>
          </Movie>
        ))}
      </MovieList>
    </AnimatePresence>
  );
}

MovieLists.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        backdrop_path: PropTypes.string,
        original_title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClickMovie: PropTypes.func.isRequired,
};

const MovieList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;
  width: 70%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Movie = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 60px;
`;

const MovieImg = styled(motion.div)`
  background-image: url(${(props) => props.bgphoto});
  background-position: center center;
  background-size: cover;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;

  margin-bottom: 15px;
`;

const MovieTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  width: 250px;
`;
