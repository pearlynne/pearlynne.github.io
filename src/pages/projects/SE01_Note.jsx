import React from "react";
import Body from "@/components/Body";
import { Link } from "react-router-dom"; 
import todoVid from "@/assets/SE01_To-do-list.mov";
import ProjectDetail from "../../components/ProjectDetail";

function ProjectSE01() {
  return (
    <Body title="Task Cat: A Simple Reward-Based To-Do List">
      <ProjectDetail
  video={todoVid}
  sections={[
    {
      heading: "Overview",
      type: "paragraph",
      content:
        "I wanted to create a to-do-list that was not overwhelming with all the tags, subtasks, and categories and had a mini reward for each task completion.",
    },
    {
      heading: "My Solution",
      type: "list",
      items: [
        "A minimalist to-do list focused on just today's tasks and the near future.",
        "Stores tasks locally (persists across sessions).",
        "Removes completed tasks automatically.",
        "Surprise reward - completing a task reveals a cute cat image.",
      ],
    },
    {
      heading: "Technologies Used",
      type: "list",
      items: ["Local Storage to save tasks", "CSS for a clean UI", "Uses Cataas API"],
    },
    {
      heading: "Challenges & Learnings",
      type: "list",
      items: [
        "Managing state efficiently without overcomplicating the UI.",
        "Implementing persistent storage for tasks.",
      ],
    },
    {
      heading: "Future Improvements",
      type: "list",
      items: [
        "Dark mode for better accessibility.",
        "More animations for the cat reward.",
        "Optional task categories (without clutter).",
      ],
    },
    {
      heading: <> Check it out on Github: <a
			href="https://github.com/pearlynne/DailyToDoListAPI"
			target="_blank"
			rel="noopener noreferrer"
		>
			Note Taking API
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

export default ProjectSE01;
