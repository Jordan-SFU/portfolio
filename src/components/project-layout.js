import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Chip, Box, Collapse, Divider, Typography, Tooltip, Grid } from '@mui/material';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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
      sx={{ color: colors[index % colors.length], backgroundColor: 'transparent', borderColor: colors[index % colors.length] }}
      variant="outlined"
    />
  ));

  const cardLayout = project.index % 2 === 0 ? 'left' : 'right';

  const textBoxMargin = project.index % 2 === 0 ? { marginRight: '-10%', marginLeft: '0px' } : { marginRight: '0px', marginLeft: '-10%' };

  return (
    <Box
      display="flex"
      flexDirection={project.index % 2 === 0 ? 'row' : 'row-reverse'}
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        style={{ zIndex: 1, textAlign: cardLayout, backgroundColor: 'transparent', flexGrow: 1, width: '400px', ...textBoxMargin }}
      >
        <Typography variant="h5" color="orange" textAlign={cardLayout}>
          {project.name}
          &nbsp;&nbsp;&nbsp;
          {project.award ? <Tooltip title={project.award} arrow>
            <EmojiEventsIcon fontSize='large' sx={{ color: 'orange', cursor: 'pointer' }} />
          </Tooltip> : null}
        </Typography>
        <div className="mb-4"></div>

        <Box sx={{ background: 'rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(3px)', paddingY: 2, paddingX: 5, borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }} onClick={() => handleExpandClick()} >
          <Typography variant="h7" className="mb-3 mx-4" color="gray">{project.description}</Typography>
          <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'gray' }} />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider sx={{ borderWidth: '2px', color: 'gray', borderRadius: 1 }} />
            <Typography variant="h7" className="mt-2 mx-4" color="gray" textAlign='left'>
              {project.expandedText}
            </Typography>
          </Collapse>
        </Box>

        <Box display='flex' flexDirection={project.index % 2 === 0 ? 'row' : 'row-reverse'} alignItems="center" className='mt-4' sx={{}} justifyItems={cardLayout}>
          <Divider orientation="horizontal" sx={{ borderColor: 'orange', paddingX: 5, borderWidth: '2px', borderRadius: 1, marginX: '12px' }} textAlign={cardLayout} />
          <Grid container spacing={1} sx={{ marginRight: `${project.index%2 ===0 ? '100px' : '10px'}`, marginLeft: `${project.index%2 ===1 ? '100px' : '10px'}`, justifyContent: `${project.index % 2 === 0 ? 'left' : 'right'}`}}>
            {tags}
          </Grid>
        </Box>

        <IconButton onClick={() => handleGithubClick()} alignContent={cardLayout} style={{ color: 'gray' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={() => handleLinkClick()} alignContent={cardLayout} style={{ color: 'gray' }}>
          <OpenInNewIcon />
        </IconButton>
      </motion.div>

      {!project.isVideo ?
        <Box component="img" src={project.image} alt="Project Image" sx={{ zIndex: 0, borderRadius: 2, marginX: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', width: '30vw', height: '20vw', 'object-fit': 'cover' }} />
        :
        <Box component="video" src={project.image} width='30vw' height='20vw' alt='' autoPlay loop muted sx={{ zIndex: 0, borderRadius: 2, marginX: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', 'object-fit': 'cover' }}></Box>
      }
    </Box>
  );
}

export default ProjectLayout;
