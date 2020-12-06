import express from "express";
import mongoose from "mongoose";
import {clientsRouter} from "./routes/clientsRouter.js"

//Conectar o Mongodb pelo Mongoose

(async() => {
  try {
    await mongoose.connect(
      "mongodb+srv://leokattah:Brasil-01@cluster0.yk9df.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    );
    console.log("conectado ao MOngodb com sucesso");
    } catch (error) {
      console.log("Erro ao conectar ao Mongodb " + error);
    }
})();

const app = express();

app.use(express.json());
app.use(clientsRouter);

app.listen(3000,() => console.log("API Iniciada"));