import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material"
import { Tilt } from 'react-tilt'
import { useState } from 'react';

function SkillCard({ skill, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const colors = ['#FF5959', '#59A1FF', '#70F801'];

    return (
        <Card
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                width: '150px',
                height: '225px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(3px)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: isHovered ? 'translateY(-20px) scale(1.1)' : 'none',
                zIndex: isHovered ? 10 : index,
                opacity: isHovered ? 1 : 0.25,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardMedia
                component="img"
                height="140px"
                image={skill.image}
                alt={skill.name}
            />
            <div style={{ marginBottom: '16px' }}></div>
            <Divider
                variant="middle"
                sx={{
                    borderBottomWidth: 2,
                    borderColor: colors[index % 3],
                    borderRadius: index,
                }}
            />
            <CardContent>
                <Typography variant="h5" sx={{ paddingBottom: 2, textAlign: 'center' }} color="gray">
                    {skill.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default SkillCard;
