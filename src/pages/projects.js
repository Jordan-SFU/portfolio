import { useState } from 'react';
import ProjectStack from "../components/project-stack";
import { Box, Divider, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ProjectCarousel from '../components/project-carousel';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import '../index.css';

import PaletteIcon from '@mui/icons-material/Palette';
import TerminalIcon from '@mui/icons-material/Terminal';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ExperienceTimeline from '../components/experience-timeline';

function Projects({ art }) {
    const [showProgramming, setShowProgramming] = useState(!art);

    const toggleProjects = (event, newAlignment) => {
        if (newAlignment !== null) {
            setShowProgramming(newAlignment);
        }
    };

    return (
        <div id='experience'> {/* updated anchor id to reflect combined section */}
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
                    <Typography variant="h5" sx={{ paddingBottom: 1, textAlign: 'right' }} color='orange'>
                        What I've Done
                    </Typography>
                </Box>
                <Typography variant="h4" sx={{ textAlign: 'right', color: 'gray', pb: 1 }}>
                    Experience
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 4, marginLeft: '30vw', textAlign: 'right' }} color='#c2c2c2'>
                    A blend of professional experience and creative/technical projects showcasing my passion for interactive, visual technology and art.
                </Typography>
                <ExperienceTimeline />

                <Box display='flex' justifyContent='right' mt={4} alignItems='center'>
                    <Typography variant="body2" sx={{ paddingBottom: 1, textAlign: 'right', padding: '5px'}} color='gray'>
                        Switch between my tech and art projects!
                        <SubdirectoryArrowRightIcon sx={{ color: 'gray', padding: '2px'}} />
                    </Typography>
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
                                <ProjectStack projectType="programming" />
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
                                <ProjectStack projectType="art" />
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
