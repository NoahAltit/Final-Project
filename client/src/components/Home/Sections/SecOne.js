import styled, { keyframes } from "styled-components";

import koktel from "../../../assets/Koktel.jpg";
import { BsMouse } from "react-icons/bs";

const SecOne = () => {
  return (
    <Wrapper>
      <ImgWrap>
        <Img src={koktel} />
      </ImgWrap>
      <InnerWrap>
        {/* <CircularText>The Future's Bright. The Future's Cocktail.</CircularText> */}
        <Title>KÒKTEL</Title>
        {/* <BsMouse className="mouse" /> */}
        {/* Move mouse to bottom when have time */}
      </InnerWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const ImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  background-size: auto 100%;
  filter: brightness(35%);
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;

  .mouse {
    font-size: 60px;
  }
`;

let circle = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const CircularText = styled.p`
  height: 160px;
  font-size: 20px;
  animation: circle 5s linear infinite;
`;

const Title = styled.h1`
  font-size: 120px;
  letter-spacing: 10px;
`;

export default SecOne;
