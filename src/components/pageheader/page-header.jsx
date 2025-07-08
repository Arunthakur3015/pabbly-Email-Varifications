import { useState } from 'react';

import { Box, Menu, Button, MenuItem, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learnMore/learn-more';

export function PageHeader({
  title,
  description,
  showButton = true,
  buttonTitle = 'Learn More',
  onSingleEmailClick,
  onBulkEmailClick,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSingleEmail = () => {
    if (onSingleEmailClick) onSingleEmailClick();
    handleClose();
  };

  const handleBulkEmail = () => {
    if (onBulkEmailClick) onBulkEmailClick();
    handleClose();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'center' },
        mt: 4,
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ textAlign: { xs: 'left', md: 'inherit' } }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          <LearnMoreTypography />
        </Box>
      </Box>

      {showButton && (
        <Box sx={{ alignSelf: { xs: 'stretch', md: 'auto' } }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: { xs: '100%', md: 'auto' },
            }}
            onClick={handleClick}
            startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
            endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
          >
            {buttonTitle}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleSingleEmail}>Verify Single Email</MenuItem>
            <MenuItem onClick={handleBulkEmail}>Verify Bulk Email</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
}
