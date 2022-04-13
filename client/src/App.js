import { BrowserRouter, Route, Switch } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import CocktailList from "./components/Categories/Lists/CocktailList";
import DrinksByCategory from "./components/Categories/Lists/DrinksByCategory";
import DrinksByGlassTypes from "./components/Categories/Lists/DrinksByGlassTypes";
import Debut from "./components/Debut/Debut";
import VideoSection from "./components/Debut/VideoSection";
import Home from "./components/Home/Home";
import Ingredients from "./components/Ingredients/Ingredients";
import SignIn from "./components/Sign in/SignIn";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <SignIn />
          </Route>
          <Route path={"/adventure"}>
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
          <Route path={"/glass/:glassType"}>
            <DrinksByGlassTypes />
          </Route>
          <Route path={"/name/:drinkName"}>
            <Ingredients />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
