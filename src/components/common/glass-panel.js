import React from 'react';
import { Box } from '@mui/material';

// Reusable frosted glass panel wrapper
function GlassPanel({ children, sx = {}, hover = true, ...rest }) {
  return (
    <Box
      sx={{
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(3px)',
        borderRadius: 2,
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ...(hover && { '&:hover': { transform: 'translateY(-4px)', boxShadow: '0px 4px 18px 0px rgba(0,0,0,0.6)' } }),
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default React.memo(GlassPanel);
