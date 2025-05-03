import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/DS04_SleepCons.png"; 

const images = [
	{ src: image1, alt: "Sleep Construct Figure 1", caption: "Individual trajectories of sleep problems in 323 infants across the first two years of life. \n Estimated intercept means were generated at ten time points using sleep problem scores derived from four parent-report measures in the first two years of life. Scores above 0 indicate having more sleep problems than average and below 0 indicate having fewer sleep problems than average. The study uses the generated means from the first nine time points (Birth - 25.5 months)." }
];

function ProjectDS04() {
  return (
    <Body title="Capturing developmentally consequential sleep dysregulation within the Baby Connectome Project">
      <ProjectDetail
  images={images}
  sections={[
    {
      heading: "Project Overview",
      type: "text",
      content:
        "Classified infant sleep trajectories using latent growth curve modeling on parent-reported data across 10 time points.",
    },
    {
      heading: "Approach",
      type: "list",
      items: [
        <> <strong>Dataset:</strong> Baby Connectome Study (10 time points, 323 children, 949 reports) </>,
        <> <strong>Methods:</strong> Latent growth curve modeling on sleep scores from four parent-report questionnaires </>,
      ],
    },
    {
      heading: "Technologies Used",
      type: "list",
      items: [
        <> <strong>Modeling:</strong> Mplus, R </>,
        <> <strong>Data Wrangling:</strong> tidyr, dplyr in R </>,
      ],
    },
    {
      heading: "Challenges",
      type: "text",
      content:
        "Standardizing sleep reports and modeling consistent vs. transient sleep issues.",
    },
    {
      heading: "Key Findings",
      type: "list",
      items: [
        "Identified sleep trajectories for 323 infants using model-estimated intercepts/slopes",
        "Classified 35 infants (10%) with persistent sleep problems and 288 with transient/no issues",
        "Findings align with known prevalence rates of childhood sleep dysregulation",
      ],
    },
    {
      heading: "Impact",
      type: "text",
      content:
        "Offers replicable method for early sleep classification and groundwork for linking sleep to brain development.",
    },
    {
      heading: "Data Access",
      type: "text",
      content: (
        <>
          Due to ongoing publication, I am unable to provide full access to the data and analysis at this time. However, you can view details on this study from the appendix section of my dissertation at{" "}
          <a
            href="https://hammer.purdue.edu/articles/thesis/Sleep_and_developmental_risks_The_roles_of_extra-axial_cerebrospinal_fluid/20334816?file=36356652"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purdue Hammer
          </a>.
        </>
      ),
    },
  ]}
/>

    </Body>
  );
}

export default ProjectDS04;
