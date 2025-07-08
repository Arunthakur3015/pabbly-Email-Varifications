import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { Iconify } from '../iconify';
import BulkVerifyEmailModal from '../bulk-email/bulk-email';
import VerifySingleEmailModal from '../verifysingleemail/verify-single';

function <Api></Api>AppWelcome({
  points = [],
  img,
  videoUrl,
  buttonTitle, // <-- default hata diya
  sx,
  ...other
}) {
  const [openVideo, setOpenVideo] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);

  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBulkModal, setOpenBulkModal] = useState(false);

  const handleOpenVideo = () => setOpenVideo(true);
  const handleCloseVideo = () => setOpenVideo(false);

  const handleDropdownClick = (event) => setAnchorEl(event.currentTarget);
  const handleDropdownClose = () => setAnchorEl(null);

  const handleSingleEmail = () => {
    setOpenSingleModal(true);
    handleDropdownClose();
  };

  const handleBulkEmail = () => {
    setOpenBulkModal(true);
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
        {/* Left Section */}
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

          {/* Verify Email Dropdown */}
          {buttonTitle && (
            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handleDropdownClick}
                startIcon={<Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />}
                endIcon={<Iconify icon="mingcute:down-line" width="20px" height="20px" />}
              >
                {buttonTitle}
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
          )}
        </Box>

        {/* Right Side Image */}
        {img && (
          <Box
            component="img"
            src={img}
            alt="Illustration"
            onClick={handleOpenVideo}
            sx={{
              mt: 4,
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

      {/* Video Dialog */}
      <Dialog
        open={openVideo}
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

      {/* Modals */}
      <VerifySingleEmailModal open={openSingleModal} onClose={() => setOpenSingleModal(false)} />
      <BulkVerifyEmailModal open={openBulkModal} onClose={() => setOpenBulkModal(false)} />
    </>
  );
}

export default AppWelcome;
