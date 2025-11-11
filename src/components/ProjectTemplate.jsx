import { useParams } from "react-router-dom";
import { media as allMedia } from "@/assets/media.jsx";  
import projectsData from "@/data/projects.json";
import ProjectDetail from "./ProjectDetail";

const ProjectTemplate = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  // Map keys to actual imported media files
  const media = project.media?.map((m) => ({
    ...m,
    src: allMedia[id][m.key],
  }));

  return <><ProjectDetail {...project} media={media} /></>;
};

export default ProjectTemplate;
