const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://Reddirani:Reddirani@cluster0.xyittmy.mongodb.net/";
const client = new MongoClient(url);

async function main() {
  let connection = await client.connect();
  let db = await connection.db("reviews");
  let collection = await db.collection("reviews");

  let data = await collection.find({}).toArray();

  console.log(data);
}
main();
