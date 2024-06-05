import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Footer(){
    return (
        <Box sx={{ p: 3, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', background: 'rgba(53, 53, 53, 0.75)', backdropFilter: 'blur(3px)' }}>
            <Typography variant="p" color="gray" align="right">
                Email: jsm36@sfu.ca<br />
                Phone: 778-628-1007
            </Typography>
        </Box>
    )
}

export default Footer;