import { BrowserRouter, Route, Switch } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import CocktailList from "./components/Categories/Lists/CocktailList";
import DrinksByCategory from "./components/Categories/Lists/DrinksByCategory";
import Debut from "./components/Debut/Debut";
import VideoSection from "./components/Debut/VideoSection";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Debut />
          </Route>
          <Route path={"/video"}>
            <VideoSection />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
          <Route path={"/categories"}>
            <Categories />
          </Route>
          <Route path={"/letter/:drinkLetter"}>
            <CocktailList />
          </Route>
          <Route path={"/category/:categoryName"}>
            <DrinksByCategory />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
