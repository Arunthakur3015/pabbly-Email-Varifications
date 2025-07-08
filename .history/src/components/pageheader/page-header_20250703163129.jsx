import { Box, Button, Typography } from '@mui/material';
import { LearnMoreTypography  from '../learnMore/learn-more.jsx';

export default function PageHeader({ title, description, showButton = true, buttonTitle = 'Learn More' }) {
  return (
    <Box>
      {/* Title, Description, LearnMore and Button all inside one Box */}
      <Box sx={{ mb: 3 }}>
        <Box>
          {/* Title */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {title}
            </Typography>
          </Box>

          {/* Description */}
          <Box>
            <Typography sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </Box>

          {/* LearnMoreTypography */}
          <Box sx={{ mt: 1 }}>
            <LearnMoreTypography />
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
