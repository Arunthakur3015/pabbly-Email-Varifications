import { useState } from 'react';

import { Box, Modal, Button, Divider, TextField, Typography } from '@mui/material';

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const handleVerify = () => {
    if (!email) return;
    console.log('Verifying:', email);
    onClose();
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const isError = touched && !email;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          width: 480,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          mx: 'auto',
          mt: '10vh',
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Verify Single Email
        </Typography>

        <Typography sx={{ mb: 2, color: 'text.secondary' }}>
          Check if an email address is valid and deliverable.{' '}
          <Typography
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Learn more
          </Typography>
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TextField
          fullWidth
          label="Email"
          placeholder="Enter an email address you want to verify"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          error={isError}
          helperText={isError ? 'Email is required' : ''}
        />

        <Typography sx={{ mt: 1.5, color: 'text.secondary' }}>
          Enter an email address you want to verify.{' '}
          <Typography
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Learn more
          </Typography>
        </Typography>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'primary.main',
              color: 'common.white',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
            onClick={handleVerify}
            disabled={!email}
          >
            Verify
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderColor: 'grey.500',
              color: 'grey.800',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
