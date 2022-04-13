import styled from "styled-components";

import { useEffect, useState } from "react";
import Header from "../Header/Header";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/favorites")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setFavorites(data.data);
      });
  }, []);

  return (
    <Section>
      <Header />
      <Title>Favorites</Title>
      <Wrapper></Wrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const Title = styled.h1`
  margin-top: 30px;
`;

export default Favorites;
