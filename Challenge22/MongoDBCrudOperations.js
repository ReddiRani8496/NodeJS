const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});
const Product = mongoose.model("Product", productSchema);
async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw error;
  }
}
async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
}
async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, {
      new: true,
    });
    return product;
  } catch (error) {
    throw error;
  }
}
async function deleteProduct(productId) {
  try {
    const product = await Product.findByIdAndDelete(productId);
    return product;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
