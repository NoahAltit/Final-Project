import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const LoadingScreen = () => {
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimesUp(true), 3000);
  }, []);

  return (
    <Wrapper>
      <Loader>
        <Title>KÒKTEL</Title>
        {!timesUp && <Subtitle>Loading...</Subtitle>}
        {timesUp && <Subtitle>Drunk Yet?</Subtitle>}
        <Drops />
        <DropOne />
        <DropTwo />
        <DropThree />
      </Loader>
    </Wrapper>
  );
};

const move = keyframes`
  0%{
    transform: translate(120%, 10%);
    height: 60px;
  }
  30%{
    transform: translate(120%,20%);
    height: 30px;
  }
  70%{
    transform: translate(120%,100%);
    height: 30px;
  }
  100%{
    transform: translate(120%,800%) scaleX(0.2);
    height: 60px;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
`;

const Title = styled.h1`
  position: absolute;
  font-size: 25px;
  z-index: 3;
`;

const Subtitle = styled.h5`
  position: absolute;
  z-index: 3;
  margin-top: 80px;
`;

const Drops = styled.div`
  border-radius: 10px;
  position: relative;
  height: 120px;
  width: 120px;
  background-color: #10a7c1;
  z-index: 2;
`;

const DropOne = styled.div`
  width: 21px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  background-color: #10a7c1;
  transform: translate(120%, -800%) scaleX(0.5);
  transition: 2s;
  animation: ${move} 4s cubic-bezier(0.7, 0.04, 0.54, 0.2) infinite;
`;
const DropTwo = styled.div`
  width: 21px;
  height: 24px;
  position: absolute;
  margin-left: 50px;
  border-radius: 50%;
  background-color: #046997;
  transform: translate(120%, -800%) scaleX(0.5);
  animation: ${move} 6s cubic-bezier(1, 0.04, 0.74, 0.2) infinite;
`;
const DropThree = styled.div`
  width: 21px;
  height: 24px;
  position: absolute;
  margin-right: 100px;
  border-radius: 50%;
  background-color: #29a4c3;
  transform: translate(120%, -800%) scaleX(0.5);
  animation: ${move} 3s cubic-bezier(1, 0.04, 0.74, 0.2) infinite;
`;

export default LoadingScreen;
