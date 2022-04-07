import { useContext } from "react";
import styled from "styled-components";
import { DrinksContext } from "../../Hooks/useContext";

const SecTwo = () => {
  const { drinks, drinksTwo } = useContext(DrinksContext);

  if (!drinks || !drinksTwo) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <Wrapper>
        <Title>Cocktails of the Day</Title>
        <CocktailsWrapper>
          {drinks.drinks.map((drink) => {
            return (
              <>
                <RandomCocktails key={drink.idDrink}>
                  <CocktailImg src={drink.strDrinkThumb} />
                  <CocktailName>{drink.strDrink}</CocktailName>
                </RandomCocktails>
              </>
            );
          })}
          {drinksTwo.drinks.map((drink) => {
            return (
              <>
                <RandomCocktails key={drink.idDrink}>
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
`;

const Wrapper = styled.div`
  display: flex;
  /* background-color: cadetblue; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95%;
  width: 95%;
  margin: auto;
`;

const Title = styled.h3`
  margin-bottom: 10px;
`;

const CocktailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const RandomCocktails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
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
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

export default SecTwo;
