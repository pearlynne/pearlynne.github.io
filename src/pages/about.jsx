import React from "react";
import Body from "../components/Body";
import ProfileImg from "../assets/Profile4.jpeg";


function About() {
  return (
    <Body>
			<div id="about" className="about-section">
				<div className="section-title">About me</div>
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
						<p>
							Hi, I’m Pearl! I’m a PhD graduate with expertise in data analysis,
							visualization, and modeling, using tools like R and Python. My
							research has focused on longitudinal and cross-sectional data in
							sleep and neurodevelopment.
						</p>
						<p>
							I’m currently exploring data science and software development,
							driven by a love for uncovering patterns in data—especially in
							mental health.
						</p>
						<p>Outside of tech, I coach individuals with ADHD and run my own jewelry business!</p>
					</div>
				</div>
			</div>
		</Body>
  );
}

export default About;
