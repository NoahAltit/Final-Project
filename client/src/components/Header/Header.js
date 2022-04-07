// import { useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Header = () => {
  //   const [showHeader, setShowHeader] = useState(false);
  // When Scrolling to a certain position, show header
  // Make it transparent at first, then small transition
  //  to background header color

  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <Logo>KÒKTEL</Logo>
          <NavMenu>
            <NavList>
              <NavItem>
                <LinkNav>Home</LinkNav>
              </NavItem>
              <NavItem>
                <LinkNav>About</LinkNav>
              </NavItem>
              <NavItem>
                <LinkNav>Favorites</LinkNav>
              </NavItem>
              <NavItem>
                <LinkNav>Contact</LinkNav>
              </NavItem>
            </NavList>
          </NavMenu>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
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
  position: fixed;
  /* top: 0; */
  /* left: 0; */
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

const Logo = styled.h2`
  cursor: pointer;
`;

const Spacer = styled.div`
  /* height: 80px; */
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
`;

const LinkNav = styled.a`
  color: white;
  text-transform: initial;
  position: relative;
  text-decoration: none;
`;

export default Header;
