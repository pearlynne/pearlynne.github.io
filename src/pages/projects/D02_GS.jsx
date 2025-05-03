import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/DS02_GS_1.jpeg";
import image2 from "@/assets/DS02_GS_2.jpeg";

const images = [
	{ src: image1, alt: "GS Figure 1", caption: "Example of the bubble plot in the study depicting correlations, age, and effect sizes drawn from studies that assess sleep and orexin." },
	{ src: image2, alt: "GS Figure 2", caption: " Example of the bubble plot in the study depicting correlations, age, and effect sizes drawn from studies that assess sleep and amyloid-beta." }, 
];

function ProjectDS02() {
  return (
    <Body title="Systematic Review of Sleep, CSF Circulation, and Glymphatic System Function in Various Pathologies">
     <ProjectDetail
		 cite="Chong, P. L., Garic, D., Shen, M. D., Lundgaard, I., & Schwichtenberg, A. J. (2022)."
  images={images}
  sections={[
    {
      heading: "Project Overview",
      type: "text",
      content:
        "Analyzed how sleep disturbances affect CSF circulation and glymphatic system (GS) function across neurodegenerative, autoimmune, and neuropsychiatric conditions. Addressed variability in study designs.",
    },
    {
      heading: "Approach",
      type: "list",
      items: [
        <> <strong>Dataset:</strong> 190 peer-reviewed studies (n = 19,129) </>,
        <> <strong>Key Variables:</strong> CSF metabolites (amyloid-β, tau), sleep metrics, GS function </>,
        <> <strong>Methods:</strong> Automated data extraction and correlation modeling (R) </>,
      ],
    },
    {
      heading: "Technologies Used",
      type: "list",
      items: [
        <> <strong>Analysis:</strong> R </>,
        <> <strong>Data Handling:</strong> tidyr, dplyr </>,
        <> <strong>Visualization:</strong> ggplot2 </>,
      ],
    },
    {
      heading: "Challenges",
      type: "text",
      content:
        "Methodological variation across studies complicated standardization. Advanced statistical controls were needed to extract reliable associations.",
    },
    {
      heading: "Key Findings",
      type: "list",
      items: [
        "Sleep disturbances associated with shifts in amyloid-β and tau levels",
        "Relationships varied across clinical populations",
        "Visual patterns suggest possible GS-related biomarkers",
      ],
    },
    {
      heading: "Impact",
      type: "text",
      content:
        "Findings support the need for standardized GS measures and deeper analysis of sleep-CSF interactions in brain disorders.",
    },
    {
      heading: "Data Access",
      type: "text",
      content: (
        <>
          You can access the publication at{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8821419/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PubMed Central
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

export default ProjectDS02;
