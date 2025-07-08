import { Box, Button, Typography } from '@mui/material';

import  LearnMoreTypography  from '../learnMore/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <>
    <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
    </Box>
    <Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel neque id neque
          consectetur sagittis.
          </Typography>
        </Box>
        <Box>
          <LearnMoreTypography />
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
