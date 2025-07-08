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

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function CustomModal({
  open,
  onClose,
  title = 'Verify Single Email',
  subtitle = 'Check if an email address is valid and deliverable.',
  inputLabel = 'Email',
  placeholder = 'Enter an email address you want to verify',
  helper = 'Enter an email address you want to verify.',
  confirmText = 'Verify',
  cancelText = 'Cancel',
}) {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { showSnackbar } = useSnackbar();

  const isValidEmail = email.includes('@') && email.includes('.');

  const handleVerify = () => {
    if (!isValidEmail && title.toLowerCase().includes('verify')) return;

    showSnackbar(`${confirmText} action completed successfully!`, 'success');
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
            {title}
          </Typography>

          {subtitle && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {subtitle}
              </Typography>
            </Box>
          )}
        </Box>

        <Divider sx={{ mx: 3 }} />

        <DialogContent sx={{ px: 3, py: 2, overflow: 'visible' }}>
          <TextField
            label={inputLabel}
            placeholder={placeholder}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            error={isFocused && title.toLowerCase().includes('verify') && !isValidEmail}
            helperText={
              isFocused && title.toLowerCase().includes('verify') && !isValidEmail
                ? `${inputLabel} is required`
                : ''
            }
            sx={{
              mb: 1,
              width: 552,
              height: 54.56,
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
            }}
          />

          {(!isFocused || isValidEmail || !title.toLowerCase().includes('verify')) && (
            <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
              {helper}
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
            {confirmText}
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
            {cancelText}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
