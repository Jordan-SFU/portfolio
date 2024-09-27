import { Stack } from "@mui/material";
import ProjectLayout from "./project-layout";
import projects from "../constants/projectsConstants";
import art from "../constants/artConstants";

let projectCards = projects.map((project) =>
  <ProjectLayout project={project} />
);

let artCards = art.map((project) =>
  <ProjectLayout project={project} />
);

function ProjectStack({projectType}) {
  return (
    <Stack container spacing={8}>
      {projectType === 'programming' ? projectCards : artCards}
    </Stack>
  );
}

export default ProjectStack;
