import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { PiHamburgerBold } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Header() {
  const [userClick, setClick] = useState(false);

  const toggleClick = () => setClick((prev) => !prev);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setClick(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (userClick) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [userClick]);

  return (
    <>
      <Nav>
        <Col>
          <Link to={`/`}>
            <Logo src="/imgs/potato.png" className="logo" />
          </Link>
        </Col>
        <Col className="menu-list">
          <Items>
            <Item>
              <Link to={`/about`}>About</Link>
            </Item>
          </Items>
          <Items>
            <Item>Menu 1</Item>
          </Items>
          <Items>
            <Item>Menu 2</Item>
          </Items>
          <Items>
            <Item>Menu 3</Item>
          </Items>
          <Items>
            <Item>Menu 4</Item>
          </Items>
        </Col>
        <Col userClick={userClick}>
          <SearchIcon className="search-icon" />
          <HamburgerMenu className="hamburger-icon" onClick={toggleClick} />
          <XButton className="x-button" onClick={toggleClick} />
        </Col>
      </Nav>
      <SideMenu className="side-menu" userClick={userClick}>
        <MenuList>
          <MenuItem>
            <Link to={`/about`} onClick={closeMenu}>
              About
            </Link>
          </MenuItem>
          <MenuItem>Menu1</MenuItem>
          <MenuItem>Menu2</MenuItem>
          <MenuItem>Menu3</MenuItem>
          <MenuItem>Menu4</MenuItem>
        </MenuList>
      </SideMenu>
    </>
  );
}

const Nav = styled.div`
  background-color: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    .menu-list {
      display: none;
    }
  }
`;
const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    .search-icon {
      display: none;
    }
    .hamburger-icon {
      display: ${(props) => (props.userClick ? 'none' : 'block')};
    }
    .x-button {
      display: ${(props) => (props.userClick ? 'block' : 'none')};
    }
  }
`;
const Items = styled.ul``;
const Item = styled.li``;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-left: 30px;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
    margin-left: 20px;
  }
`;
const SearchIcon = styled(IoIosSearch)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;
const HamburgerMenu = styled(PiHamburgerBold)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;
const XButton = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const SideMenu = styled.nav`
  background-color: ${(props) => props.theme.headerTextColor};
  color: ${(props) => props.theme.headerBgColor};

  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 99;
  height: 100vh;
  display: none;

  @media (max-width: 768px) {
    &.side-menu {
      display: ${(props) => (props.userClick ? 'block' : 'none')};
    }
  }
`;
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  :hover {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    :hover {
      font-size: 28px;
    }
  }
`;
const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 10px;
  width: 100%;
  margin: 20px 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
