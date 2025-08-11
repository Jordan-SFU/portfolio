import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Chip, Box, Collapse, Divider, Typography, Tooltip, Grid } from '@mui/material';
import { useState, useMemo, useCallback } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import GlassPanel from './common/glass-panel';

const colors = ['#FF5959', '#59A1FF', '#70F801'];
function ProjectLayout({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => setExpanded(e => !e), []);
  const handleLinkClick = useCallback(() => window.open(project.link), [project.link]);
  const handleGithubClick = useCallback(() => window.open(project.github), [project.github]);

  const tags = useMemo(() => project.tags.map((tag, index) => (
    <Chip
      key={tag + index}
      label={tag}
      className="mr-2"
      sx={{ color: colors[index % colors.length], backgroundColor: 'transparent', borderColor: colors[index % colors.length] }}
      variant="outlined"
    />
  )), [project.tags]);

  const cardLayout = project.index % 2 === 0 ? 'left' : 'right';
  const textBoxStyle = { zIndex: 1, textAlign: cardLayout, backgroundColor: 'transparent', flexGrow: 1, width: '400px' };

  return (
    <Box display="flex" flexDirection={cardLayout === 'left' ? 'row' : 'row-reverse'} alignItems="center" justifyContent="center">
      <motion.div style={textBoxStyle}>
        <Typography variant="h5" color="orange" textAlign={cardLayout}>
          {project.name}&nbsp;
          {project.award ? <Tooltip title={project.award} arrow><EmojiEventsIcon fontSize='large' sx={{ color: 'orange', cursor: 'pointer' }} /></Tooltip> : null}
        </Typography>
        <div className="mb-4"></div>

        <GlassPanel sx={{ py: 2, px: 5, cursor: 'pointer' }} onClick={handleExpandClick}>
          <Typography variant="h7" className="mb-3 mx-4" color="#c2c2c2" sx={{ userSelect: 'none' }}>{project.description}</Typography>
          <ExpandMoreIcon style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: 'gray' }} />
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider sx={{ borderWidth: '2px', color: 'gray', borderRadius: 1 }} />
            <Typography variant="h7" className="mt-2 mx-4" color="#c2c2c2" textAlign='left' sx={{ userSelect: 'none' }}>
              {project.expandedText}
            </Typography>
          </Collapse>
        </GlassPanel>

        <Box display='flex' flexDirection={cardLayout === 'left' ? 'row' : 'row-reverse'} alignItems="center" className='mt-4' justifyItems={cardLayout}>
          <Divider orientation="horizontal" sx={{ borderColor: 'orange', px: 5, borderWidth: '2px', borderRadius: 1, mx: '12px' }} textAlign={cardLayout} />
          <Grid container spacing={1} sx={{ mr: `${cardLayout === 'left' ? '100px' : '10px'}`, ml: `${cardLayout === 'right' ? '100px' : '10px'}`, justifyContent: `${cardLayout === 'left' ? 'left' : 'right'}` }}>
            {tags}
          </Grid>
        </Box>

        {!project.isArt && (
          <>
            <IconButton onClick={handleGithubClick} style={{ color: 'gray' }}><GitHubIcon /></IconButton>
            <IconButton onClick={handleLinkClick} style={{ color: 'gray' }}><OpenInNewIcon /></IconButton>
          </>
        )}
      </motion.div>

      {!project.isVideo ? (
        <Box component="img" src={project.image} alt="Project Image" sx={{ zIndex: 0, borderRadius: 2, mx: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', width: '30vw', height: '20vw', objectFit: 'cover' }} />
      ) : (
        <Box component="video" src={project.image} width='30vw' height='20vw' alt='' autoPlay loop muted sx={{ zIndex: 0, borderRadius: 2, mx: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', objectFit: 'cover' }}></Box>
      )}
    </Box>
  );
}

export default React.memo(ProjectLayout);
