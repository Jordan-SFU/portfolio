import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Chip, Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';

function ProjectLayoutCarousel({ project }) {
  const handleLinkClick = () => window.open(project.link);
  const handleGithubClick = () => window.open(project.github);

  const colors = ['#FF5959', '#59A1FF', '#70F801'];
  const tags = React.useMemo(() => project.tags.map((tag, index) => (
    <Chip 
      key={tag + index} 
      label={tag} 
      className="mr-2" 
      sx={{ color: colors[index % colors.length], backgroundColor: 'transparent', borderColor: colors[index % colors.length]}}
      variant="outlined"
    />
  )), [project.tags]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ position: 'relative', height: '100vh' }}>
      <Typography variant="h5" color="orange" sx={{ mb: 2 }}>{project.name}</Typography>
      <Box
        sx={{ position: 'relative'}}
        component={motion.div}
      >
        <Box
          component="img"
          src={project.image}
          alt="Project Image"
          sx={{ borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', width: '400px', height: '300px', margin: 'auto', objectFit: 'contain' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            background: 'rgba(53, 53, 53, 0.9)', 
            backdropFilter: 'blur(3px)',
            borderRadius: 2,
            opacity: 0,
            transition: 'opacity 0.3s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              display: 'flex',
              gap: 1,
            }}
          >
            <IconButton onClick={handleGithubClick} style={{ color: 'gray' }}>
              <GitHubIcon />
            </IconButton>
            <IconButton onClick={handleLinkClick} style={{ color: 'gray' }}>
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography variant="h7" color="gray" sx={{ mb: 2, px: 2 }}>{project.description}</Typography>
          <Box display='flex' alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
            <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0 }}>
              {tags}
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default React.memo(ProjectLayoutCarousel);
