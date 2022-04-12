import styled from "styled-components";

import { BsArrowLeftCircle } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const LetterIndex = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Letter href="/letter/a">A</Letter>
        <Letter href="/letter/b">B</Letter>
        <Letter href="/letter/c">C</Letter>
        <Letter href="/letter/d">D</Letter>
        <Letter href="/letter/e">E</Letter>
        <Letter href="/letter/f">F</Letter>
        <Letter href="/letter/g">G</Letter>
        <Letter href="/letter/h">H</Letter>
        <Letter href="/letter/i">I</Letter>
        <Letter href="/letter/j">J</Letter>
        <Letter href="/letter/k">K</Letter>
        <Letter href="/letter/l">L</Letter>
        <Letter href="/letter/m">M</Letter>
        <Letter href="/letter/n">N</Letter>
        <Letter href="/letter/o">O</Letter>
        <Letter href="/letter/p">P</Letter>
        <Letter href="/letter/q">Q</Letter>
        <Letter href="/letter/r">R</Letter>
        <Letter href="/letter/s">S</Letter>
        <Letter href="/letter/t">T</Letter>
        <Letter href="/letter/v">V</Letter>
        <Letter href="/letter/w">W</Letter>
        <Letter href="/letter/y">Y</Letter>
        <Letter href="/letter/z">Z</Letter>
        <Letter href="/letter/1">1</Letter>
        <Letter href="/letter/2">2</Letter>
        <Letter href="/letter/3">3</Letter>
        <Letter href="/letter/4">4</Letter>
        <Letter href="/letter/5">5</Letter>
        <Letter href="/letter/6">6</Letter>
        <Letter href="/letter/7">7</Letter>
        <Letter href="/letter/9">9</Letter>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color: #5f99fa; */
  background-image: linear-gradient(
    109.6deg,
    rgba(45, 116, 213, 1) 11.2%,
    rgba(121, 137, 212, 1) 91.2%
  );
`;

const Letter = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 22px;
  transition: all 0.3s ease-in-out;

  &:hover {
    padding: 10px;
    background-color: deepskyblue;
    border-radius: 50%;
  }
`;

export default LetterIndex;
