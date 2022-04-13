// import { useState } from "react";
import styled from "styled-components";

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
  /* background-color: transparent; */
  background-color: black;
  color: white;
  height: 80px;
  width: 100%;
  max-height: 500px;
  z-index: 100;

  font-family: "Open Sans", sans-serif;
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
  font-size: 32px;
  text-align: center;
  font-weight: bold;
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

const NavItem = styled.li`
  cursor: pointer;

  > a {
    color: white;
    text-transform: initial;
    position: relative;
    text-decoration: none;
  }

  .homeActive,
  .categActive,
  .favoActive {
    color: pink;
  }
`;

export default Header;
