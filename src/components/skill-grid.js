import SkillCard from './skill-card.js';
import { Grid, Box } from '@mui/material';

function SkillGrid({ skills, alignment }) {
    return (
        <Grid container justifyContent={alignment}>
            {skills.map((skill, index) => (
                <Grid item key={index}>
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: index,
                        }}
                    >
                        <SkillCard skill={skill} index={index} />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}

export default SkillGrid;
