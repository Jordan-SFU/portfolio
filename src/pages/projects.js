import ProjectStack from "../components/project-stack";
import { Typography } from "@mui/material";

function Projects() {
    return(
        <div>
            <div className="ml-8 mr-96 mb-16 mt-4">
                <Typography variant="h5" sx={{paddingBottom: 2}} color='orange'>
                    What I've Done
                </Typography>
                <Typography variant="h3" sx={{paddingBottom: 2}} color='gray'>
                    Projects
                </Typography>
            </div>
            <div className="mt-16"></div>
            <ProjectStack />
        </div>
    )
}

export default Projects;