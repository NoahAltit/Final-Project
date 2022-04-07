import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DrinksProvider } from "./components/Hooks/useContext";

ReactDOM.render(
  <DrinksProvider>
    <App />
  </DrinksProvider>,
  document.getElementById("root")
);
