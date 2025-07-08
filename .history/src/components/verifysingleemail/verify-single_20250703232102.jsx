import { useState } from 'react';

import {
  Box,
  Dialog,
  Button,
  Divider,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
} from '@mui/material';

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const isError = email.trim() === '';

  const handleVerify = () => {
    if (!isError) {
      console.log('Verify:', email);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box sx={{ width: 600, height: 282.56 }}>
        <DialogTitle
          sx={{
            px: 3,
            pt: 2,
            pb: 1,
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          Verify Single Email
        </DialogTitle>

        <Divider sx={{ mx: 3 }} />

        <DialogContent
          sx={{
            px: 3,
            py: 2,
          }}
        >
          <TextField
            label="Email"
            placeholder="Enter an email address you want to verify"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={isError}
            helperText={isError ? 'Email is required' : ''}
            sx={{
              mb: 1,
              width: 552,
              height: 54.56,
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
            }}
          />

          <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
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
        </DialogContent>

        {/* Action Buttons */}
        <Box sx={{ px: 3, pb: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleVerify}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Verify
          </Button>

          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderColor: 'grey.500',
              color: 'text.primary',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
