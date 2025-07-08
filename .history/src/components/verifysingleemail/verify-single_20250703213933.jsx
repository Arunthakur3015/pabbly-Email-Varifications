import { useState } from 'react';

import { Box, Button, Divider, TextField, Typography } from '@mui/material';

export default function VerifySingleEmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleVerify = () => {
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);
      console.log('Verifying:', email);
      // Your verify logic here
    }
  };

  const handleCancel = () => {
    setEmail('');
    setError(false);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 500, mx: 'auto' }
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        Check if an email address is valid and deliverable.{' '}
        <Typography
          component="span"
          sx={{
            color: 'primary.main',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Learn more
        </Typography>
      </Typography>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      {/* Email Field */}
      <TextField
        fullWidth
        label="Email"
        value={email}
        error={error}
        placeholder="Enter an email address you want to verify"
        helperText={error ? 'Enter an email address you want to verify' : ' '}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 3 }}>
        Enter an email address you want to verify.{' '}
        <Typography
          component="span"
          sx={{
            color: 'primary.main',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Learn more
        </Typography>
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'primary.main',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
          onClick={handleVerify}
        >
          Verify
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: 'text.primary',
            color: 'text.primary',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
              borderColor: 'text.primary',
            },
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
