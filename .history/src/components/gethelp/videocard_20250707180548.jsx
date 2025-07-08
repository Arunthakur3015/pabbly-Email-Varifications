 import React, { useState } from 'react';

import { Box, Modal, IconButton, Typography } from '@mui/material';

import { Iconify } from '../iconify';
import PulseIcon from 'sr';

const VideoCard = () => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          width: '320.2px',
          height: '259.51px',
          padding: '8px',
          borderRadius: '12px',
          boxShadow: 2,
          backgroundColor: '#fff',
        }}
      >
        <Box
          sx={{
            width: '304.2px',
            height: '171.11px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={handleImageClick}
        >
          <img
            style={{ width: '100%', height: '100%', borderRadius: '12px' }}
            src="https://pabbly-email-verification-frontend.vercel.app/assets/images/get-help-video-thumbnails/app/email-verication-video-thumbnail.jpg"
            alt="logo"
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <PulseIcon />
          </Box>
        </Box>
        <Typography sx={{ mt: 2, ml: 1.5, color: '#1c252e', fontSize: '14px', fontWeight: '700' }}>
          Getting Started with Pabbly Email <br /> Verification
        </Typography>
      </Box>

      {/* Modal with YouTube Player */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60vw',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 24,
            outline: 'none',
            p: 0,
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, color: '#fff' }}
          >
            <Iconify icon="basil:cross-outline" color="#fff" width={40} height={40} />
          </IconButton>

          {/* YouTube Embed */}
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MIcaDmC_ngM?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '12px',
              }}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VideoCard;
