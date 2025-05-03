import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/SE03_Ecommerce_1.png";
import image2 from "@/assets/SE03_Ecommerce_2.png";
import image3 from "@/assets/SE03_Ecommerce_3.png";
import image4 from "@/assets/SE03_Ecommerce_4.png";
import image5 from "@/assets/SE03_Ecommerce_5.png";

const images = [
  { src: image1, alt: "Ecomm Figure 1", caption: "Product page" },
  { src: image2, alt: "Ecomm Figure 2", caption: "Shopping cart" },
  { src: image3, alt: "Ecomm Figure 3", caption: "Contact form" },
  { src: image4, alt: "Ecomm Figure 4", caption: "Login page" },
  { src: image5, alt: "Ecomm Figure 5", caption: "Sign up page" },
];
function ProjectSE03() {
  return (
    <Body title="Jewelry Ecommerce App">
      <ProjectDetail
        images={images}
        sections={[
          {
            heading: "Overview",
            type: "paragraph",
            content:
              "A small bespoke jewelry business app that enables users to browse products, create accounts, manage carts, and track purchases. Built to replace third-party platforms like Etsy, giving full control over the business.",
          },
          {
            heading: "Key Features",
            type: "list",
            items: [
              "Fetches shop inventory from firebase",
              "Renders product image, title, description, and price",
              "Allows user to add product(s) to cart",
              "Allows user to view shopping cart",
              "Allows confirm purchase (without payment gateway service)",
              "Writes purchase details to firebase, updating inventory, and account information",
              "Creates user account",
              "Authenticates user account with firebase",
            ],
          },
          {
            heading: "Tech Stack",
            type: "list",
            items: [
              "Frontend: React, React Router",
              "Backend: Firebase (Authentication, Database, Hosting)",
              "Testing: Vitest, React Testing Library",
            ],
          },
          {
            heading: "Challenges & Solutions",
            type: "list",
            items: [
              "Firebase hosting setup was complex and required further reading on GitHub deployment.",
              "Adjusting data structures was necessary to support real-time updates.",
              "Filtering purchases based on authentication required modifying fetch logic.",
            ],
          },
          {
            heading: "Future Improvements",
            type: "list",
            items: [
              "Implement product galleries to support multiple images per product.",
              "Integrate a payment gateway such as Stripe or PayPal.",
              "Add a search function to allow users to find products by name.",
            ],
          },
          {
            heading: "Check it out on",
            type: "paragraph",
            content: (
              <>
                Live site:{" "}
                <a
                  href="https://etal-ecomm.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase hosting
                </a>
                .
              </>
            ),
          },
        ]}
      />
    </Body>
  );
}

export default ProjectSE03;
