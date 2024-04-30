import { Outlet, Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Book() {
  let { book } = useParams();
  book = book.replaceAll('_', ' ');

  return (
    <Container>
      <BookTitle>{book}</BookTitle>
      <Menu>
        <Link to="chapters">Chapters</Link>
        <Link to="characters">Characters</Link>
      </Menu>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const BookTitle = styled.h2`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0px 3px;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  margin: 10px 0px;

  @media (max-width: 1024px) {
    width: 60vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    border: 1px solid lightgray;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 3px;
  }
`;
