import { Box, Button, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learnMore/learn-more';

export function PageHeader(sx={{ maxWidth: 'xl'}}{
  title,
  description,
  showButton = true,
  buttonTitle = 'Verify Email',
  buttonAction, // ye prop button click pe call hoga
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 4,
        lineHeight: '16px',
      }}
    >
      <Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          <Box sx={{ ml: 1 }}>
            <LearnMoreTypography />
          </Box>
        </Box>
      </Box>

      {showButton && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={buttonAction} // yaha event handle ho raha hai
          startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
          endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
        >
          {buttonTitle}
        </Button>
      )}
    </Box>
  );
}
