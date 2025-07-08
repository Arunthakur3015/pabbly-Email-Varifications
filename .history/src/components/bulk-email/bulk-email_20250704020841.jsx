import { useState } from 'react';

import {
  Box,
  Dialog,
  Button,
  Select,
  Divider,
  MenuItem,
  Typography,
  InputLabel,
  IconButton,
  FormControl,
  DialogContent,
  InputAdornment,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { UploadBox } from 'src/components/uploadbox/upload-box';

export default function VerifyBulkEmailModal({ open, onClose }) {
  const [folder, setFolder] = useState('');

  const handleVerify = () => {
    console.log('Verifying bulk for folder:', folder);
    onClose();
  };

  const handleClearFolder = () => {
    setFolder('');
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
      <Box sx={{ width: 600, height: 470 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            Verify Bulk Emails
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Upload a list to verify multiple email addresses.
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
          {/* Folder Select with Clear Button */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="folder-label">Select Folder</InputLabel>
            <Select
              labelId="folder-label"
              id="folder-select"
              value={folder}
              label="Select Folder"
              onChange={(e) => setFolder(e.target.value)}
              endAdornment={
                folder && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClearFolder} edge="end" size="small" sx={{ mr: 1 }}>
                      <Iconify icon="eva:close-fill" width={20} />
                    </IconButton>
                  </InputAdornment>
                )
              }
            >
              <MenuItem value="folder1">Folder 1</MenuItem>
              <MenuItem value="folder2">Folder 2</MenuItem>
              <MenuItem value="folder3">Folder 3</MenuItem>
            </Select>
          </FormControl>

          {/* Upload Box */}
          <UploadBox
            placeholderText="Upload file"
            sx={{
              width: '100%',
              height: 108,
              borderRadius: 2,
            }}
          />
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
