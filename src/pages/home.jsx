import React from "react";
import Body from "../components/Body";
import Portfolio from "./portfolio";
import About from "./about";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Body>
        <div className="home-section">
          <p>
            Welcome! I'm Pearl, a problem solver at heart — whether it's
            analyzing data, developing apps, or designing jewelry.
          </p>
          <p>Explore my portfolio to see how I turn ideas into reality.</p>
        </div>
      </Body>
      <Portfolio />
      <About />
    </>
  );
}

export default Home;
