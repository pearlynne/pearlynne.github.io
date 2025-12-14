import Resources from "@/components/Resources.jsx";

const resourceLinks = [
  { name: "Clipped Recording - Nov 7th, 2025", url: "https://www.dropbox.com/scl/fi/1gcccvy54iulr77419cwo/IntroDataStatsRes_MSU.mp4?rlkey=4rewq708yjixjavj1745vwvht&st=ubhkbob9&dl=0", icon: "📹" },
  { name: "Slides PDF", url: "https://www.dropbox.com/scl/fi/a0csgek6san56ew2pu8rf/IntroDataStatsRes_MSUAutismLab.pdf?rlkey=otg3errh1bo7jgay3bskgme98&st=e7acft5e&dl=0", icon: "📑" },
];

const MSUAutismLabResources = () => (
  <Resources
    labName="MSU Autism Lab"
    links={resourceLinks}
    password={import.meta.env.VITE_MSU_AUTISM_PASSWORD}
  />
);

export default MSUAutismLabResources;
