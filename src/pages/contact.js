import { Typography } from '@mui/material';
import ContactForm from '../components/contact-form';

function Contact(){
    return(
        <div className="ml-8 mr-96 mb-16 mt-4">
            <Typography variant="h5" sx={{paddingBottom: 2}} color='orange'>
                Want to get in touch?
            </Typography>
            <Typography variant="h3" sx={{paddingBottom: 2}} color='gray'>
                Contact Me
            </Typography>
            <div className="mt-4"></div>
            <ContactForm />
        </div>
    )
}

export default Contact;