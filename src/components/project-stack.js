import { Stack } from "@mui/material";
import ProjectLayout from "./project-layout";
import projects from "../constants/projectsConstants";

let projectCards = projects.map((project) =>
  <ProjectLayout project={project} />
);

function ProjectStack() {
  return (
    <Stack container spacing={8}>
        {projectCards}
    </Stack>
  );
}

export default ProjectStack;
