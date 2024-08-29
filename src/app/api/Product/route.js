import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "../../Lib/Model/add";
import { connection } from "../../Lib/db";

const allowedProductTypes = ["men", "women", "child"];

const validateProductData = (data) => {
  const { title, price, description, producttype, image } = data;
  if (!title || !price || !description || !producttype || !image) {
    return "All fields are required";
  }
  if (!allowedProductTypes.includes(producttype)) {
    return `Invalid product type. Allowed types are: ${allowedProductTypes.join(
      ", "
    )}`;
  }
  return null;
};

export const GET = async (req) => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    const products = await Product.find({}).exec();

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { result: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    const reqBody = await req.json();

    const validationError = validateProductData(reqBody);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { title, price, description, producttype, image } = reqBody;

    const newProduct = new Product({
      title,
      price,
      description,
      producttype,
      image,
    });

    await newProduct.save();
    console.log("New product added:", newProduct);

    return NextResponse.json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { result: "Internal server error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    console.log("Product deleted:", deletedProduct);
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { result: "Internal server error" },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    const { id, ...updateData } = await req.json();
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const validationError = validateProductData(updateData);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    console.log("Product updated:", updatedProduct);
    return NextResponse.json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { result: "Internal server error" },
      { status: 500 }
    );
  }
};
