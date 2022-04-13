import LetterIndex from "./LetterIndex";
import GlassTypes from "./Lists/GlassTypes";
import Header from "../Header/Header";
import styled from "styled-components";
import CategoryList from "./Lists/CategoryList";

const Categories = () => {
  return (
    <Section>
      <Header />
      <Wrapper>
        <LetterIndex />
      </Wrapper>
      <CategoryList />
      <GlassTypes />
    </Section>
  );
};

const Section = styled.section`
  overflow: hidden;
`;

const Wrapper = styled.div`
  padding-top: 80px;
`;

export default Categories;
