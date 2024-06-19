import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatNumber, makeImagePath } from '../../utils/utils';
import { useQuery } from '@tanstack/react-query';
import { MdCancel } from 'react-icons/md';
import { getMovieDetail } from '../apis/movie';
import PropTypes from 'prop-types';

export default function MovieDetail({ layoutId, clickedMovie }) {
  const navigate = useNavigate();
  const { isLoading, data } = useQuery({
    queryKey: ['movieDetail', layoutId],
    queryFn: () => getMovieDetail(layoutId),
  });

  return (
    <Container layoutId={layoutId}>
      {isLoading ? (
        <>
          <CancelBtn onClick={() => navigate(-1)} />
          <DetailMovieImg
            bgphoto={makeImagePath(clickedMovie?.backdrop_path || '')}
          />
        </>
      ) : (
        <>
          <CancelBtn onClick={() => navigate(-1)} />
          <DetailMovieImg bgphoto={makeImagePath(data?.backdrop_path || '')} />
          <DetailMovieInfo>
            <MovieTitle>{data?.original_title}</MovieTitle>
            <Overview>{data?.overview}</Overview>
            <Infos>
              <span>Budget: ${formatNumber(data?.budget)}</span>
              <span>Revenue: ${formatNumber(data?.revenue)}</span>
              <span>Runtime: {data?.runtime} minutes</span>
              <span>Rating: {data?.vote_average.toFixed(1)}</span>
              <span>
                Homepage: <a href={data?.homepage}>{data?.homepage}</a>
              </span>
            </Infos>
          </DetailMovieInfo>
        </>
      )}
    </Container>
  );
}

MovieDetail.propTypes = {
  layoutId: PropTypes.string.isRequired,
  clickedMovie: PropTypes.shape({
    backdrop_path: PropTypes.string,
  }).isRequired,
};

const Container = styled(motion.div)`
  position: fixed;
  top: 30px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.veryDark};
  height: 95vh;

  width: 90%;
  max-width: 500px;

  border-radius: 5px;

  @media (max-width: 768px) {
    top: 20px;
    height: auto;
    bottom: 20px;
  }
`;

const CancelBtn = styled(MdCancel)`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
`;

const DetailMovieImg = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  height: 50%;

  border-radius: 5px 5px 0px 0px;

  @media (max-width: 768px) {
    height: 40%;
  }
`;

const DetailMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MovieTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Overview = styled.p`
  margin-bottom: 10px;
  color: ${(props) => props.theme.white.darker};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.white.darker};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
