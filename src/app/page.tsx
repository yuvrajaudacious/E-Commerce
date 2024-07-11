import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import NavBar2 from "@/Component/Navbar2";
import AddProduct from "@/Page/Admin/AddProduct";
import Home from "@/Page/Home/index";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      {/* <NavBar2 /> */}

      <Home />
    </div>
  );
};

export default page;
