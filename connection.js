
const databaseName='main'
const { MongoClient, ServerApiVersion } = require('mongodb');



const uri = "mongodb+srv://rohangaikwad156:Rohan%401234@cluster0.oucc9r6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnect(collection) {
  try {
    console.log("inside dbconnect!");

    // Connect the client to the server	(optional starting in v4.7)
    let result = await client.connect();
    db= result.db(databaseName);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    return  db.collection(collection);
   
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
dbConnect().catch(console.dir);
module.exports= dbConnect;

