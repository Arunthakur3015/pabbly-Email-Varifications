import { useState } from 'react';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import { Iconify } from '../iconify';
import { LearnMoreTypography } from '../learnMore/learn-more';

export function PageHeader({ title, description, showButton = true, buttonTitle, onSingleEmail }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // open dropdown menu
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSingleEmailClick = () => {
    if (onSingleEmail) onSingleEmail(); // call parent handler
    handleClose(); // close menu
  };

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
        <Typography variant="h4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          <Box sx={{ ml: 1 }}>
            <LearnMoreTypography />
          </Box>
        </Box>
      </Box>

      {showButton && (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick} // open menu on click
            startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
            endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
          >
            {buttonTitle}
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleSingleEmailClick}>Verify Single Email</MenuItem>
            {/* Agar bulk email bhi add karna hai to MenuItem yahan add kar */}
          </Menu>
        </Box>
      )}
    </Box>
  );
}
