import { useState } from 'react';

import { Box, Dialog, Button, Divider, TextField, Typography, DialogContent } from '@mui/material';

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const isError = email.trim() === '';

  const handleVerify = () => {
    if (!isError) {
      console.log('Verifying:', email);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box sx={{ width: 600, height: 282.56 }}>
        {/* Header */}
        <Box
          sx={{
            px: 3,
            pt: 3,
            pb: 2,
            height: '94px',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            Verify Single Email
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Check if an email address is valid and deliverable.
            </Typography>
            <Typography
              component="span"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                ml: 0.5,
                cursor: 'pointer',
              }}
            >
              Learn more
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mx: 3 }} />

        {/* Content */}
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
            helperText={isError ? 'please enter a valid Email address' : ''}
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

        {/* Buttons */}
        <Box
          sx={{
            px: 3,
            pb: 3,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
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
