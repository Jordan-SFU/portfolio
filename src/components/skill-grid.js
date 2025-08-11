import SkillCard from './skill-card.js';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import GlassPanel from './common/glass-panel';

function SkillGrid({ skills }) {
    // Duplicate skills for seamless loop (memoized to avoid recalculation)
    const loopSkills = useMemo(() => [...skills, ...skills], [skills]);

    return (
        <Box sx={{ position: 'relative', width: '100%', py: 2 }}>
            <GlassPanel sx={{ overflow: 'hidden', px: 4, py: 3 }} hover={false}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        alignItems: 'stretch',
                        width: 'max-content',
                        animation: 'skill-marquee 40s linear infinite'
                    }}
                >
                    {loopSkills.map((skill, index) => (
                        <Box key={index} sx={{ flex: '0 0 clamp(120px, 12vw, 160px)', display: 'flex' }}>
                            <SkillCard skill={skill} index={index % skills.length} />
                        </Box>
                    ))}
                </Box>
            </GlassPanel>
            {/* Keyframes injected inline */}
            <style>{`
              @keyframes skill-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
        </Box>
    );
}

export default SkillGrid;
