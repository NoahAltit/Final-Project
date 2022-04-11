import LetterIndex from "./LetterIndex";
import GlassTypes from "./Lists/GlassTypes";
import IngredientsList from "./Lists/IngredientsList";
import Header from "../Header/Header";
import styled from "styled-components";
import CategoryList from "./Lists/CategoryList";

const Categories = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <LetterIndex />
      </Wrapper>
      <CategoryList />
      <GlassTypes />
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 80px;
`;

export default Categories;
