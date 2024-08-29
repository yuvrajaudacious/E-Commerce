import Hero from "@/Component/Hero";
import React from "react";
import Category from "../Category";
import NavBar2 from "@/Component/Navbar2";
import NewArrivals from "../NewArive";
import { Divider } from "antd";
import StepsComponent from "../StepsComponent";
import Exploring from "../Exploring";
import SpecialOffer from "../SpecialOffer";
import ChosebyExperts from "../ChosenbyourExperts";
import DontMiss from "../Don't missSpecialOffer";
import BestSellers from "../BestSellers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <NewArrivals />
      <StepsComponent />
      <Exploring />
      <SpecialOffer />
      <ChosebyExperts />
      <DontMiss />
      <BestSellers />
    </div>
  );
};

export default Home;
