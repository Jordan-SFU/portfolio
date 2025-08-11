import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

function SectionHeader({ align = 'left', eyebrow, title, color = 'orange', dividerFlex = 1, sx = {} }) {
  const isLeft = align === 'left';
  return (
    <Box sx={{ mb: 2, ...sx }}>
      <Box display='flex' flexDirection={isLeft ? 'row-reverse' : 'row'} alignItems='center' justifyContent='flex-start'>
        <Divider
          orientation='horizontal'
            sx={{
              borderColor: color,
              borderWidth: '2px',
              borderRadius: 1,
              flexGrow: dividerFlex,
              height: '1px',
              [isLeft ? 'marginLeft' : 'marginRight']: 2
            }}
        />
        {eyebrow && (
          <Typography variant='h5' sx={{ pb: 2, textAlign: isLeft ? 'left' : 'right' }} color={color}>
            {eyebrow}
          </Typography>
        )}
      </Box>
      {title && (
        <Typography variant='h3' sx={{ pb: 2, textAlign: isLeft ? 'left' : 'right' }} color='gray'>
          {title}
        </Typography>
      )}
    </Box>
  );
}

export default React.memo(SectionHeader);
