import styled from "styled-components";

import bg from "../../../assets/BackG.jpg";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DrinksContext } from "../../Hooks/useContext";

const SecTwo = () => {
  const { drinks, drinksTwo } = useContext(DrinksContext);
  const history = useHistory();

  if (!drinks || !drinksTwo) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Wrapper>
        <Title>Cocktails Anyone?</Title>
        <CocktailsWrapper>
          {drinks.drinks.map((drink) => {
            return (
              <>
                <RandomCocktails
                  key={drink.idDrink}
                  onClick={() => history.push(`/name/${drink.strDrink}`)}
                >
                  <CocktailImg src={drink.strDrinkThumb} />
                  <CocktailName>{drink.strDrink}</CocktailName>
                </RandomCocktails>
              </>
            );
          })}
          {drinksTwo.drinks.map((drink) => {
            return (
              <>
                <RandomCocktails
                  key={drink.idDrink}
                  onClick={() => history.push(`/name/${drink.strDrink}`)}
                >
                  <CocktailImg src={drink.strDrinkThumb} />
                  <CocktailName>{drink.strDrink}</CocktailName>
                </RandomCocktails>
              </>
            );
          })}
        </CocktailsWrapper>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  overflow: hidden;
  /* background-color: black; */
  /* background-image: url(${bg});
  background-size: cover;
  background-position: bottom; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95%;
  width: 95%;
  margin: auto;
`;

const Title = styled.h3`
  letter-spacing: 2px;
  font-size: 40px;
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
`;

const CocktailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const RandomCocktails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  transition: all 0.4s ease-in-out;
`;

const CocktailImg = styled.img`
  width: 400px;
  border-radius: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(50%);
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const CocktailName = styled.p`
  font-size: 25px;
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
`;

export default SecTwo;
