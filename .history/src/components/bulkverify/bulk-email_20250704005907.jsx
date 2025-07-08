import { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { UploadBox } from 'src/components/upoadbox/upload-box'; // ✅ path check kar lena

export default function BulkVerifyModal({ open, onClose }) {
  const [destination, setDestination] = useState('');

  const handleVerify = () => {
    // Verification logic
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          width: 600,
          borderRadius: 2,
          px: '40px',
          pt: '40px',
          pb: '24px',
        },
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Verify Bulk Emails
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Upload a list to verify multiple email addresses.
        </Typography>

        <Box sx={{ borderBottom: '1px solid #ddd', mb: 3 }} />

        <DialogContent sx={{ p: 0 }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="destination-label">Select Folder</InputLabel>
            <Select
              labelId="destination-label"
              id="destination-select"
              value={destination}
              label="Select Folder"
              onChange={(e) => setDestination(e.target.value)}
            >
              <MenuItem value="folder1">Folder 1</MenuItem>
              <MenuItem value="folder2">Folder 2</MenuItem>
              <MenuItem value="folder3">Folder 3</MenuItem>
            </Select>
          </FormControl>

          <UploadBox
            sx={{
              width: 434.93,
              height: 107.6,
              borderRadius: 1.5,
              mx: 'auto',
              mb: 4,
            }}
          />
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'flex-end', pt: 3 }}>
          <Button
            variant="contained"
            onClick={handleVerify}
            sx={{
              color: 'white',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
              mr: 1.5,
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
              bgcolor: 'transparent',
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
