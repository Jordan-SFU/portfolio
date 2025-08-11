import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material";
import React, { memo } from 'react';

function SkillCard({ skill, index }) {
    const colors = ['#FF5959', '#59A1FF', '#70F801'];

    return (
        <Card
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                width: '150px',
                height: '225px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(3px)',
                transition: 'transform 0.35s ease, opacity 0.35s ease',
                opacity: .55,
                '&:hover': {
                    transform: 'scale(1.1)',
                    opacity: 1
                }
            }}
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

export default memo(SkillCard);
