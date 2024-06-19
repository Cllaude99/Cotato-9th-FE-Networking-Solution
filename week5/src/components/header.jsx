import { motion } from 'framer-motion';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const popularMatch = useMatch('/');
  const comingSoonMatch = useMatch('/coming-soon');
  const nowPlayingMatch = useMatch('/now-playing');

  return (
    <Nav>
      <MenuWrapper>
        <Menu>
          <Link to="/"> popular</Link>
          {popularMatch && <Circle layoutId="circle" />}
        </Menu>
        <Menu>
          <Link to="/coming-soon">coming soon</Link>
          {comingSoonMatch && <Circle layoutId="circle" />}
        </Menu>
        <Menu>
          <Link to="now-playing">now playing</Link>
          {nowPlayingMatch && <Circle layoutId="circle" />}
        </Menu>
      </MenuWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  margin: 50px 0px;

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const Menu = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Circle = styled(motion.span)`
  background-color: ${(props) => props.theme.blue};
  width: 7px;
  height: 7px;
  border-radius: 100%;

  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 3px;
    height: 3px;
  }
`;
