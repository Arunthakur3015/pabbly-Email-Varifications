import React from 'react';
import { toast } from 'react-hot-toast';

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

    toast.success('Email list uploaded successfully!'); // ✅ Toast success
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
                  sx={{ height: 56, pr: folder ? 5 : 2 }} // space for icon
                >
                  <MenuItem value="folder1">Folder 1</MenuItem>
                  <MenuItem value="folder2">Folder 2</MenuItem>
                  <MenuItem value="folder3">Folder 3</MenuItem>
                </Select>
                {folder && (
                  <Box
                    onClick={() => setFolder('')}
                    sx={{
                      position: 'absolute',
                      right: 36,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'grey.600',
                      cursor: 'pointer',
                      zIndex: 1,
                      fontSize: 18,
                      fontWeight: 600,
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
