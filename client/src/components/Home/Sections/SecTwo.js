import styled from "styled-components";

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#14213d"
            d="M0,288L16,293.3C32,299,64,309,96,309.3C128,309,160,299,192,293.3C224,288,256,288,288,256C320,224,352,160,384,133.3C416,107,448,117,480,128C512,139,544,149,576,133.3C608,117,640,75,672,74.7C704,75,736,117,768,160C800,203,832,245,864,240C896,235,928,181,960,138.7C992,96,1024,64,1056,64C1088,64,1120,96,1152,138.7C1184,181,1216,235,1248,250.7C1280,267,1312,245,1344,250.7C1376,256,1408,288,1424,304L1440,320L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          ></path>
        </svg>
        <InnerWrapper>
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
        </InnerWrapper>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > svg {
    height: 100vh;
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  }
`;

const Title = styled.h3`
  position: absolute;
  letter-spacing: 2px;
  font-size: 40px;
  margin-top: 20px;
  font-family: "Montserrat", sans-serif;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 95%;
  width: 95%;
  margin: auto;
  position: absolute;
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
