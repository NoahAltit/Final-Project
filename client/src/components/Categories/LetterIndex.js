import styled from "styled-components";

import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const LetterIndex = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <Letter to="/letter/a">A</Letter>
        <Letter to="/letter/b">B</Letter>
        <Letter to="/letter/c">C</Letter>
        <Letter to="/letter/d">D</Letter>
        <Letter to="/letter/e">E</Letter>
        <Letter to="/letter/f">F</Letter>
        <Letter to="/letter/g">G</Letter>
        <Letter to="/letter/h">H</Letter>
        <Letter to="/letter/i">I</Letter>
        <Letter to="/letter/j">J</Letter>
        <Letter to="/letter/k">K</Letter>
        <Letter to="/letter/l">L</Letter>
        <Letter to="/letter/m">M</Letter>
        <Letter to="/letter/n">N</Letter>
        <Letter to="/letter/o">O</Letter>
        <Letter to="/letter/p">P</Letter>
        <Letter to="/letter/q">Q</Letter>
        <Letter to="/letter/r">R</Letter>
        <Letter to="/letter/s">S</Letter>
        <Letter to="/letter/t">T</Letter>
        <Letter to="/letter/v">V</Letter>
        <Letter to="/letter/w">W</Letter>
        <Letter to="/letter/y">Y</Letter>
        <Letter to="/letter/z">Z</Letter>
        <Letter to="/letter/1">1</Letter>
        <Letter to="/letter/2">2</Letter>
        <Letter to="/letter/3">3</Letter>
        <Letter to="/letter/4">4</Letter>
        <Letter to="/letter/5">5</Letter>
        <Letter to="/letter/6">6</Letter>
        <Letter to="/letter/7">7</Letter>
        <Letter to="/letter/9">9</Letter>
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

const Letter = styled(Link)`
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
