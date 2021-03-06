import styled from "styled-components";

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const DrinksByGlassTypes = () => {
  const { glassType } = useParams();
  const [drinks, setDrinks] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:4000/glass/${glassType}`)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.data);
      });
  }, []);

  if (!drinks) {
    return <p></p>;
  }
  return (
    <Section>
      <Title>{` ${glassType.toUpperCase()}`}</Title>
      <Wrapper>
        {drinks.drinks.map((drink) => {
          return (
            <InnerWrapper
              key={drink.idDrink}
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
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: grid;
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
  margin: 100px 0;
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
  letter-spacing: 4px;
  width: 300px;
  margin: 5px 0;
  text-align: center;
`;

const DrinkImg = styled.img`
  width: 250px;
  border-radius: 20px;
`;

export default DrinksByGlassTypes;
