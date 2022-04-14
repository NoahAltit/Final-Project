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
        <Title>KÒKTEL</Title>
        <CircularText>The Future's Bright. The Future's Cocktail.</CircularText>
      </InnerWrap>
      <Mouse />
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
`;

let scroll = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
  transform: translateY(18px);
}
`;

const Mouse = styled.div`
  width: 45px;
  height: 70px;
  border: 2px solid white;
  border-radius: 25px;
  position: absolute;
  bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 43.92%;
    width: 6px;
    height: 10px;
    background: white;
    top: 8px;
    border-radius: 4px;
    animation: ${scroll} 1.5s infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 50%;
    height: 30px;
    width: 1px;
    background: white;
  }
`;

let typing = keyframes`
from {
  width: 0;
}
to {
  width: 96%;
}
`;

let blink = keyframes`
from, to {
  border-color: transparent;
}
50% {
  border-color: orange;
}

`;

const CircularText = styled.p`
  /* width: 470px; */
  font-size: 25px;
  overflow: hidden;
  border-right: 2px solid grey;
  white-space: nowrap;
  animation: ${typing} 5s steps(40, end), ${blink} 0.75s step-end infinite;
`;

const Title = styled.h1`
  font-size: 120px;
  letter-spacing: 10px;
`;

export default SecOne;
