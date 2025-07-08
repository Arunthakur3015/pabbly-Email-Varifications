import { Box, Button, Typography } from '@mui/material';

import  { LearnMoreTypography }  from '../learnMore/learn-more';
import { Iconify } from '../iconify';

export function PageHeader({ title, description, showButton = true, buttonTitle = 'Learn More'}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4}}>
      <Box>
        <Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Box >
              <Typography sx={{ color: 'text.secondary' }}>
              {description}
              </Typography>
            </Box>

            <Box sx={{ml:1}}>
              <LearnMoreTypography />
            </Box>
           </Box>
        </Box>
      </Box>
      {showButton && (
        <Box>
          <Button variant="contained"
          startIcon={
          <Iconify  />
        }
          >{buttonTitle}</Button>
        </Box>
      )}
    </Box>
  );
}

