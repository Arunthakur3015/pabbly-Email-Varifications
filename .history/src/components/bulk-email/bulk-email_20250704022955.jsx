import { useState } from 'react';

import {
  Box,
  Link,
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
  title = 'Verify Bulk Email List',
  showEmailInput = false,
  showFolderSelect = true,
  showUploadBox = true,
}) {
  const [emailListName, setEmailListName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [folder, setFolder] = useState('');

  const isValid = emailListName.trim() !== '';

  const handleVerify = () => {
    if (!isValid) return;
    console.log({
      emailListName,
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
          borderRadius: '16px',
        },
      }}
    >
      <Box sx={{ width: 600, height: 512 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            Upload email list for bulk verification. Download{' '}
            <Link href="#" underline="hover" sx={{ color: 'primary.main', fontWeight: 500 }}>
              sample file
            </Link>{' '}
            here.
          </Typography>
        </Box>

        <Divider sx={{ mx: 3 }} />

        <DialogContent sx={{ px: 3, py: 2, overflow: 'visible' }}>
          {/* Email List Name Field */}
          <TextField
            required
            label="Email List Name"
            placeholder="Enter the name of the email list here"
            fullWidth
            value={emailListName}
            onChange={(e) => setEmailListName(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            error={isFocused && !isValid}
            helperText={
              isFocused && !isValid ? (
                'Email list name is required'
              ) : (
                <>
                  Enter the name of the email list here.{' '}
                  <Link
                    href="#"
                    underline="hover"
                    sx={{ color: 'primary.main', cursor: 'pointer' }}
                  >
                    Learn more
                  </Link>
                </>
              )
            }
            sx={{
              mb: 3,
              '& .MuiInputBase-root': {
                height: '56px',
              },
            }}
          />

          {/* Folder Select */}
          {showFolderSelect && (
            <>
              <FormControl fullWidth sx={{ mb: 1.2, position: 'relative' }}>
                <InputLabel id="folder-label">Select Folder</InputLabel>
                <Select
                  labelId="folder-label"
                  id="folder-select"
                  value={folder}
                  label="Select Folder"
                  onChange={(e) => setFolder(e.target.value)}
                  sx={{
                    height: 56,
                    pr: folder ? 6 : 2, // extra padding on right if folder selected
                  }}
                >
                  <MenuItem value="Home(0)">Home(0)</MenuItem>
                  <MenuItem value="Pabbly Connect">Pabbly Connect</MenuItem>
                  <MenuItem value="Pabbly Subscription Billin...">Pabbly Subscription Billin...</MenuItem>
                  <MenuItem value="Pabbly Email Marketing">Pabbly Email Marketing</MenuItem>
                  <MenuItem value="Pabbly Form Builder">Pabbly Form Builder</MenuItem>
                  <MenuItem value="Pabbly Hook">Folder 3</MenuItem>
                  <MenuItem value="Pabbly Plus">Folder 3</MenuItem>
                  <MenuItem value="Pabbly Subscription ">Folder 3</MenuItem>
                  <MenuItem value="Magnet Brains">Folder 3</MenuItem>
                </Select>

                {folder && (
                  <Box
                    onClick={() => setFolder('')}
                    sx={{
                      position: 'absolute',
                      right: 36,
                      top: '52%',
                      transform: 'translateY(-50%)',
                      color: 'grey.600',
                      cursor: 'pointer',
                      zIndex: 1,
                      fontSize: 24,
                    }}
                  >
                    ×
                  </Box>
                )}
              </FormControl>

              <Typography variant="caption" sx={{ color: 'text.secondary', mb: 2 }}>
                Choose the folder where the email list should be uploaded.{' '}
                <Link href="#" underline="hover" sx={{ color: 'primary.main' }}>
                  Learn more
                </Link>
              </Typography>
            </>
          )}

          {/* Upload Box */}
          {showUploadBox && (
            <Box sx={{ mt: 2 }}>
              <UploadBox
                placeholderText="Choose a file or drag it here."
                sx={{
                  width: '100%',
                  height: 108,
                  borderRadius: 2,
                }}
              />
            </Box>
          )}
        </DialogContent>

        {/* Action Buttons */}
        <Box
          sx={{
            mt: 2,
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
              backgroundColor: '#007BFF',
              color: 'white',
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Upload
          </Button>

          <Button
            variant="text"
            onClick={onClose}
            sx={{
              color: 'text.primary',
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: '8px',
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
