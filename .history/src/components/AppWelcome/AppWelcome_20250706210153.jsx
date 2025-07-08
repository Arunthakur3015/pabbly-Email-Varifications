import { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

function AppWelcome({ points = [], img, videoUrl, sx, ...other }) {
  const [open, setOpen] = useState(false);

  const handleOpenVideo = () => setOpen(true);
  const handleCloseVideo = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: '1086px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '40px', // ✅ 40px from all sides
          borderRadius: '12px',
          bgcolor: 'background.paper',
          boxShadow: 1,
          ...sx,
        }}
        {...other}
      >
        {/* Left: Text & List */}
        <Box sx={{ flex: 1, pr: { md: 4 } }}>
          <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
            Verification Guidelines
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1.5, lineHeight: 1.5 }}
          >
            Please adhere to the following guidelines when uploading your CSV file:
          </Typography>

          <List dense disablePadding sx={{ pl: 2 }}>
            {points.map((point, index) => (
              <ListItem
                key={index}
                sx={{
                  display: 'list-item',
                  listStyleType: 'disc',
                  pl: 0,
                  mb: 0.3,
                  lineHeight: 1.4,
                }}
              >
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: 'text.secondary',
                    lineHeight: 1.4,
                    mb: 0,
                  }}
                />
              </ListItem>
            ))}
          </List>
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
              height: '245px',
              borderRadius: '8px',
              cursor: 'pointer',
              objectFit: 'cover',
              ml: { md: 3 },
              mt: { xs: 3, md: 0 },
            }}
          />
        )}
      </Box>

      {/* YouTube Dialog */}
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
