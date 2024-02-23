const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
});

const Category = mongoose.model("Category", categorySchema);

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);

async function getProductsPopulatedWithCategory() {
  try {
    const products = await Product.find().populate("category");
    return products;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  Category,
  Product,
  getProductsPopulatedWithCategory,
};
