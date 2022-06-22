import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DrinksProvider } from "./components/Hooks/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DrinksProvider>
    <App />
  </DrinksProvider>
);
