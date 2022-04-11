import styled from "styled-components";

import { useState, useEffect } from "react";
import { CgMoreO } from "react-icons/cg";

import highball from "../../../assets/Glass Types/Highball.png";
import cocktail from "../../../assets/Glass Types/Cocktail.png";
import oldfash from "../../../assets/Glass Types/OldFash.png";
import whiskey from "../../../assets/Glass Types/Whiskey.png";
import collins from "../../../assets/Glass Types/Collins.png";

const GlassTypes = () => {
  const [glasses, setGlasses] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("/glassList")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setGlasses(data.data);
      });
  }, []);

  if (!glasses) {
    return <p></p>;
  }

  const more = glasses.drinks.slice(5, 32);
  console.log(more);

  return (
    <Section>
      <Title>Glass Types</Title>
      <Wrapper>
        <GlassWrap className="highball">
          <GlassImg src={highball} />
          <Line />
          <GlassType>Highball Glass</GlassType>
        </GlassWrap>
        <GlassWrap className="cocktail">
          <GlassImg src={cocktail} />
          <Line />
          <GlassType>Cocktail Glass</GlassType>
        </GlassWrap>
        <GlassWrap className="oldfash">
          <GlassImg src={oldfash} />
          <Line />
          <GlassType>Old-Fashioned Glass</GlassType>
        </GlassWrap>
        <GlassWrap className="whiskey">
          <GlassImg src={whiskey} />
          <Line />
          <GlassType>Whiskey Glass</GlassType>
        </GlassWrap>
        <GlassWrap className="collins">
          <GlassImg src={collins} />
          <Line />
          <GlassType>Collins Glass</GlassType>
        </GlassWrap>
        <GlassWrap
          className="more"
          onClick={() => {
            setShowMore(true);
          }}
        >
          {!showMore && <CgMoreO className="icon" />}
          {showMore && (
            <List>
              {more.map((glass) => {
                return <Glass>{glass.strGlass}</Glass>;
              })}
            </List>
          )}
        </GlassWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 100px; */
`;

const Wrapper = styled.div`
  display: grid;
  color: white;
  align-items: center;
  grid-template-columns: repeat(6, max-content);
  gap: 3rem 3rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 150px;
`;

const GlassWrap = styled.div`
  width: 300px;
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  > p {
    transition: all 0.5s ease-in-out;
    opacity: 0;
  }

  &:hover {
    > div {
      opacity: 1;
    }
  }

  &:hover {
    transform: translate(0, -100px);

    div > &.more {
      transform: translate(0, 0);
    }

    > p {
      opacity: 1;
      transform: translate(0, -10px);
    }
  }

  .icon {
    font-size: 30px;
  }
`;

const GlassImg = styled.img`
  width: 200px;
`;

const Line = styled.div`
  width: 2px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;

const GlassType = styled.p`
  margin-top: 30px;
  font-size: 20px;
  letter-spacing: 3px;
  font-family: "Cleavers Juvenia";
`;

const List = styled.ul``;

const Glass = styled.li`
  font-size: 20px;
  margin: 10px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.3;
  }
`;

export default GlassTypes;
