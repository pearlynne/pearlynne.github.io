import Resources from "@/components/Resources.jsx";

const resourceLinks = [
  { name: "Nov 7th, 2025 - Intro to Stats in Research (Recording)", url: "https://www.dropbox.com/scl/fi/1gcccvy54iulr77419cwo/IntroDataStatsRes_MSU.mp4?rlkey=4rewq708yjixjavj1745vwvht&st=ubhkbob9&dl=0", icon: "📹" },
  { name: "Nov 7th, 2025 - Intro to Stats in Research (Slides)", url: "https://www.dropbox.com/scl/fi/a0csgek6san56ew2pu8rf/IntroDataStatsRes_MSUAutismLab.pdf?rlkey=otg3errh1bo7jgay3bskgme98&st=e7acft5e&dl=0", icon: "📑" },
	{ name: "Jan 9th, 2026 - Intro to Research Methods in SPSS (Slides)", url: "https://www.dropbox.com/scl/fi/vqme1ymbhdrq3iixqzxzs/IntroResSPSS_MSUAutismLab.pdf?rlkey=sh4q9k5yzylfjmiqqhki1kugc&st=yfggxu6a&dl=0", icon: "📑" },
];



const MSUAutismLabResources = () => (
  <Resources
    labName="MSU Autism Lab"
    links={resourceLinks}
    password={import.meta.env.VITE_MSU_AUTISM_PASSWORD}
  />
);

export default MSUAutismLabResources;
