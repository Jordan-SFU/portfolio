import { Box, Typography } from "@mui/material";
import SkillGrid from "../components/skill-grid";
import info from "../constants/skillsConstants.js"; // import the default export
import SectionHeader from '../components/common/section-header';

const { skills } = info; // destructure the needed properties

function About() {
    return (
        <div className="ml-8 mb-16 mt-4" id="about">
            <SectionHeader align='left' eyebrow='Introductions' title='About Me' />
            <Typography variant="body1" sx={{ pb: 2, mr: '30vw', textAlign: 'left' }} color='#c2c2c2'>
                Hey, I'm Jordan! I'm currently a student at Simon Fraser University, working towards a major in computing science, and a minor in interactive arts and technologies. I'm a creative programmer hoping to work with computer graphics, and I love creating 3D art and animations!
            </Typography>
            <div className="mt-8">
                <SkillGrid skills={skills} alignment='space-around' />
            </div>
        </div>
    );
}

export default About;
