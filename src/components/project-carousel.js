import Carousel from "react-material-ui-carousel";
import extraprojects from "../constants/extra-projectsConstants";
import { Box, Typography } from "@mui/material";
import ProjectLayoutCarousel from "./project-layout-carousel";

function ProjectCarousel() {
    return (
        <Box sx={{ p: 1, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', background: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(3px)', margin: 'auto', width: '50%', borderRadius: 2 }}>
            <Carousel
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        marginTop: '15vh',
                        padding: '10px',
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '-27.5vh', 
                        textAlign: 'center'
                    }
                }}
                indicatorIconButtonProps={{
                    style: {
                        color: 'rgba(0, 0, 0, 0.5)'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: 'orange'
                    }
                }}
                sx={{ width: '100%', justifyContent: 'center', margin: 'auto', marginTop: '-25vh'}}
                animation="slide"
            >
                {extraprojects.map((project, index) => (
                    <ProjectLayoutCarousel key={index} project={project} />
                ))}
            </Carousel>
        </Box>
    );
}

export default ProjectCarousel;
