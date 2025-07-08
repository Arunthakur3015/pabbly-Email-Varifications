import { useState } from 'react';

import {
  Box,
  Dialog,
  Button,
  Select,
  Divider,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  DialogContent,
} from '@mui/material';

import { UploadBox } from 'src/components/uploadbox/upload-box';

export default function VerifyEmailModal({
  open,
  onClose,
  title = 'Verify Email',
  showEmailInput = true,
  showFolderSelect = false,
  showUploadBox = false,
}) {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [folder, setFolder] = useState('');

  const isValidEmail = email.includes('@') && email.includes('.');

  const handleVerify = () => {
    if (showEmailInput && !isValidEmail) return;
    console.log('Verifying:', {
      email: showEmailInput ? email : undefined,
      folder,
    });
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
      <Box sx={{ width: 600, height: showUploadBox ? 470 : 282.56 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {showEmailInput
                ? 'Check if an email address is valid and deliverable.'
                : 'Upload a list to verify multiple email addresses.'}
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
          {showEmailInput && (
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
                mb: 2,
                width: 552,
                height: 54.56,
                '& .MuiInputBase-root': {
                  height: '54.56px',
                },
              }}
            />
          )}

          {showFolderSelect && (
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="folder-label">Select Folder</InputLabel>
              <Select
                labelId="folder-label"
                id="folder-select"
                value={folder}
                label="Select Folder"
                onChange={(e) => setFolder(e.target.value)}
              >
                <MenuItem value="folder1">Folder 1</MenuItem>
                <MenuItem value="folder2">Folder 2</MenuItem>
                <MenuItem value="folder3">Folder 3</MenuItem>
              </Select>
            </FormControl>
          )}

          {showUploadBox && (
            <UploadBox
              placeholderText="Upload file"
              sx={{
                width: '100%',
                height: 108,
                borderRadius: 2,
              }}
            />
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
