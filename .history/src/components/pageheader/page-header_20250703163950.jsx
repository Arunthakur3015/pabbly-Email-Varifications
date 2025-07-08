import { Box, Button, Typography } from '@mui/material';

import  LearnMoreTypography  from '../learnMore/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle = 'Learn More' }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: ''}}>
      {/* Title, Description, LearnMore and Button all inside one Box */}
      <Box>
        <Box>
          {/* Title */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center'}} >
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

      {/* Button inside same parent Box */}
      {showButton && (
        <Box>
          <Button variant="contained">{buttonTitle}</Button>
        </Box>
      )}
    </Box>
  );
}

