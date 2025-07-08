import React from 'react';

import { Box, Button } from '@mui/material';

const SampleButton = () => (
  <Box>
    <Button
      variant="contained"
      size="large"
      sx={{
        color: '#078dee',
        border: '0.5px solid #078dee',
        backgroundColor: '#f1f7fb',
        transition: 'border 0.2s ease, background-color 0.2s ease',
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

export default SampleButton;