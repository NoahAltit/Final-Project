import styled from "styled-components";

import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Ingredients = () => {
  const { drinkName } = useParams();
  const [ingredients, setIngredients] = useState(null);

  const history = useHistory();

  useEffect(() => {
    fetch(`/name/${drinkName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.drinks);
        setIngredients(data.data.drinks);
      });
  }, []);

  if (!ingredients) {
    return <p></p>;
  }

  return (
    <Section>
      {ingredients.map((drink) => {
        return (
          <>
            <Icon
              onClick={() => history.push(`/category/${drink.strCategory}`)}
            >
              <BsArrowLeftCircle className="icon" /> Drink Category
            </Icon>
            <Icon2 onClick={() => history.push(`/glass/${drink.strGlass}`)}>
              Glass Type Category <BsArrowRightCircle className="icon2" />
            </Icon2>
            <Title>{drink.strDrink}</Title>
            <Wrapper>
              <DrinkImg src={drink.strDrinkThumb} />
              <Details>
                <IngredientsWrap>
                  <Title>Ingredients</Title>
                  <Ingredient1>{drink.strIngredient1}</Ingredient1>
                  <Ingredient2>{drink.strIngredient2}</Ingredient2>
                  <Ingredient3>{drink.strIngredient3}</Ingredient3>
                  <Ingredient4>{drink.strIngredient4}</Ingredient4>
                  <Ingredient5>{drink.strIngredient5}</Ingredient5>
                  <Ingredient6>{drink.strIngredient6}</Ingredient6>
                  <Ingredient7>{drink.strIngredient7}</Ingredient7>
                  <Ingredient8>{drink.strIngredient8}</Ingredient8>
                  <Ingredient9>{drink.strIngredient9}</Ingredient9>
                  <Ingredient10>{drink.strIngredient10}</Ingredient10>
                  <Ingredient11>{drink.strIngredient11}</Ingredient11>
                  <Ingredient12>{drink.strIngredient12}</Ingredient12>
                  <Ingredient13>{drink.strIngredient13}</Ingredient13>
                  <Ingredient14>{drink.strIngredient14}</Ingredient14>
                  <Ingredient15>{drink.strIngredient15}</Ingredient15>
                </IngredientsWrap>
                <Description>
                  <Category>
                    <strong>Category:</strong> {` ${drink.strCategory}`}
                  </Category>
                  <Instructions>
                    <strong>Instructions:</strong> {drink.strInstructions}
                  </Instructions>
                </Description>
              </Details>
            </Wrapper>
          </>
        );
      })}
    </Section>
  );
};

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Icon = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;

  &:hover {
    opacity: 0.7;
  }

  .icon {
    margin-right: 10px;
    font-size: 30px;
  }
`;
const Icon2 = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;

  &:hover {
    opacity: 0.7;
  }

  .icon2 {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 30px;
  }
`;

const Title = styled.h1`
  margin-top: 80px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  margin-top: 150px;
`;

const DrinkImg = styled.img`
  width: 450px;
  border-radius: 20px;
`;

const Details = styled.div`
  margin: 0 40px;
`;

const IngredientsWrap = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 10px 0;
    text-align: start;
  }

  > p {
    font-size: 20px;
    margin: 10px 0;
  }
`;

const Ingredient1 = styled.p``;
const Ingredient2 = styled.p``;
const Ingredient3 = styled.p``;
const Ingredient4 = styled.p``;
const Ingredient5 = styled.p``;
const Ingredient6 = styled.p``;
const Ingredient7 = styled.p``;
const Ingredient8 = styled.p``;
const Ingredient9 = styled.p``;
const Ingredient10 = styled.p``;
const Ingredient11 = styled.p``;
const Ingredient12 = styled.p``;
const Ingredient13 = styled.p``;
const Ingredient14 = styled.p``;
const Ingredient15 = styled.p``;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Category = styled.p`
  margin: 20px 0;
  font-size: 20px;
`;

const Instructions = styled.p`
  font-size: 20px;
  line-height: 1.6;
`;

export default Ingredients;
