const favorites = require("./data/favorites.json");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db("Koktel");

const batchImport = async () => {
  try {
    await client.connect();

    await db.collection("favorites").insertMany(favorites);
  } catch (err) {
    console.log(err);
  }
  client.close();
};

batchImport();
