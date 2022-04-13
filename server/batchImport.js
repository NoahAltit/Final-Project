// const fetch = require("isomorphic-fetch");

// const { MongoClient } = require("mongodb");

// require("dotenv").config();
// const { MONGO_URI } = process.env;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const client = new MongoClient(MONGO_URI, options);
// const db = client.db("Koktel");

// const batchImport = async () => {
//   try {
//     await client.connect();

//     const letter = "a";

//     const url = await fetch(
//       `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
//     );

//     await db.collection("cocktailsByLetter").insertOne(url);
//   } catch (err) {
//     console.log(err);
//   }
//   client.close();
// };

// batchImport();
