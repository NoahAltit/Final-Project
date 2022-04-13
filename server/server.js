"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

const {
  getCocktailsByLetter,
  getCocktailsByName,
  getCocktailsByCategory,
  getCocktailsByGlassType,
  getCategoryList,
  getGlassList,
  getIngredientList,
  loginAccount,
  createAccount,
} = require("./handlersLocal");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST Endpoints
  .get("/letter/:drinkLetter", getCocktailsByLetter)
  .get("/name/:drinkName", getCocktailsByName)
  .get("/category/:categoryName", getCocktailsByCategory)
  .get("/glass/:glassType", getCocktailsByGlassType)

  // ====== Lists ====== //
  .get("/categoryList", getCategoryList)
  .get("/glassList", getGlassList)
  .get("/ingredientsList", getIngredientList)
  // ====== Lists ====== //

  // ====== Account ====== //
  .post("/login-account", loginAccount)
  .post("/create-account", createAccount)
  // ====== Account ====== //

  // REST Endpoints

  .listen(PORT, () => console.info(`🌎 Listening on port ${PORT}`));
