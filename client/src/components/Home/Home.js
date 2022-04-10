import styled from "styled-components";
import Header from "../Header/Header";
import SecOne from "./Sections/SecOne";
import SecTwo from "./Sections/SecTwo";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <SecOne />
      <SecTwo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
`;

export default Home;
