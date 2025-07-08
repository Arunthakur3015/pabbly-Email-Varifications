import { Box, Button, Typography } from '@mui/material';
import { LearnMoreTypography } from '../learn-more/learn-more';

export default function PageHeader({ title, description, showButton = true, buttonTitle }) {
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Box>

      <LearnMoreTypography />

      {showButton && (
        <Box sx={{ mt: 2 }}>
          <Button variant="contained">{buttonTitle}</Button>
        </Box>
      )}
    </>
  );
}
