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
// const db = client.db("Koktel_Try-2");

const batchImport = async () => {
  try {
    await client.connect();
    console.log("CONNECTED");

    await db.collection("favorites").insertMany(favorites);
  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("DISCONNECTED");
};

batchImport();
