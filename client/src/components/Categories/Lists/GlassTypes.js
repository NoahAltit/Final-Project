import styled from "styled-components";

import { useState, useEffect } from "react";
import { CgMoreO } from "react-icons/cg";

import highball from "../../../assets/Glass Types/Highball.png";
import cocktail from "../../../assets/Glass Types/Cocktail.png";
import oldfash from "../../../assets/Glass Types/OldFash.png";
import whiskey from "../../../assets/Glass Types/Whiskey.png";
import collins from "../../../assets/Glass Types/Collins.png";
import { useHistory } from "react-router-dom";

const GlassTypes = () => {
  const [glasses, setGlasses] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/glassList")
      .then((res) => res.json())
      .then((data) => {
        setGlasses(data.data);
      });
  }, []);

  if (!glasses) {
    return <p></p>;
  }

  const more = glasses.drinks.slice(5, 32);

  return (
    <Section>
      <Title>Glass Types</Title>
      <Wrapper>
        <GlassWrap
          className="highball"
          onClick={() => history.push("/glass/highball glass")}
        >
          <GlassImg src={highball} />
          <Line />
          <GlassType>Highball Glass</GlassType>
        </GlassWrap>
        <GlassWrap
          className="cocktail"
          onClick={() => history.push("/glass/cocktail glass")}
        >
          <GlassImg src={cocktail} />
          <Line />
          <GlassType>Cocktail Glass</GlassType>
        </GlassWrap>
        <GlassWrap
          className="oldfash"
          onClick={() => history.push("/glass/old-fashioned glass")}
        >
          <GlassImg src={oldfash} />
          <Line />
          <GlassType>Old-Fashioned Glass</GlassType>
        </GlassWrap>
        <GlassWrap
          className="whiskey"
          onClick={() => history.push("/glass/whiskey glass")}
        >
          <GlassImg src={whiskey} />
          <Line />
          <GlassType>Whiskey Glass</GlassType>
        </GlassWrap>
        <GlassWrap
          className="collins"
          onClick={() => history.push("/glass/collins glass")}
        >
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
                return (
                  <Glass
                    onClick={() => history.push(`/glass/${glass.strGlass}`)}
                  >
                    {glass.strGlass}
                  </Glass>
                );
              })}
            </List>
          )}
        </GlassWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 1435px) {
    grid-template-columns: repeat(4, max-content);
  }
`;

const Title = styled.h1`
  margin-bottom: 150px;
`;

const GlassWrap = styled.div`
  width: 250px;
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

  @media (max-width: 1705px) {
    width: 200px;
  }

  @media (max-width: 1435px) {
    width: 250px;
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

  @media (max-width: 1705px) {
    font-size: 18px;
  }
`;

export default GlassTypes;
