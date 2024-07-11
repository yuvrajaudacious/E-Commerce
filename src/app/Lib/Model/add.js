import mongoose from "mongoose";
const AddProduct = new mongoose.Schema({
  title: String,
  description: String,
  producttype: String,
  price: Number,
  image: String,
});
const Product =
  mongoose.models.addproduct || mongoose.model("addproduct", AddProduct);
export default Product;
