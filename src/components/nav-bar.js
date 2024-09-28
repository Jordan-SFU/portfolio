import React from 'react';
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { motion } from 'framer-motion';

const pages = [
    {
        name: "About",
        id: "about",
        color: '#FF5959'
    },
    {
        name: "Projects",
        id: "projects",
        color: '#59A1FF'
    },
    {
        name: "Contact",
        id: "contact",
        color: '#70F801'
    }
];

function NavBar() {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        const navbarHeight = document.querySelector('header').offsetHeight;
        
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = sectionPosition - navbarHeight;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    

    return (
        <AppBar position="fixed" sx={{ background: 'rgba(53, 53, 53, 0.75)', backdropFilter: 'blur(3px)' }}>
            <Toolbar>
                <motion.div whileHover={{ scale: 1.25 }} >
                    <Button 
                        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }} 
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
                            onClick={() => handleScroll(page.id)} 
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
