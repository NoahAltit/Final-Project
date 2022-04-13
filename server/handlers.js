const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const db = client.db("Koktel");

const loginAccount = async (req, res) => {
  try {
    await client.connect();

    const { email, password } = req.body;

    const user = await db
      .collection("accounts")
      .find({ email: email })
      .toArray();

    user.length > 0 && user[0].password === password
      ? res.status(201).json({
          status: 201,
          data: user[0],
          message: "Logged in successfully",
        })
      : res
          .status(404)
          .json({ status: 404, message: "Account details do not match." });
  } catch (err) {
    console.log(err);
  }
  client.close();
};

const createAccount = async (req, res) => {
  try {
    await client.connect();

    const { email, password } = req.body;

    const user = await db
      .collection("accounts")
      .find({ email: email })
      .toArray();

    if (user.length > 0) {
      res.status(400).json({
        status: 400,
        message: "Seems like an account is already linked to this email.",
      });
    } else {
      await db.collection("accounts").insertOne({ email, password });
      res.status(201).json({
        status: 201,
        data: req.body,
        message: "Account created successfully.",
      });
    }
  } catch (err) {
    console.log(err);
  }
  client.close();
};

module.exports = {
  loginAccount,
  createAccount,
};
