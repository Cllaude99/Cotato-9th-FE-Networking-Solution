import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { books } from '../shared/constants/book';
import styled from 'styled-components';

export default function Author() {
  const navigate = useNavigate();
  let { name } = useParams();
  name = name.replaceAll('_', ' ');

  return (
    <Container>
      <AuthorWrapper>
        <AuthorImg src={`/imgs/${name}.png`} />
        <AuthorName>{name}</AuthorName>
      </AuthorWrapper>
      <BookLists>
        {books[name].map((book, index) => (
          <BookItem key={index} onClick={() => navigate(`${book.title}`)}>
            <Link to={`${book.title}`}>{book.title.replaceAll('_', ' ')}</Link>
          </BookItem>
        ))}
      </BookLists>
      <Outlet />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AuthorWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AuthorImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 100%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
const AuthorName = styled.h1`
  font-size: 24px;
  margin: 40px 0px 60px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const BookLists = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  gap: 10px;

  margin-bottom: 30px;

  @media (max-width: 1024px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
`;
const BookItem = styled.li`
  display: flex;
  justify-content: center;
  width: 35%;
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 7px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 375px) {
    font-size: 5px;
  }
`;
