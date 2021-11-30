import { MongoClient } from "mongodb";

// we will define functions that contain server-side logic for our pages
// /api/new-plant

async function handleRequest(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // the code define in here will never execute in the client side
    const DB_KEY = process.env.mongoDbKey;

    const client = await MongoClient.connect(
      `mongodb+srv://francisco:${DB_KEY}@cluster0.e9tyv.mongodb.net/watering?retryWrites=true&w=majority`
    );
    const db = client.db();

    // collections equal tables in a relational database
    const wateringCollection = db.collection("watering");

    const result = await wateringCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: "Watering parameters added",
    });
  }
}

export default handleRequest;
