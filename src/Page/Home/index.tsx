import Hero from "@/Component/Hero";
import React from "react";
import Category from "../Category";
import NavBar2 from "@/Component/Navbar2";
import NewArrivals from "../NewArive";
import { Divider } from "antd";
import StepsComponent from "../StepsComponent";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <NewArrivals />
      <Divider />
      <StepsComponent />

      {/* <NavBar2 /> */}
    </div>
  );
};

export default Home;
