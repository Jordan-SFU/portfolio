import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Chip, Box, Collapse, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

function ProjectLayout({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  const handleLinkClick = () => {
    window.open(project.link);
  }

  const handleGithubClick = () => {
    window.open(project.github);
  }

  const colors = ['#FF5959', '#59A1FF', '#70F801'];

  const tags = project.tags.map((tag, index) => (
    <Chip 
      key={index} 
      label={tag} 
      className="mr-2" 
      sx={{ color: colors[index % colors.length], backgroundColor: 'transparent', borderColor: colors[index % colors.length]}}
      variant="outlined"
    />
  ));

  const cardLayout = project.index % 2 === 0 ? 'left' : 'right';

  const textBoxMargin = project.index % 2 === 0 ? { marginRight: '-10%', marginLeft: '0px' } : { marginRight: '0px', marginLeft: '-10%'};

  return (
    <Box
      display="flex"
      flexDirection={project.index % 2 === 0 ? 'row' : 'row-reverse'}
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: expanded && cardLayout === 'right' ? '-100%' : 0 }}
        transition={{ duration: 0.1 }}
        style={{ zIndex: 1, textAlign: cardLayout, backgroundColor: 'transparent', flexGrow: 1, width: '400px', ...textBoxMargin }}
      >
        <Typography variant="h5" color="orange" textAlign={cardLayout}>{project.name}</Typography>
        <div className="mb-4"></div>

        <motion.div 
          initial={{ width: '100%' }}
          animate={{ width: expanded ? '200%' : '100%' }}
          transition={{ duration: 0.1 }}
          style={{ 
            position: 'relative',
            alignContent: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
            <Box sx={{ background: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(3px)', paddingY: 2, paddingX: 5, borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }} onClick={() => handleExpandClick()} >
                <Typography variant="h7" className="mb-3 mx-4" color="gray">{project.description}</Typography>
                <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'gray' }} />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Divider sx={{ borderWidth: '2px', color: 'gray', borderRadius: 1 }}/>
                    <Typography variant="h7" className="mt-2 mx-4" color="gray" textAlign='left'>
                        {project.expandedText}
                    </Typography>
                </Collapse>
            </Box>
        </motion.div>

        <Box display='flex' flexDirection={project.index % 2 === 0 ? 'row' : 'row-reverse'} alignItems="center" className='mt-4' sx={{}} justifyItems={cardLayout}>
            <Divider orientation="horizontal" sx={{ borderColor: 'orange', paddingX: 5, borderWidth: '2px', borderRadius: 1, marginX: '12px' }} textAlign={cardLayout} />
            <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none' }}>
                {tags}
            </ul>
        </Box>

        <IconButton onClick={() => handleGithubClick()} alignContent={cardLayout} style={{ color: 'gray' }}>
            <GitHubIcon />
        </IconButton>
        <IconButton onClick={() => handleLinkClick()} alignContent={cardLayout} style={{ color: 'gray' }}>
            <OpenInNewIcon />
        </IconButton>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: expanded ? 0 : 1, scale: expanded ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      >
        <Box component="img" src={project.image} alt="Project Image" sx={{  zIndex: 0, borderRadius: 2, marginX: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }} />
      </motion.div>
    </Box>
  );
}

export default ProjectLayout;
