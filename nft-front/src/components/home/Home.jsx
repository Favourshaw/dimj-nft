import React from "react";
import Hero from "./Hero";
import "./home.css";
import TopArt from "./TopArt";
import Nav from "../header/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <TopArt />
    </>
  );
};

export default Home;
