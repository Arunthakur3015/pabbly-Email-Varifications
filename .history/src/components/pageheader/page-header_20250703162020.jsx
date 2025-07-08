import { Box, Button, Typography } from '@mui/material';

import  LearnMoreTypography  from '../learnMore/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <>
    <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
          </Typography>
        </Box>
        <Box>
          <Box display= 'flex' alignItems= 'center'>
            <Typography sx={{ color : 'text.secondary'}}>{description}</Typography>
           </Box>
           <Box>
             <LearnMoreTypography />
           </Box>

    </Box>
    </Box>
      {showButton && (
        <Box sx={{ mt: 2 }}>
          <Button variant="contained">{buttonTitle}</Button>
        </Box>
      )}
    </>
  );
}
