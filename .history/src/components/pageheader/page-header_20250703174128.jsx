import { Box, Button, Typography } from '@mui/material';

import  { LearnMoreTypography }  from '../learnMore/learn-more';

export function PageHeader({ title, description, showButton = true, buttonTitle = 'Learn More', mt: '4,}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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

            <Box sx={{ mt: 1 }}>
              <LearnMoreTypography />
            </Box>
           </Box>
        </Box>
      </Box>
      {showButton && (
        <Box>
          <Button variant="contained">{buttonTitle}</Button>
        </Box>
      )}
    </Box>
  );
}

