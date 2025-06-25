import React from "react";
import Body from "../../components/Body";
import { Link } from "react-router-dom";
import ProjectDetail from "../../components/ProjectDetail";
import image1 from "@/assets/DS01_EACSF_1.png";
import image2 from "@/assets/DS01_EACSF_2.png";
import image3 from "@/assets/DS01_EACSF_3.png";

const images = [
  {
    src: image1,
    alt: "EACSF Figure 1",
    caption:
      "Line graph of predicted and observed EA-CSF volumes in 231 infants.\n Each point represents a visit, and each line represents a subject. \nAge is centered at 24 months, indicated by the red line (X = 0) on the X-axis. The predicted values (orange lines) are overlaid on observed EA-CSF volumes (variations of blue).",
  },
  {
    src: image2,
    alt: "EACSF Figure 2",
    caption:
      " Line graph depicting differences in brain volume growth of infants with and without sleep dysregulation.",
  },
  {
    src: image3,
    alt: "EACSF Figure 3",
    caption:
      "Line graph of 184 infants' brain volume from ages 0 to 36 months.",
  },
];

function ProjectDS01() {
  return (
    <Body title="Modeling EA-CSF, Sleep, and Social Outcomes in Early Childhood">
<ProjectDetail
cite="Chong, P. L. H. (2022)"
  images={images}
  sections={[
		{
      heading: "Project Overview",
      type: "text",
      content:
        "Investigated whether extra-axial cerebrospinal fluid (EA-CSF) mediates the effect of early sleep disturbances on social communication outcomes in early development (n=400; ages 0–5).",
    },
    {
      heading: "Dataset",
      type: "list",
      items: [
        <><strong>Source:</strong> Baby Connectome Project (400 infants across 10 timepoints)</>,
        <><strong>Measures:</strong> Sleep ratings, structural MRI, social/language assessments</>,
      ],
    },
    {
      heading: "Methods",
      type: "list",
      items: [
        <><strong>Modeling:</strong> Structural Equation Modeling and Latent growth curve modeling (Mplus, R)</>,
        <><strong>Statistical Testing:</strong> SEM to evaluate mediation</>,
        <><strong>Neuroimaging:</strong> EA-CSF volume from T1 MRI (24 months)</>,
      ],
    },
    {
      heading: "Technologies Used",
      type: "list",
      items: [
        <><strong>Analysis:</strong> Mplus, R</>,
        <><strong>Data Handling:</strong> tidyr and dplyr on R, SQL</>,
        <><strong>Neuroimaging:</strong> Bash pipelines</>,
      ],
    },
    {
      heading: "Key Findings",
      type: "list",
      items: [
        "No evidence for EA-CSF mediating sleep/social outcomes",
        "Elevated EA-CSF linked to lower receptive language and social reciprocity at 24 months",
        "Sleep trajectories alone not predictive of social outcomes or EA-CSF ratios",
      ],
    },
    {
      heading: "Impact",
      type: "text",
      content:
        "Clarified EA-CSF’s non-mediating role, highlighting need for multidimensional longitudinal models.",
    },
    {
      heading: "Data Access",
      type: "text",
      content: <>
			Due to ongoing publication, I am unable to provide full access to the data and analysis at this time. However, you can view my dissertation at 
			<a
				href="https://hammer.purdue.edu/articles/thesis/Sleep_and_developmental_risks_The_roles_of_extra-axial_cerebrospinal_fluid/20334816?file=36356652"
				target="_blank"
				rel="noopener noreferrer"
			>
				Purdue Hammer
			</a>.
		</>
    },
  ]}
/>
    </Body>
  );
}

export default ProjectDS01;
