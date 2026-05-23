import React from "react";
import data from "../assets/mockData.json";
import Cards from "./Cards";
import Picks from "./Picks";
import Community from "./Community";
import Hero from "./Hero";

function Home() {

  return (
    <div className=" space-y-10 pr-6 pl-6 select-none ">
      <Hero/>
      <Picks />
      <Community />
    </div>
  );
}

export default Home;