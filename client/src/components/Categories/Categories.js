import LetterIndex from "./LetterIndex";
import GlassTypes from "./Lists/GlassTypes";
import Header from "../Header/Header";
import styled from "styled-components";
import CategoryList from "./Lists/CategoryList";

const Categories = () => {
  return (
    <Section>
      <Header />
      <LetterIndex />
      <CategoryList />
      <GlassTypes />
    </Section>
  );
};

const Section = styled.section`
  overflow: hidden;
`;

export default Categories;
