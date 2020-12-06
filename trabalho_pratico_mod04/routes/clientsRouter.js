import express from "express";
import {clientsModel} from "../models/clientsModel.js";

const app = express();

//CREATE (Método de criação - POST)
app.post("/collectionclientes", async (req, res)  => {
try {
  const collectionclientes = new clientsModel(req.body);
  await collectionclientes.save();
  res.send(collectionclientes);
  } catch (error) {
    res.status(500).send(error);
  }
});


export { app as clientsRouter };