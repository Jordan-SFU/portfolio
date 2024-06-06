import { Box, Typography, Divider } from '@mui/material';
import ContactForm from '../components/contact-form';

function Contact() {
    return (
        <div className="ml-8 mr-8 mb-16 mt-4">
            <Box display='flex' flexDirection='row-reverse' alignItems="center" justifyContent="flex-start" className='mt-4'>
                <Divider 
                    orientation="horizontal" 
                    sx={{ 
                        borderColor: 'orange', 
                        borderWidth: '2px', 
                        borderRadius: 1, 
                        flexGrow: 1, 
                        height: '1px', 
                        marginLeft: 2 
                    }} 
                />
                <Typography variant="h5" sx={{ paddingBottom: 2, textAlign: 'left' }} color='orange'>
                    Want to get in touch?
                </Typography>
            </Box>
            <Typography variant="h3" sx={{ paddingBottom: 2, textAlign: 'left' }} color='gray'>
                Contact Me
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: 2, marginRight: '30vw', textAlign: 'left' }} color='gray'>
                Feel free to reach out to me with any questions, comments, or concerns. I'm always looking to connect with new people and learn new things, so don't hesitate to send me a message!
            </Typography>
            <div className="mt-4"></div>
            <ContactForm />
        </div>
    );
}

export default Contact;
