import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "../../../Lib/Model/user"; // Assuming you have a User model defined
import { connection } from "../../../Lib/db";

// Validate user data
const validateUserData = (data, isSignup = true) => {
  const { email, password, name, number } = data;
  if (!email || !password) {
    return "Email and password are required";
  }
  if (isSignup && (  !number)) {
    return "Name and number are required for signup";
  }
  return null;
};

export const POST = async (req) => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: false,
    });

    const reqBody = await req.json();

    const validationError = validateUserData(reqBody);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { email, password, number } = reqBody;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({ email, password, name, number });

    await newUser.save();
    console.log("New user registered:", newUser);

    return NextResponse.json({ message: "User registered successfully" });
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

    const reqBody = await req.json();

    const validationError = validateUserData(reqBody);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { username, password } = reqBody;

    // Authenticate user based on username and password
    const authenticatedUser = await User.findOne({ username, password });
    if (!authenticatedUser) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    console.log("User authenticated:", authenticatedUser);
    return NextResponse.json({ message: "User authenticated successfully" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { result: "Internal server error" },
      { status: 500 }
    );
  }
};
