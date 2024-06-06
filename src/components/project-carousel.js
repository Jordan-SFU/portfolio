import Carousel from "react-material-ui-carousel";
import extraprojects from "../constants/extra-projectsConstants";
import { Box, Typography } from "@mui/material";
import ProjectLayout from "./project-layout";

function ProjectCarousel() {
    return (
        <Carousel>
            {extraprojects.map((project) => (
                <ProjectLayout project={project} />
            ))}
        </Carousel>
    );
}

export default ProjectCarousel;