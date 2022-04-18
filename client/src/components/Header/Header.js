// import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  //   const [showHeader, setShowHeader] = useState(false);
  // When Scrolling to a certain position, show header
  // Make it transparent at first, then small transition
  //  to background header color

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo to="/home">KÒKTEL</Logo>
          <NavMenu>
            <NavList>
              <NavItem>
                <NavLink to="/home" activeClassName="homeActive">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/categories" activeClassName="categActive">
                  Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/favorites" activeClassName="favoActive">
                  Favorites
                </NavLink>
              </NavItem>
            </NavList>
          </NavMenu>
        </Wrapper>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  height: 80px;
  width: 100%;
  max-height: 500px;
  z-index: 100;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`;

const NavMenu = styled.div`
  display: flex;
  column-gap: 1rem;
  position: relative;
`;

const NavList = styled.ul`
  flex-direction: row;
  column-gap: 4rem;
  display: flex;
  row-gap: 2.5rem;
  list-style: none;
`;

const fadeIn = keyframes`
from, to {
  text-decoration-color: transparent;
} 
to {
  text-decoration-color: pink;
}
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;

  > a {
    color: white;
    text-transform: initial;
    position: relative;
    text-decoration: none;
  }

  .homeActive,
  .categActive,
  .favoActive {
    transition: all 0.3s ease-in-out;
    color: pink;
    text-decoration: underline;
    text-underline-offset: 10px;
    animation: ${fadeIn} 2s infinite;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

export default Header;
