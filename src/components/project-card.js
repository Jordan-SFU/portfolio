import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import { CardActionArea, Chip, Box, Collapse, Divider } from '@mui/material';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };

  const handleLinkClick = () => {
    window.open(project.link);
  }

  const tags = project.tags.map((tag, index) =>
    <Chip key={index} label={tag} className="mr-2" />
  );

  const cardLayout = project.index % 2 === 0 ? 'row' : 'row-reverse';

  return (
    <Card sx={{ height: "75%", width: "75%", alignSelf: "center" }}>
      <CardActionArea onClick={() => handleExpandClick()}>
        <Box display="flex" flexDirection={cardLayout}>
          <CardMedia component="img" image={project.image} alt="Project Image" sx={{ width: 512 }} />
          <CardContent sx={{alignSelf: "center"}}>
            <h1 className="text-3xl mb-2">{project.name}</h1>
            <p className="mb-3">{project.description}</p>
            <ul>
              {tags}
            </ul>
            <CardActions>
                <IconButton onClick={() => handleLinkClick()}>
                    <GitHubIcon />
                </IconButton>
            </CardActions>
          </CardContent>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Divider />
                <p className= "mt-2">{project.expandedText}</p>
            </CardContent>
        </Collapse>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;