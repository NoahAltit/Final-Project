import LetterIndex from "./LetterIndex";
import CategList from "./Lists/CocktailList";
import GlassTypes from "./Lists/GlassTypes";
import IngredientsList from "./Lists/IngredientsList";
import Header from "../Header/Header";
import styled from "styled-components";

const Categories = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <LetterIndex />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
`;

export default Categories;
