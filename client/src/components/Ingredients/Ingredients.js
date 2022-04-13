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
              Glass Type <BsArrowRightCircle className="icon2" />
            </Icon2>
            <Title>{drink.strDrink}</Title>
            <Wrapper>
              <Info>
                <DrinkImg src={drink.strDrinkThumb} />
                <Description>
                  <Category>
                    <strong>Category:</strong> {` ${drink.strCategory}`}
                  </Category>
                  <Instructions>
                    <strong>Instructions:</strong> {drink.strInstructions}
                  </Instructions>
                </Description>
              </Info>
              <Details>
                <IngredientsWrap>
                  {drink.strIngredient1 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}.png`}
                        alt={drink.strIngredient1}
                      />
                      <Ingredient1>{drink.strIngredient1}</Ingredient1>
                      <Measure>({drink.strMeasure1})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient2 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}.png`}
                        alt={drink.strIngredient2}
                      />
                      <Ingredient2>{drink.strIngredient2}</Ingredient2>
                      <Measure>({drink.strMeasure2})</Measure>
                    </InnerWrap>
                  )}

                  {drink.strIngredient3 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient3}.png`}
                        alt={drink.strIngredient3}
                      />
                      <Ingredient3>{drink.strIngredient3}</Ingredient3>
                      <Measure>({drink.strMeasure3})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient4 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient4}.png`}
                        alt={drink.strIngredient4}
                      />
                      <Ingredient4>{drink.strIngredient4}</Ingredient4>
                      <Measure>({drink.strMeasure4})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient5 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient5}.png`}
                        alt={drink.strIngredient5}
                      />
                      <Ingredient5>{drink.strIngredient5}</Ingredient5>
                      <Measure>({drink.strMeasure5})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient6 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient6}.png`}
                        alt={drink.strIngredient6}
                      />
                      <Ingredient6>{drink.strIngredient6}</Ingredient6>
                      <Measure>({drink.strMeasure6})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient7 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient7}.png`}
                        alt={drink.strIngredient7}
                      />
                      <Ingredient7>{drink.strIngredient7}</Ingredient7>
                      <Measure>({drink.strMeasure7})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient8 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient8}.png`}
                        alt={drink.strIngredient8}
                      />
                      <Ingredient8>{drink.strIngredient8}</Ingredient8>
                      <Measure>({drink.strMeasure8})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient9 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient9}.png`}
                        alt={drink.strIngredient9}
                      />
                      <Ingredient9>{drink.strIngredient9}</Ingredient9>
                      <Measure>({drink.strMeasure9})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient10 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient10}.png`}
                        alt={drink.strIngredient10}
                      />
                      <Ingredient10>{drink.strIngredient10}</Ingredient10>
                      <Measure>({drink.strMeasure10})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient11 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient11}.png`}
                        alt={drink.strIngredient11}
                      />
                      <Ingredient11>{drink.strIngredient11}</Ingredient11>
                      <Measure>({drink.strMeasure11})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient12 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient12}.png`}
                        alt={drink.strIngredient12}
                      />
                      <Ingredient12>{drink.strIngredient12}</Ingredient12>
                      <Measure>({drink.strMeasure12})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient13 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient13}.png`}
                        alt={drink.strIngredient13}
                      />
                      <Ingredient13>{drink.strIngredient13}</Ingredient13>
                      <Measure>({drink.strMeasure13})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient14 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient14}.png`}
                        alt={drink.strIngredient14}
                      />
                      <Ingredient14>{drink.strIngredient14}</Ingredient14>
                      <Measure>({drink.strMeasure14})</Measure>
                    </InnerWrap>
                  )}
                  {drink.strIngredient15 === null ? null : (
                    <InnerWrap>
                      <IngredientImg
                        src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient15}.png`}
                        alt={drink.strIngredient15}
                      />
                      <Ingredient15>{drink.strIngredient15}</Ingredient15>
                      <Measure>({drink.strMeasure15})</Measure>
                    </InnerWrap>
                  )}
                </IngredientsWrap>
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
  overflow: scroll;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const DrinkImg = styled.img`
  width: 420px;
  height: 420px;
  border-radius: 20px;
  margin-right: 20px;
`;

const Details = styled.div`
  margin: 0 40px;
`;

const IngredientsWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerWrap = styled.div`
  display: flex;
  margin: 50px 0;
  flex-direction: column;

  > p {
    text-align: center;
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

const IngredientImg = styled.img`
  width: 170px;
`;

const Measure = styled.p`
  color: darkgray;
`;

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
