import { useState } from 'react';
import ProjectStack from "../components/project-stack";
import { Box, Divider, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ProjectCarousel from '../components/project-carousel';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../index.css'; 

import PaletteIcon from '@mui/icons-material/Palette';
import TerminalIcon from '@mui/icons-material/Terminal';

function Projects() {
    const [showProgramming, setShowProgramming] = useState(true);

    const toggleProjects = (event, newAlignment) => {
        if (newAlignment !== null) {
            setShowProgramming(newAlignment);
        }
    };

    return (
        <div id='projects'>
            <div className={`animated-background`}></div>
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
                    Here are some of the projects I've worked on, ranging from hackathons, school projects, and some just for fun!
                </Typography>
                <Box display='flex' justifyContent='right' mt={4}>
                    <ToggleButtonGroup
                        value={showProgramming}
                        exclusive
                        onChange={toggleProjects}
                        aria-label="text alignment"
                    >
                        <ToggleButton 
                            value={true} 
                            aria-label="left aligned"
                            sx={{
                                color: 'gray', 
                                background: 'rgba(0, 0, 0, 0.1)', 
                                //backdropFilter: 'blur(3px)',
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                '&.Mui-selected': {
                                    color: 'orange',
                                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                },
                                //selected and hover
                                '&:hover': {
                                    color: 'gray', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                },
                                '&.Mui-selected:hover': {
                                    color: 'orange',
                                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                },
                            }}
                        >
                            <Typography variant="h5">
                                <TerminalIcon sx={{ color: 'inherit' }} />
                            </Typography>
                        </ToggleButton>
                        <ToggleButton 
                            value={false} 
                            aria-label="centered"
                            sx={{
                                color: 'gray', 
                                background: 'rgba(0, 0, 0, 0.1)', 
                                //backdropFilter: 'blur(3px)',
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                '&.Mui-selected': {
                                    color: 'orange',
                                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                },
                                //selected and hover
                                '&:hover': {
                                    color: 'gray', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                },
                                '&.Mui-selected:hover': {
                                    color: 'orange',
                                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                },
                            }}
                        >
                            <Typography variant="h5">
                                <PaletteIcon sx={{ color: 'inherit' }} /> 
                            </Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </div>
            <SwitchTransition>
                <CSSTransition
                    key={showProgramming ? 'programming' : 'art'}
                    timeout={300}
                    classNames={{
                        enter: 'slide-enter',
                        exit: 'slide-exit',
                    }}
                >
                    <div>
                        {showProgramming ? (
                            <>
                                <div className="mt-16"></div>
                                <ProjectStack projectType = "programming" />
                                <div className="mt-16"></div>
                                <Typography variant="h3" sx={{ textAlign: 'center' }} color='gray'>
                                    More Projects
                                </Typography>
                                <div className="mt-8 mb-24">
                                    <ProjectCarousel />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="mt-16"></div>
                                <ProjectStack projectType = "art" />
                                <div className="mt-16"></div>
                            </>
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default Projects;
