import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "../../Lib/Model/add";
import { connection } from "../../Lib/db";

const validateProductData = (data) => {
  const { title, price, description, producttype, image } = data;
};

export const POST = async (req, res) => {
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
