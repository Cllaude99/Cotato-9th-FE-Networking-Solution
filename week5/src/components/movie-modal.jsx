import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieDetail from './movie-detail';

export default function MovieModal({ layoutId, clickedMovie }) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <Overlay
        onClick={() => navigate(-1)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <MovieDetail layoutId={layoutId} clickedMovie={clickedMovie} />
    </AnimatePresence>
  );
}

MovieModal.propTypes = {
  layoutId: PropTypes.string.isRequired,
  clickedMovie: PropTypes.object.isRequired,
};

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  opacity: 0;
`;
