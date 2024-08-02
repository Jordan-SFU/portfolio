import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

let step = 0;

const pages = [
    {
        name: "About",
        link: "#about",
        scroll: 25,
        color: '#FF5959'
    },
    {
        name: "Projects",
        link: "#projects",
        scroll: 50,
        color: '#59A1FF'
    },
    {
        name: "Contact",
        link: "#contact",
        scroll: 75,
        color: '#70F801'
    }
];

function NavBar() {
    step = document.documentElement.scrollHeight;

    return (
        <AppBar position="fixed" sx={{ background: 'rgba(53, 53, 53, 0.75)', backdropFilter: 'blur(3px)' }}>
            <Toolbar>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <Button 
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} 
                        component={Link} 
                        to="/" 
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
                            <img src="/logo.svg" alt="Logo" style={{ width: 32, height: 32, marginLeft: 8 }} />
                            <p>&nbsp;Jordan McKenzie</p>
                        </Box>
                    </Button>
                </motion.div>

                <Box sx={{ flexGrow: 1 }} />
                {pages.map((page) => (
                    <motion.div whileHover={{ scale: 1.25 }} key={page.name}>
                        <Button 
                            onClick={() => { window.scrollTo({ top: step * (page.scroll/100), behavior: "smooth" }) }} 
                            component={Link} 
                            to={page.link} 
                            sx={{ color: page.color, textDecoration: 'none' }}
                        >
                            {page.name}
                        </Button>
                    </motion.div>
                ))}
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
