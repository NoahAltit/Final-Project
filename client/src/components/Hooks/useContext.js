import { createContext, useState, useEffect } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState(null);
  const [drinksTwo, setDrinksTwo] = useState(null);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDrinks(data);
      });

    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDrinksTwo(data);
      });
  }, []);

  return (
    <DrinksContext.Provider value={{ drinks, drinksTwo }}>
      {children}
    </DrinksContext.Provider>
  );
};
