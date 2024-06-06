import ProjectStack from "../components/project-stack";
import { Box, Divider, Typography } from "@mui/material";
import ProjectCarousel from "../components/project-carousel";

function Projects() {
    return (
        <div>
            <div className="ml-8 mr-8 mb-16 mt-4">
                <Box display='flex' flexDirection='row' alignItems="center" justifyContent="flex-end" className='mt-4'>
                    <Divider 
                        orientation="horizontal" 
                        sx={{ 
                            borderColor: 'orange', 
                            borderWidth: '2px', 
                            borderRadius: 1, 
                            flexGrow: 1, 
                            height: '1px', 
                            marginRight: 2 
                        }} 
                    />
                    <Typography variant="h5" sx={{ paddingBottom: 2, textAlign: 'right' }} color='orange'>
                        What I've Done
                    </Typography>
                </Box>
                <Typography variant="h3" sx={{ paddingBottom: 2, textAlign: 'right' }} color='gray'>
                    Projects
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 2, marginLeft: '30vw', textAlign: 'right' }} color='gray'>
                    Here are some of the projects I've worked on. I've done a lot of different things, so there's a lot to see here. Hopefully, you find something you like!
                </Typography>
            </div>
            <div className="mt-16"></div>
            <ProjectStack />
            <div className="mt-16"></div>
            <ProjectCarousel />
        </div>
    );
}

export default Projects;
