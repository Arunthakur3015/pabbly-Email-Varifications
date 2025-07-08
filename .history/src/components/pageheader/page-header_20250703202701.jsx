import { Box, Button, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import  { LearnMoreTypography }  from '../learnMore/learn-more';

export function PageHeader({ title, description, showButton = true,buttontitle buttonAction,}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4, lineHeight: '16px'}}>
      <Box>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Typography variant="h4">
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
          color='primary'
          size='large'
          onClick={buttonAction}
          startIcon={
          <Iconify icon="octicon:feed-plus-16" width= '16px' height='16px'/>
        }
        endIcon={
            <Iconify icon="mingcute:down-line" width= '20px' height='20px'/>
        }
          >{buttonTitle}</Button>
        </Box>
      )}
    </Box>
  );
}

