const fetch = require("isomorphic-fetch");

const getCocktailsByLetter = async (req, res) => {
  try {
    const drinkLetter = req.params.drinkLetter;

    const requestLetter = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkLetter}`
    );
    const cocktails = await requestLetter.json();

    res.status(200).json({ status: 200, data: cocktails });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Cocktails not found. Don't drink and type..",
    });
    console.log(err);
  }
};

const getCocktailsByName = async (req, res) => {
  try {
    const drinkName = req.params.drinkName;

    const requestName = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );
    const cocktails = await requestName.json();

    res.status(200).json({ status: 200, data: cocktails });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Cocktails not found. Don't drink and type..",
    });
    console.log(err);
  }
};

const getCocktailsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;

    const requestCategory = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );
    const category = await requestCategory.json();

    res.status(200).json({ status: 200, data: category });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message:
        "Category not found. Slow down there, buddy. Don't drink too much.",
    });
    console.log(err);
  }
};

const getCocktailsByGlassType = async (req, res) => {
  try {
    const glassType = req.params.glassType;

    const requestCocktails = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassType}`
    );
    const cocktails = await requestCocktails.json();

    res.status(200).json({ status: 200, data: cocktails });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Drinks not found. You're seeing double I guarantee it.",
    });
    console.log(err);
  }
};

const getCategoryList = async (req, res) => {
  try {
    const requestCategories = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    const category = await requestCategories.json();

    res.status(200).json({ status: 200, data: category });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message:
        "Category not found. Slow down there, buddy. Don't drink too much.",
    });
    console.log(err);
  }
};

const getGlassList = async (req, res) => {
  try {
    const requestGlass = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`
    );
    const types = await requestGlass.json();

    res.status(200).json({ status: 200, data: types });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Glass types not found.",
    });
    console.log(err);
  }
};

const getIngredientList = async (req, res) => {
  try {
    const requestIngredients = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    const ingredients = await requestIngredients.json();

    res.status(200).json({ status: 200, data: ingredients });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "Ingredients not found.",
    });
    console.log(err);
  }
};

const { accounts } = require("./data/accounts");

const loginAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = accounts.find((user) => user.email === email);

    console.log("Login", user);

    user && user.password === password
      ? res.status(201).json({ status: 201, message: "Logged in successfully" })
      : res
          .status(404)
          .json({ status: 404, message: "Account details do not match." });
  } catch (err) {
    console.log(err);
  }
};

const createAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = accounts.find((user) => user.email === email);
    console.log("Sign Up", user);

    if (user) {
      res.status(400).json({
        status: 400,
        message: "Seems like an account is already linked to this email.",
      });
    } else {
      accounts.push({ email, password });
      res
        .status(201)
        .json({ status: 201, message: "Account created successfully." });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCocktailsByLetter,
  getCocktailsByName,
  getCocktailsByCategory,
  getCocktailsByGlassType,
  getCategoryList,
  getGlassList,
  getIngredientList,
  loginAccount,
  createAccount,
};
