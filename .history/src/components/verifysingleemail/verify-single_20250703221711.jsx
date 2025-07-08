import { useState } from 'react';

import {
  Box,
  Dialog,
  TextField,
  Typography,
  DialogActions,
  DialogContent,
  Button,
  Divider,
} from '@mui/material';

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleVerify = () => {
    if (!email.trim()) {
      setError(true);
      return;
    }

    setError(false);
    console.log('Verifying:', email);
    onClose();
  };

  const handleCancel = () => {
    setEmail('');
    setError(false);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          p: 3,
          borderRadius: 2,
        },
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Verify Single Email</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Check if an email address is valid and deliverable.{' '}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Learn more
          </Box>
        </Typography>
      </Box>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      {/* Email Field */}
      <DialogContent sx={{ px: 0 }}>
        <TextField
          fullWidth
          label="Email"
          placeholder="Enter an email address you want to verify"
          value={email}
          error={error}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
          helperText={error ? 'Email is required' : ''}
        />

        <Typography variant="caption" sx={{ mt: 1.5, display: 'block' }}>
          Enter an email address you want to verify.{' '}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Learn more
          </Box>
        </Typography>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ px: 0, pt: 3 }}>
        <Button
          onClick={handleVerify}
          variant="contained"
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Verify
        </Button>

        <Button
          onClick={handleCancel}
          variant="outlined"
          sx={{
            ml: 1,
            bgcolor: 'transparent',
            color: 'text.primary',
            borderColor: 'text.primary',
            '&:hover': {
              bgcolor: 'action.hover',
              borderColor: 'text.primary',
            },
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
