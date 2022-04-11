import styled from "styled-components";
// import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import ordinary from "../../../assets/Categories/Ordinary.png";
import cocktail from "../../../assets/Categories/Cocktail.png";
import shake from "../../../assets/Categories/Shake.png";
import cocoa from "../../../assets/Categories/Cocoa.png";
import shot from "../../../assets/Categories/Shot.png";
import coftea from "../../../assets/Categories/Coffee.png";
import homemade from "../../../assets/Categories/Homemade.png";
import party from "../../../assets/Categories/Party.png";
import beer from "../../../assets/Categories/Beer.png";
import soft from "../../../assets/Categories/Soft.png";
import mystery from "../../../assets/Categories/Mystery.png";

const CategoryList = () => {
  // const [categories, setCategories] = useState(null);

  // useEffect(() => {
  //   fetch("/categoryList")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setCategories(data.data);
  //     });
  // }, []);

  // if (!categories) {
  //   return <p></p>;
  // }

  const history = useHistory();

  return (
    <Section>
      <Title>Categories</Title>
      <Wrapper>
        <CategWrap
          className="ordinary"
          onClick={() => history.push("/category/Ordinary drink")}
        >
          <CategImg src={ordinary} />
          <CategName>Ordinary Drink</CategName>
        </CategWrap>

        <CategWrap
          className="cocktail"
          onClick={() => history.push("/category/cocktail")}
        >
          <CategImg src={cocktail} />
          <CategName>Cocktail</CategName>
        </CategWrap>

        <CategWrap
          className="shake"
          onClick={() => history.push("/category/shake")}
        >
          <CategImg src={shake} />
          <CategName>Shake</CategName>
        </CategWrap>

        <CategWrap
          className="cocoa"
          onClick={() => history.push("/category/cocoa")}
        >
          <CategImg src={cocoa} />
          <CategName>Cocoa</CategName>
        </CategWrap>

        <CategWrap
          className="shot"
          onClick={() => history.push("/category/shot")}
        >
          <CategImg src={shot} />
          <CategName>Shot</CategName>
        </CategWrap>

        <CategWrap
          className="coftea"
          // onClick={() => history.push("/category/coftea")}
        >
          <CategImg src={coftea} />
          <CategName>Coffee / Tea</CategName>
        </CategWrap>

        <CategWrap
          className="homemade"
          onClick={() => history.push("/category/homemade liqueur")}
        >
          <CategImg src={homemade} />
          <CategName>Homemade Liqueur</CategName>
        </CategWrap>

        <CategWrap
          className="party"
          // onClick={() => history.push("/category/")}
        >
          <CategImg src={party} />
          <CategName>Party Drink</CategName>
        </CategWrap>

        <CategWrap
          className="beer"
          onClick={() => history.push("/category/beer")}
        >
          <CategImg src={beer} />
          <CategName>Beer</CategName>
        </CategWrap>

        <CategWrap
          className="soft"
          onClick={() => history.push("/category/soft drink")}
        >
          <CategImg src={soft} />
          <CategName>Soft Drink</CategName>
        </CategWrap>

        <CategWrap
          className="mystery"
          // onClick={() => history.push("/category/")}
        >
          <CategImg src={mystery} />
          <CategName>Mystery</CategName>
        </CategWrap>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  height: auto;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  display: grid;
  color: white;
  grid-template-columns: repeat(5, max-content);
  gap: 3rem 3rem;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 70px;
`;

const CategWrap = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &.ordinary {
    background-image: radial-gradient(
      circle farthest-corner at 14.2% 24%,
      rgba(239, 61, 78, 1) 0%,
      rgba(239, 61, 78, 0.81) 51.8%,
      rgba(239, 61, 78, 0.63) 84.6%
    );
  }

  &.cocktail {
    background-image: linear-gradient(
      109.6deg,
      rgba(245, 56, 56, 1) 11.2%,
      rgba(234, 192, 117, 1) 78%
    );
  }

  &.shake {
    background-image: linear-gradient(
      109.6deg,
      rgba(33, 103, 43, 1) 11.3%,
      rgba(117, 162, 61, 1) 91.1%
    );
  }

  &.cocoa {
    background-image: linear-gradient(315deg, #ba9a8e 20%, #96705b 55%);
  }

  &.shot {
    background-image: linear-gradient(160deg, #f28c28 10%, #0c8e43 90%);
  }

  &.coftea {
    background: linear-gradient(to right, #603813, #b29f94);
  }

  &.homemade {
    background-image: linear-gradient(315deg, #a44200 0%, #f2c17d 74%);
  }

  &.party {
    background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  }

  &.beer {
    background-image: linear-gradient(315deg, #fbb034 50%, #ffdd00 80%);
  }

  &.soft {
    background-image: linear-gradient(
      178.2deg,
      rgba(118, 8, 23, 1) 10.9%,
      rgba(158, 12, 33, 1) 62.6%
    );
  }

  &.mystery {
    background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
  }
`;

const CategImg = styled.img`
  width: 200px;
  transition: all 0.3s ease-in-out;

  /* &:hover {
    transform: scale(1.2);
  } */
`;

const CategName = styled.h1`
  font-size: 24px;
  padding: 0 80px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  z-index: 5;
`;

export default CategoryList;
