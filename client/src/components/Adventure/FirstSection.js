import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import bg from "../../assets/Cocktails.jpg";
import LoadingScreen from "../Loading/LoadingScreen";

const FirstSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {!loading ? (
        <Wrapper>
          <ImgWrap>
            <Img src={bg} />
          </ImgWrap>
          <InnerWrap>
            <Title>KÒKTEL</Title>
          </InnerWrap>
          <Button>
            <a href="/video">Begin The Adventure 🌴</a>
          </Button>
        </Wrapper>
      ) : (
        <LoadingScreen />
      )}
    </>
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
  object-fit: cover;
  filter: brightness(35%);
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 120px;
  letter-spacing: 10px;
`;

const gradient = keyframes`
  from {

    background-position: 0% 50%;
  }
  to {

    background-position: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  background: linear-gradient(to right, #a2ccb6 0%, #fceeb5 50%, #ee786e 100%);
  background-size: 500%;
  border: none;
  border-radius: 5rem;
  bottom: 100px;
  color: white;
  cursor: pointer;
  font: 1.5em "Raleway", sans-serif;
  height: 5rem;
  letter-spacing: 0.05em;
  outline: none;
  width: 22rem;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    animation: ${gradient} 2s forwards;
  }

  > a {
    text-decoration: none;
    color: white;
    padding: 25px 15px;
  }
`;

export default FirstSection;
