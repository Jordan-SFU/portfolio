import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Card, CardActions, Box, IconButton } from '@mui/material';

function handleGithubClick() {
  window.open("https://github.com/Jordan-SFU");
}

function handleLinkedInClick() {
  window.open("https://www.linkedin.com/in/jordan-mckenzie-2b687b27a/");
}

function handleEmailClick() {
  window.open("mailto:jsm36@sfu.ca");
}

function SocialsSidebar() {
  return (
    <Card sx={{ borderRadius: 2, width:"fit-content", backgroundColor: 'rgba(0, 0, 0, 0.1)', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', position: 'fixed', zIndex: 5, marginLeft: '2.5vw', marginTop: '50vh' }}>
        <CardActions style={{}}>
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton onClick={handleGithubClick}>
              <GitHubIcon sx={{marginY: 1, color: '#FF5959' }}/>
            </IconButton>
            <IconButton onClick={handleLinkedInClick}>
              <LinkedInIcon sx={{marginY: 1, color: '#59A1FF'}}/>
            </IconButton>
            <IconButton onClick={handleEmailClick}>
              <EmailIcon sx={{marginY: 1, color: '#70F801'}}/>
            </IconButton>
          </Box>
        </CardActions>
    </Card>
  );
}

export default SocialsSidebar;