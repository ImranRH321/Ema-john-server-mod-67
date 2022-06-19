const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ema john server is Running ");
});
/* ------------------------------------ */

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e3ox5.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
/* ============================================================= */
async function run() {
  try {
    await client.connect();
    //  emaJohn1.product
    const productCollection = client.db("emaJohn1").collection("product");
    /* read */
    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    /* ... */
    /* read */
    app.get("/productCount", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const count = await cursor.count();
      console.log(count , 'res');
      res.send({count});
    });
    /* ... */



  } finally {
  }
}
run().catch(console.dir);
/* ==================================================================== */
app.listen(port, () => {
  console.log(`'Ema john server is Running Port = ${port}`);
});
