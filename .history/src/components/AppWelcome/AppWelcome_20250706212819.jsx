import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Iconify } from '../iconify';

function AppWelcome({
  points = [],
  img,
  videoUrl,
  sx,
  onSingleEmailClick,
  onBulkEmailClick,
  ...other
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);

  const handleOpenVideo = () => setOpen(true);
  const handleCloseVideo = () => setOpen(false);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleSingleEmail = () => {
    if (onSingleEmailClick) onSingleEmailClick();
    handleDropdownClose();
  };

  const handleBulkEmail = () => {
    if (onBulkEmailClick) onBulkEmailClick();
    handleDropdownClose();
  };

  return (
    <>
      <Box
        sx={{
          ml: 3,
          mt: 3.5,
          width: '1086px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 3,
          p: '40px',
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          ...sx,
        }}
        {...other}
      >
        {/* Left: Text + List + Button */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Points To Remember
          </Typography>

          <List dense disablePadding sx={{ pl: 2 }}>
            {points.map((point, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  pl: 0,
                  lineHeight: 1,
                }}
              >
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: '#637381',
                    lineHeight: 1.57143,
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Dropdown Button */}
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleDropdownClick}
              startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
              endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
            >
              Verify Email
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={dropdownOpen}
              onClose={handleDropdownClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleSingleEmail}>Verify Single Email</MenuItem>
              <MenuItem onClick={handleBulkEmail}>Verify Bulk Email</MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Right: Image */}
        {img && (
          <Box
            component="img"
            src={img}
            alt="Illustration"
            onClick={handleOpenVideo}
            sx={{
              flexShrink: 0,
              width: '435px',
              height: '244.68px',
              borderRadius: 2,
              cursor: 'pointer',
              objectFit: 'cover',
            }}
          />
        )}
      </Box>

      {/* Dialog: YouTube */}
      <Dialog
        open={open}
        onClose={handleCloseVideo}
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: 'hidden',
            width: '1060px',
            maxWidth: 'unset',
          },
        }}
      >
        <Box sx={{ width: '100%', height: '600px', position: 'relative' }}>
          <iframe
            src={videoUrl}
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Dialog>
    </>
  );
}

export default AppWelcome;
