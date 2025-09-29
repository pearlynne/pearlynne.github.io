import React from "react";
import Body from "../components/Body";
import ProfileImg from "../assets/Profile4.jpeg";

function About() {
  return (
    <Body>
      <div id="about" className="about-section">
        {/* <div className="section-title">About me</div> */}
        <div className="about-grid">
          <div className="profile-img">
            <a
              href="https://linkedin.com/in/pearlynne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ProfileImg} alt="Profile picture" />
            </a>
          </div>
          <div className="profile-text">
            <div>
              <h2>Hi, I’m Pearlynne. </h2>
              <h1>I'm an <a href="/consulting">independent data consultant.</a> </h1>
            </div>
            <div>
							<p>
								With 8 years of experience and a <a href="/publications">PhD in Human Development</a>, I bring
								expertise in{" "}
								<a href="/portfolio">
									data and statistical analysis
								</a>
								, plus domain knowledge in sleep and neurodevelopment. I also
								apply foundational{" "}
								<a href="/portfolio">software development skills </a>to
								data-driven projects.
							</p>
							<p>
								I’m passionate about uncovering patterns in data and offer {" "}
								<a href="/consulting">consulting</a> to help researchers and
								organizations with analysis, study design, and academic writing.
							</p>
							<p>
								Outside of tech, I coach individuals with ADHD and run my own
								jewelry business.
							</p>
						</div> 
          <div><a href="/consulting">Learn how I can help</a> | <a href="mailto:contact@pearlynne.dev">Contact me!</a></div>
					</div>
        </div>
      </div>
    </Body>
  );
}

export default About;
