import { Stack } from "@mui/material";
import ProjectLayout from "./project-layout";
import projects from "../constants/projectsConstants";
import art from "../constants/artConstants";
import React, { useMemo } from 'react';

function ProjectStack({projectType}) {
  const projectCards = useMemo(() => projects.map(p => <ProjectLayout key={p.name} project={p} />), []);
  const artCards = useMemo(() => art.map(p => <ProjectLayout key={p.name} project={p} />), []);
  return (
    <Stack container spacing={8}>
      {projectType === 'programming' ? projectCards : artCards}
    </Stack>
  );
}

export default ProjectStack;
