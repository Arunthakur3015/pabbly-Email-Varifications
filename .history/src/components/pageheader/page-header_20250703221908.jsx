import { useState } from 'react';

import { Box, Menu, Button, MenuItem, Typography } from '@mui/material';

import { Iconify } from '../iconify';

export function PageHeader({ title, description, showButton = true, buttonTitle = 'Learn More', onSingleEmail }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSingleEmail = () => {
    if (onSingleEmail) onSingleEmail(); // ✅ call parent handler
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
      {/* Title and Description */}
      {/* ... */}

      {showButton && (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
            startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
            endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
          >
            {buttonTitle}
          </Button>

          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleSingleEmail}>Verify Single Email</MenuItem>
            <MenuItem onClick={handleClose}>Verify Bulk Email</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
}