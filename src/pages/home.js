import React, { useEffect, useState } from 'react';
import NavBar from "../components/nav-bar";
import DuckCanvas from "../components/3d-duck";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Footer from "../components/footer";
import SocialsSidebar from "../components/socials-sidebar";
import { Box, Divider, Typography } from "@mui/material";
import '../index.css'; // Import your CSS file

function Home({isArt}){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <div style={{ overflow: 'hidden' }} id='home'>
            <NavBar />
            <SocialsSidebar />
            <div style={{ position: 'relative', height: '90vh' }}>
                <div style={{ 
                    position: 'absolute', 
                    top: '20vh', 
                    left: '10vw', 
                    //transform: 'translate(-50%, -50%)', 
                    zIndex: 2, 
                    textAlign: 'center' 
                }}> 
                    <span className='flex'>
                        <Divider orientation="vertical" flexItem sx={{ borderWidth: '2px', borderRadius: 1 }} />
                        <div className='text-left'>
                            <span>  
                                <Typography variant="h1" style={{ color: 'white', marginLeft: 20, fontSize: 96 }}>
                                    Hey, I'm
                                </Typography>
                                <Typography variant="h1" style={{ color: 'orange', fontSize: 96 }}>
                                    &nbsp;Jordan!
                                </Typography>
                            </span> 
                            <Typography variant="h4" style={{ color: 'gray', marginLeft: 20 }}>
                                Visual programmer and 3D artist!
                            </Typography> 
                        </div>
                    </span>
                </div>
                
                <DuckCanvas mousePosition={mousePosition} />
            </div>
            <div>
            <Box sx={{
                position: 'relative',
                zIndex: 1,
                display: "block",
                justifyContent: "center",
                overflow: 'hidden',
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)',
                paddingTop: '64px',
                paddingX: '7.5vw',
            }}>
                <div className="animated-background"></div>
                <About />
                <Projects art={isArt}/>
                <Contact />  
            </Box>
            <Footer />
            </div>
        </div>
    )
}

export default Home;
