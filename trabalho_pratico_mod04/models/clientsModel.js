import mongoose from 'mongoose';

const clientsSchema = mongoose.Schema({
  agencia: {
    type: Number,
    required: true
  },
  conta: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  balance: {
    type: String,
    required: true,
    min=0,
  },
  lastModified: {
    type: Date,
    required: true,
    default: Date.now
  },
});

const clientsSchema = mongoose.model('collectionclientes', clientsSchema, 'collectionclientes');

export {clientsModel};