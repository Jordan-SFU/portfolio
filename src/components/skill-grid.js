import SkillCard from './skill-card.js';
import { Grid } from '@mui/material';

function SkillGrid({ skills, alignment }) {
    return (
        <Grid container spacing={-30} justifyContent={alignment}>
            {skills.map((skill) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SkillCard skill={skill} />
                </Grid>
            ))}
        </Grid>
    );
}

export default SkillGrid;