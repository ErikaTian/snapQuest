// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://scenery:<username>@cluster0.u1vdrvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     console.log("HELLO Erika Tian");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// ----------------------------------------------------------------

const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const uri = "mongodb+srv://scenery:<username>@cluster0.u1vdrvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.post('/createAccount', async (req: any, res: any) => {
  try {
    await client.connect();
    const collection = client.db("my_database_name").collection("users");
    // Create a document to insert
    const result = await collection.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // Consider encrypting this before storing
    });
    res.status(200).send({ message: "Account created successfully", userId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to create account" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
