import styled from "styled-components";

import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/favorites")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setFavorites(data.data);
      });
  }, []);

  return (
    <Section>
      <Header />
      <Title>Favorites</Title>
      <Wrapper>
        {favorites.map((drink) => {
          return (
            <InnerWrapper
              onClick={() => history.push(`/name/${drink.strDrink}`)}
            >
              <DrinkImg src={drink.strDrinkThumb} />
              <DrinkName>{drink.strDrink}</DrinkName>
            </InnerWrapper>
          );
        })}
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: grid;
  font-family: "Montserrat", sans-serif;
  color: white;
  align-items: center;
  grid-template-columns: repeat(4, max-content);
  gap: 3rem 3rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 2rem;
`;

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 50px;
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const DrinkName = styled.h5`
  font-size: 20px;
  padding: 10px 20px;
  font-weight: 500;
  letter-spacing: 4px;
  width: 300px;
  margin: 5px 0;
  text-align: center;
`;

const DrinkImg = styled.img`
  width: 250px;
  border-radius: 20px;
`;

export default Favorites;
