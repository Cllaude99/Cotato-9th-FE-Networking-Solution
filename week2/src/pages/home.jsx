import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthorItemVariants } from '../shared/constants/variants/author';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Best Seller Authors</Title>
      <AuthorList>
        <AuthorItem
          variants={AuthorItemVariants}
          initial="hidden"
          whileHover="hover"
          onClick={() => navigate(`/author/J._K._Rowling`)}
        >
          <AuthorImg src="/imgs/J. K. Rowling.png" />
          <Link to="/author/J._K._Rowling">J. K. Rowling</Link>
        </AuthorItem>
        <AuthorItem
          variants={AuthorItemVariants}
          initial="hidden"
          whileHover="hover"
          onClick={() => navigate(`/author/J._R._R._Tolkien`)}
        >
          <AuthorImg src="/imgs/J. R. R. Tolkien.png" />
          <Link to="/author/J._R._R._Tolkien">J. R. R. Tolkien</Link>
        </AuthorItem>
      </AuthorList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
  margin: 40px 0px 60px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const AuthorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 30px;
  width: 80vw;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 50vw;
    height: auto;
  }
`;
const AuthorItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 70%;
  height: 250px;
  padding: 10px 0px;
  border: 1px solid lightgray;
  cursor: pointer;

  a {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const AuthorImg = styled.img`
  width: 200px;
  height: 100%;
  margin: 10px 0px;
  object-fit: cover;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 375px) {
    width: 80px;
    height: 80px;
  }
`;
