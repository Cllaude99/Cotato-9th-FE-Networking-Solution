import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './header';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`;
