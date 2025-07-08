import { useState } from 'react';
import {
  Box,
  Dialog,
  Button,
  Divider,
  TextField,
  Typography,
  DialogContent,
} from '@mui/material';

import { snackbar } from 'src/components/Snackbar'; // ✅ import hook

export default function VerifySingleEmailModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const isValidEmail = email.includes('@') && email.includes('.');
  const { showSnackbar } = useSnackbar(); // ✅ use hook

  const handleVerify = () => {
    if (!isValidEmail) return;

    console.log('Verifying:', email);
    showSnackbar('Email verified successfully!', 'success'); // ✅ success toast
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          overflow: 'visible',
          borderRadius: 2,
        },
      }}
    >
      <Box sx={{ width: 600, height: 282.56 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            Verify Single Email
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Check if an email address is valid and deliverable.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                cursor: 'pointer',
                ml: 0.5,
              }}
            >
              Learn more
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mx: 3 }} />

        <DialogContent sx={{ px: 3, py: 2, overflow: 'visible' }}>
          <TextField
            label="Email"
            placeholder="Enter an email address you want to verify"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            error={isFocused && !isValidEmail}
            helperText={isFocused && !isValidEmail ? 'Email is required' : ''}
            sx={{
              mb: 1,
              width: 552,
              height: 54.56,
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
            }}
          />
          {(!isFocused || isValidEmail) && (
            <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
              Enter an email address you want to verify.{' '}
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Learn more
              </Typography>
            </Typography>
          )}
        </DialogContent>

        <Box
          sx={{
            mt: 1,
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
