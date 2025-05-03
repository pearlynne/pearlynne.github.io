import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
// import ImageCarousel from "../../components/ImageCarousel";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/DS03_E4_1.png"; 
import image2 from "@/assets/DS03_E4_2.png";

const images = [
	{ src: image1, alt: "E4 Figure 1", caption: "Line graph depicting the difference in frequency of NCSSCRs and accelerometer between children with and without regulated sleep across the day." },
	{src: image2, alt: "E4 Figure 2", caption: "Line graph depicting the difference in  frequency of NCSSCRs and accelerometer in each children."}
];


function ProjectDS03() {
  return (
		<Body title="Sleep Deficiency & Autonomic Dysregulation in Children with Autism">
		<ProjectDetail
		 cite="Chong, P. L. H., Abel, E., Pao, R., McCormick, C. E. B., & Schwichtenberg, A. J. (2021)."

  images={images}
  sections={[
    {
      heading: "Project Overview",
      type: "text",
      content:
        "Studied the effect of sleep deficiency on autonomic function in children with autism using electrodermal activity (EDA) as a physiological marker.",
    },
    {
      heading: "Approach",
      type: "list",
      items: [
        <> <strong>Dataset:</strong> 13 children with autism </>,
        <> <strong>Measures:</strong> EDA collected via ankle/wrist sensors, sleep actigraphy, and sleep assessments </>,
        <> <strong>Analysis:</strong> Ledalab (MATLAB), R, SPSS </>,
      ],
    },
    {
      heading: "Technologies Used",
      type: "list",
      items: [
        <> <strong>Signal Processing:</strong> Ledalab for EDA </>,
        <> <strong>Statistical Tools:</strong> R, SPSS </>,
        <> <strong>Visualization:</strong> ggplot2 </>,
      ],
    },
    {
      heading: "Challenges",
      type: "text",
      content:
        "Mapping EDA to sleep regulation was complex due to variability in autonomic patterns.",
    },
    {
      heading: "Key Findings",
      type: "list",
      items: [
        "Sleep-deficient children showed reduced tonic/phasic EDA signals",
        "Autonomic dysregulation tied to both sleep and autism severity",
      ],
    },
    {
      heading: "Impact",
      type: "text",
      content:
        "Supports further study into how sleep affects autonomic and behavioral regulation in ASD.",
    },
    {
      heading: "Data Access",
      type: "text",
      content: (
        <>
          You can access the publication
          <a
            href="https://www.tandfonline.com/doi/pdf/10.1080/00221325.2021.1911919?casa_token=zLgUTqALB5kAAAAA:QrQGnxm3OK3ig1-nt66D4Fxp8e1xWFdzZ7q_l2tXFmMBKoXbcQDa_XXz706PuMD9tYjGyL7Zir0AGdKi"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          for detailed findings.
        </>
      ),
    },
  ]}
/>

	</Body>
	
  );
}

export default ProjectDS03;
