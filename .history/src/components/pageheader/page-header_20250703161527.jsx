import { Box, Button, Typography } from '@mui/material';

import  LearnMoreTypography  from '../learnMore/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <>
    <Box>
        
    </Box>
      {showButton && (
        <Box sx={{ mt: 2 }}>
          <Button variant="contained">{buttonTitle}</Button>
        </Box>
      )}
    </>
  );
}
