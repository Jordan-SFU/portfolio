import { Typography } from "@mui/material";
import SkillGrid from "../components/skill-grid";
import info from "../constants/skillsConstants.js"; // import the default export

const { skills, programs } = info; // destructure the needed properties

function About() {
    return (
        <div className="ml-8 mb-16 mt-4">
            <Typography variant="h5" sx={{ paddingBottom: 2 }} color='orange'>
                Introductions
            </Typography>
            <Typography variant="h3" sx={{ paddingBottom: 2 }} color='gray'>
                About Me
            </Typography>
            <Typography variant="body1" sx={{ paddingBottom: 2, marginRight: '30vw' }} color='gray'>
                I'm a creative, visual programmer aiming to expand my skills! I need a lot of text here to test alignment and other spacing and such, so I will continue to ramble on for a long, long time. Hopefully, I add the actual text here at some point, but until then, have this.
            </Typography>
            <div className="mt-8" style={{ textAlign: 'left' }}>
                <SkillGrid skills={skills} alignment='flex-start' />
            </div>
            <div className="mt-8" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <SkillGrid skills={programs} alignment='flex-end' />
            </div>
        </div>
    );
}

export default About;
