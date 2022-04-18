import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import styled from "styled-components";

const AddFavorites = ({ idDrink, strDrink, strDrinkThumb }) => {
  const [text, setText] = useState("Add to Favorites");
  const [style, setStyle] = useState("white");

  const handleAddToFavorite = () => {
    fetch("/favorites/add", {
      method: "POST",
      body: JSON.stringify({ idDrink, strDrink, strDrinkThumb }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 201) {
          setStyle("red");
          setText("Added to Favorites!");
        } else if (data.status === 400) {
          setText("Already in Favorites!");
        }
      });
  };

  return (
    <>
      <FavoriteWrap
        onClick={() => {
          handleAddToFavorite();
        }}
      >
        <Text>{text}</Text>
        <BsHeartFill className="icon" style={{ color: style }} />
      </FavoriteWrap>
    </>
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
