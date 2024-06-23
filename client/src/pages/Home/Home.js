import React from "react";
import Navbar from "../../component/layout/Navbar";
import { Wrapper, TitleContainer } from "./home.styles.js";

const Home = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <h2>Welcome to Our Restaurant</h2>
        <h2>Order your favorite meals from our menu.</h2>
      </TitleContainer>
    </Wrapper>
  );
};

export default Home;
