const express = require("express");
const { MongoClient } = require("mongodb");

const route = express.Router();

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let database, collection;
async function connectDatabase() {
  await client.connect();
  database = client.db("chat");
  collection = database.collection("user");
}
connectDatabase();

route.use(require("body-parser").json());

route.post("/login", async (req, res) => {
  try {
    await collection.insertOne(req.body);
    res.sendStatus(201);
  } catch {
    res.sendStatus(400);
  }
});

module.exports = route;
