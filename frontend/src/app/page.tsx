import React from "react";
import Navbar from "./components/layouts/Navbar";
import ExploreCategory from "./components/home/exploreCategory";
import PopularStalls from "./components/home/popularStalls";

export default function Home() {
  return (
    <>
      <Navbar />
      <ExploreCategory />
      <PopularStalls />
  
    </>

  );
}
