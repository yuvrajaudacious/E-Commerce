"use client";

import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const addproduct = async () => {
    console.log(title, price);
    let data = await fetch("http://localhost:3000/api/product", {
      method: "Post",
      body: JSON.stringify({ title, price }),
    });
    data = await data.json();
    console.log(data)
  };
  return (
    <div>
      <h1>add Product</h1>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Enter Price"
        onChange={(e) => setprice(e.target.value)}
      />
      <button onClick={addproduct}>add</button>
    </div>
  );
};

export default AddProduct;
