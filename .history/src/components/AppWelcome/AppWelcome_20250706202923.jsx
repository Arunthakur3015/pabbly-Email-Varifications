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
            maxWidth:''
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 3,
          height: '356px',
          width: '1352.6px',
          p: 5,
          mt: 5,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          ...sx,
        }}
        {...other}
      >
        {/* Left side: heading + list */}
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
                  lineHeight: 1.3,
                }}
              >
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{ variant: 'body2', color: '#637381', lineHeight: 1.3 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right side: image */}
        {img && (
          <Box
            component="img"
            src={img}
            alt="Illustration"
            onClick={handleOpenVideo}
            sx={{
              flexShrink: 0,
              width: '480px',
              height: '270px',
              borderRadius: 2,
              cursor: 'pointer', // ✅ show hand cursor on hover
            }}
          />
        )}
      </Box>

      {/* Dialog with YouTube video */}
      <Dialog
        open={open}
        onClose={handleCloseVideo}
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: 'hidden',
            width: '1060px', // ✅ Fixed width
            maxWidth: 'unset', // ✅ disable MUI's maxWidth
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
