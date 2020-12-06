
import pkg from 'mongodb';
const { MongoClient } = pkg;

//import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://leokattah:Brasil-01@cluster0.yk9df.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 });
client.connect(err => {
  const collection = client.db("accounts");
  // perform actions on the collection object
  client.close();
});
