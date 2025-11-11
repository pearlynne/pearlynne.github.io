import Resources from "@/components/Resources.jsx";

const resourceLinks = [
  { name: "Clipped Recording", url: "https://www.dropbox.com/scl/fi/4udf7s20bedq4ftpunm4l/IntroDataStatsRes_MSU.mp4?rlkey=3l2v5prj48pdnfu078uezeqid&st=egxm68o0&dl=0", icon: "📹" },
  { name: "Slides", url: "https://www.dropbox.com/scl/fi/jzupdfj4ocebhz9iyrbd1/IntroDataStatsRes_MSUAutismLab.pdf?rlkey=xfq7bomd4q3wmo0lx3ci4bmcu&st=q35tt4wp&dl=0", icon: "📑" },
];

const MSUAutismLabResources = () => (
  <Resources
    labName="MSU Autism Lab"
    links={resourceLinks}
    password={import.meta.env.VITE_MSU_AUTISM_PASSWORD}
  />
);

export default MSUAutismLabResources;
