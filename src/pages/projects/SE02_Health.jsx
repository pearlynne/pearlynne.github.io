import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/SE02_HealthAPI_1.png";
import image2 from "@/assets/SE02_HealthAPI_2.png";
import image3 from "@/assets/SE02_HealthAPI_3.png";
import image4 from "@/assets/SE02_HealthAPI_4.png";

const images = [
  { src: image1, alt: "Health Tracking Figure 1", caption: "Overview of user reports" },
  { src: image2, alt: "Health Tracking Figure 2", caption: "Patient profile and details view"},
  { src: image3, alt: "Health Tracking Figure 3", caption: "Summary of patient's submitted reports" },
  { src: image4, alt: "Health Tracking Figure 4", caption: "Summary statistics on user's mood ratings " },
];

function ProjectSE02() {
	return (
		<Body title="Mental Health Tracking AP">
     <ProjectDetail
  images={images}
  sections={[
    {
      heading: "Overview",
      type: "paragraph",
      content:
        "A mental health tracking API designed for therapy users and providers. Users log daily reports, helping them recall events and identify triggers. Providers use this data to offer personalized insights.",
    },
    {
      heading: "Key Features",
      type: "list",
      items: [
        "Authentication & Authorization: Secure login for users & providers",
        "Behavioral Tracking: Log mood, symptoms & medication reactions",
        "Appointment Management: Schedule & manage appointments",
        "Data Insights: Aggregate statistics for mood trends",
      ],
    },
    {
      heading: "Tech Stack",
      type: "list",
      items: [
        "Backend: Express.js, MongoDB, Mongoose",
        "Security: JWT authentication, bcrypt hashing",
        "Data Handling: Indexed MongoDB, text search",
        "Testing: Jest for unit tests",
      ],
    },
    {
      heading: "Challenges & Solutions",
      type: "list",
      items: [
        "Data Privacy: Role-based authorization to control access",
        "Efficient Search: Indexed DB & text search for fast retrieval",
        "Handling Large Data: Optimized MongoDB queries",
      ],
    },
    {
      heading: "Outcome & Next Steps",
      type: "paragraph",
      content:
        "The API streamlines mental health tracking. Future improvements include a frontend interface and advanced data analytics.",
    },
    {
			heading: <> Check it out on Github: <a
			href="https://github.com/pearlynne/HealthTrackingAPI"
			target="_blank"
			rel="noopener noreferrer"
		>
			Health Tracking API
		</a>.
			</>,
      type: "paragraph",
      content:""
    },
  ]}
/>

    </Body>
	);
}

export default ProjectSE02;
