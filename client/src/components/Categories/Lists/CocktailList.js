import styled from "styled-components";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";

const CocktailList = () => {
  const { drinkLetter } = useParams();
  const [drinks, setDrinks] = useState(null);
  const [style, setStyle] = useState("");
  const history = useHistory();

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
      <Title>{` ${drinkLetter.toUpperCase()}`}</Title>
      <Icon onClick={() => history.push("/categories")}>
        <BsArrowLeftCircle className="icon" /> Categories
      </Icon>
      <Wrapper>
        {drinks.drinks.map((drink) => {
          return (
            <InnerWrapper>
              <DrinkImg src={drink.strDrinkThumb} />
              <DrinkName>{drink.strDrink}</DrinkName>
              <RecipeDiv className="recipeDiv">
                <Button>
                  <Text>VIEW RECIPE</Text>
                </Button>
              </RecipeDiv>
            </InnerWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100vw;
  height: 100vh;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  overflow-y: hidden;
`;

const Title = styled.h1`
  margin-top: 100px;
  position: fixed;
  left: 50%;
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

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;

  .recipeDiv {
    transition: all 0.4s ease-in-out;
    opacity: 0;
  }

  .recipeDiv:hover {
    opacity: 1;
  }
`;

const DrinkName = styled.h5`
  font-size: 30px;
  text-align: center;
  font-family: "Cleavers Juvenia";
  position: absolute;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(63deg, #48378e, #849cfd 100%);
  letter-spacing: 4px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const DrinkImg = styled.img`
  width: 400px;
  border-radius: 20px;
`;

const RecipeDiv = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  font-family: "Cleavers Juvenia";

  &:active {
    transform: scale(0.97);
  }
`;

const Button = styled.a`
  border-radius: 0 30px;
  min-width: 340px;
  min-height: 60px;
  line-height: 60px;
  background-color: #5f9bfc;
  letter-spacing: 5px;
  text-decoration: none;
  padding: 13px 30px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 20px;
`;

export default CocktailList;
