import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const AddFavorites = () => {
  const [text, setText] = useState("Add to Favorites");
  const [style, setStyle] = useState("white");
  const [favorites, setFavorites] = useState([]);
  const { drinkName } = useParams();

  const handleClick = () => {
    setStyle("red");
    setText("Added to Favorites!");

    fetch(`/name/${drinkName}`)
      .then((res) => res.json())
      .then((data) => {
        const newFavorites = [...favorites, data.data.drinks];
        console.log(newFavorites);
        setFavorites(newFavorites);
      });
  };

  return (
    <FavoriteWrap
      onClick={() => {
        handleClick();
      }}
      // onClick={() => {
      //   style === "white" ? setStyle("red") : setStyle("white");
      //   text === "Add to Favorites"
      //     ? setText("Added to Favorites!")
      //     : setText("Add to Favorites");
      // }}
    >
      <Text>{text}</Text>
      <BsHeartFill className="icon" style={{ color: style }} />
    </FavoriteWrap>
  );
};

const FavoriteWrap = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  .icon {
    font-size: 25px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

export default AddFavorites;
