import { Typography, Card, CardContent, CardMedia, Divider } from "@mui/material"
import { Tilt } from 'react-tilt'

function SkillCard({ skill }) {
  const colors = ['#FF5959', '#59A1FF', '#70F801'];

  return (
    <Tilt options={{ scale: 1, 	reset: true, easing: "cubic-bezier(.03,.98,.52,.99)", speed: 500 }}>
        <Card sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '150px', height:'225px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)'}}>
            <CardMedia
                component="img"
                height="140"
                image={skill.image}
                alt={skill.name}
            />
            <div className="mb-4"></div>
            <Divider variant="middle" sx={{ borderBottomWidth: 2, borderColor: colors[skill.index % 3], borderRadius: skill.index }}/>
            <CardContent>
                <Typography variant="h5" sx={{ paddingBottom: 2, textAlign: 'center' }} color='gray'>
                    {skill.name}
                </Typography>
            </CardContent>
        </Card>
    </Tilt>
  )
}

export default SkillCard;
