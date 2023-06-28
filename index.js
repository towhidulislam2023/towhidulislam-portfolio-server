const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT||5000
// towhidulislam2bdportfollio
// WlNF9EiKQdb5eZgr
app.get('/', (req, res) => {
  res.send('Towhidulislam is Running')
})

console.log(process.env.PORTFOLLIO_DB_USER);
console.log(process.env.PORTFOLLIO_DB_PASS);

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.PORTFOLLIO_DB_USER}:${process.env.PORTFOLLIO_DB_PASS}@cluster0.w8zzyxt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})