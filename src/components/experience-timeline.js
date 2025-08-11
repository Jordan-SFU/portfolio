import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import experiences from '../data/experiences';
import GlassPanel from './common/glass-panel';

// Memoized single timeline entry to avoid unnecessary re-renders
const ExperienceItem = memo(function ExperienceItem({ exp, isLast }) {
  const isFuture = exp.id === 'future-role';
  const accent = isFuture ? 'gray' : 'orange';

  return (
    <TimelineItem>
      <TimelineOppositeContent sx={{ flex: 0.25, pr: 2, textAlign: { xs: 'left', md: 'right' }, color: '#9e9e9e' }}>
        <Typography variant='body2' sx={{ fontWeight: 600, color: accent }}>{exp.period}</Typography>
        {exp.location && <Typography variant='caption' sx={{ color: 'gray' }}>{exp.location}</Typography>}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{ borderColor: accent, backgroundColor: isFuture ? 'rgba(255,255,255,0.1)' : 'rgba(255,165,0,0.15)' }} />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{ py: 2 }}>
        <GlassPanel sx={{ px: 5, py: 2 }}>
          <Typography variant='h6' color={accent} sx={{ mb: 0.5 }}>{exp.company}</Typography>
          <Typography variant='subtitle2' color='gray' sx={{ mb: 1 }}>{exp.role}</Typography>
          <Box component='ul' sx={{ pl: 3, m: 0 }}>
            {exp.bullets.map((b, i) => (
              <Typography key={i} component='li' variant='body2' color='#c2c2c2' sx={{ mb: 0.5 }}>
                {b}
              </Typography>
            ))}
          </Box>
          {exp.tech && (
            <Box sx={{ mt: 1.5, display: 'flex', gap: 1 }}>
              {exp.tech.map(t => (
                <Box key={t.name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box component='img' src={t.image} alt={t.name + ' logo'} sx={{ width: 32, height: 32, objectFit: 'contain', filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.4))' }} />
                  <Typography variant='caption' color='gray'>{t.name}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </GlassPanel>
      </TimelineContent>
    </TimelineItem>
  );
});

function ExperienceTimeline() {
  return (
    <Box id="experience" sx={{ position: 'relative', mb: 8, mt: 4 }}>
      <Timeline position='alternate' sx={{
        '& .MuiTimelineDot-root': { backgroundColor: 'rgba(255,165,0,0.15)', border: '2px solid orange' },
        '& .MuiTimelineItem-root:first-of-type .MuiTimelineDot-root': { borderColor: 'gray' },
        '& .MuiTimelineConnector-root': { background: 'linear-gradient(to bottom, rgba(255,165,0,0.2), rgba(255,165,0,0))' },
        '& .MuiTimelineItem-missingOppositeContent:before': { display: 'none' }
      }}>
        {experiences.map((exp, idx) => (
          <ExperienceItem key={exp.id} exp={exp} isLast={idx === experiences.length - 1} />
        ))}
      </Timeline>
    </Box>
  );
}

export default memo(ExperienceTimeline);
