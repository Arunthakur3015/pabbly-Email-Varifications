import { Box, Typography } from '@mui/material';

export default function VerifyEmailBox() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Email Verification Stats
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Weekly
          </Typography>
          <Typography variant="subtitle1">151</Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Monthly
          </Typography>
          <Typography variant="subtitle1">1,038</Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Yearly
          </Typography>
          <Typography variant="subtitle1">6,243</Typography>
        </Box>
      </Box>
    </Box>
  );
}
