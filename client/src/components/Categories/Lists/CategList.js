import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LetterIndex from "../LetterIndex";

const CategList = () => {
  const { drinkLetter } = useParams();
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    fetch(`/letter/${drinkLetter}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setDrinks(data.data);
      });
  }, []);

  if (!drinks) {
    return <p></p>;
  }
  return (
    <>
      {/* <LetterIndex /> */}
      {drinks.drinks.map((drink) => {
        return (
          <Wrapper>
            <DrinkName>{drink.strDrink}</DrinkName>
            <DrinkImg src={drink.strDrinkThumb} />
          </Wrapper>
        );
      })}
    </>
  );
};

const Wrapper = styled.div``;

const DrinkName = styled.p``;

const DrinkImg = styled.img`
  width: 500px;
`;

export default CategList;
