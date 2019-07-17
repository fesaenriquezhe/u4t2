const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const productModel = mongoose.model('Producto', productSchema, 'productos');

module.exports = productModel;