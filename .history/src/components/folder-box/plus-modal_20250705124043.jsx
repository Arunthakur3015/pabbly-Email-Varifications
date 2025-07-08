import { useState } from 'react';

import {
  Box,
  Link,
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
  title = 'Do you really want to delete the folder?',
  inputLabel = '',
  helper = 'Note that when a folder is deleted its email lists are moved to the home folder.',
  confirmText = 'Folder Created',
  cancelText = 'Cancel',
  spacing = {
    title: { pt: 3, pb: 3, px: 3 },
    input: { mt: 2 },
    helper: { mt: 0.2, px: 3 },
    actions: { mt: 2, pb: 3, px: 3 },
  },
}) {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { showSnackbar } = useSnackbar();

  const isValidEmail = email.includes('@') && email.includes('.');

  const handleVerify = () => {
    if (!isValidEmail && title.toLowerCase().includes('verify')) return;

    showSnackbar(`${confirmText} successfully!`);
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
      <Box sx={{ width: 600, height: 277.362 }}>
        {/* Title */}
        <Box sx={{ ...spacing.title }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Divider sx={{ mx: 3 }} />

        {/* Input */}
        <DialogContent sx={{ px: 3, py: 1.5, overflow: 'visible' }}>
          <TextField
            label={inputLabel}
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
              mb: 0.5,
              mt: 5,
              width: '100%',
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
              ...spacing.input,
            }}
          />

          {/* Custom Helper */}
          {!isFocused || isValidEmail || !title.toLowerCase().includes('verify') ? (
            <Typography
              fontSize='12px'
              fontcolor='text.secondary'
              sx={{
                color: 'text.secondary',
                display: 'flex',
                gap: 0.5,
                alignItems: 'center',
                ...spacing.helper,
                pl:2,
              }}
            >
              Enter the name of the folder here.
              <Link href="#" underline="always" color="primary" sx={{ cursor: 'pointer' }}>
                Learn more
              </Link>
            </Typography>
          ) : null}
        </DialogContent>

        {/* Actions */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.8,
            ...spacing.actions,
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
