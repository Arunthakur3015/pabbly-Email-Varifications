import React from 'react';

import { Box, Button, useTheme, useMediaQuery } from '@mui/material';

const SampleButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ textAlign: isMobile ? 'center' : 'left', mt: 2 }}>
      <Button
        variant="contained"
        size="large"
        fullWidth={isMobile}
        sx={{
          color: '#078dee',
          border: '0.5px solid #078dee',
          backgroundColor: '#f1f7fb',
          transition: 'border 0.2s ease, background-color 0.2s ease',
          fontSize: { xs: '14px', sm: '15px', md: '16px' },
          py: { xs: 1.2, sm: 1.5 },
          '&:hover': {
            backgroundColor: 'rgba(7, 141, 238, 0.08)',
            border: '1px solid #078dee',
          },
        }}
      >
        View All videos
      </Button>
    </Box>
  );
};

export default SampleButton;
