import React, { useState } from 'react';

import { Box, Link, Modal, Button, Divider, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleVerify = () => {
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    // Yahan apni verification logic laga sakta hai
    alert(`Verifying email: ${email}`);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="verify-single-email-title"
      aria-describedby="verify-single-email-description"
    >
      <Box sx={style}>
        <Typography id="verify-single-email-title" variant="h6" mb={1}>
          Verify Single Email
        </Typography>

        <Typography
          id="verify-single-email-description"
          variant="body2"
          color="text.secondary"
          mb={2}
        >
          Check if an email address is valid and deliverable.{' '}
          <Link href="#" underline="hover" color="primary">
            Learn more
          </Link>
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <TextField
          fullWidth
          label="Email"
          placeholder="Enter an email address you want to verify"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          helperText={error ? 'Email is required' : ''}
          autoFocus
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              color: 'black',
              borderColor: 'black',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderColor: 'black',
              },
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleVerify}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#115293',
              },
            }}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
