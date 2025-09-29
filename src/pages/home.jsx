import React from "react";
import Body from "../components/Body";
import About from "./about";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <Body>
        <div className="home-section">
            <h2>Hello. I'm Pearlynne. </h2>
          <h1>
						I'm an Independent Data Consultant
          </h1>
          <p>Explore my portfolio or contact me.</p>
        </div>
      </Body> */}
      <About />
    </>
  );
}

export default Home;
