import { useState } from 'react';

import {
  Box,
  Dialog,
  Button,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  DialogContent,
} from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar'; // ✅ Custom Snackbar import

export default function MoveFolderModal({ open, onClose, title = 'Select Folder' }) {
  const [folder, setFolder] = useState('');
  const { showSnackbar } = useSnackbar(); // ✅ Hook
  const handleVerify = () => {
    if (!folder) return;
    console.log({ folder });

    showSnackbar('Folder submitted successfully!'); // ✅ Show snackbar
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
      <Box sx={{ width: 600 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <DialogContent sx={{ px: 3, py: 2, overflow: 'visible' }}>
          <FormControl fullWidth sx={{ mb: 2, position: 'relative' }}>
            <InputLabel id="folder-label">Select Folder</InputLabel>
            <Select
              labelId="folder-label"
              id="folder-select"
              value={folder}
              label="Move to Folder"
              onChange={(e) => setFolder(e.target.value)}
              sx={{
                height: 56,
                pr: folder ? 6 : 2,
              }}
            >
              <MenuItem value="Home(0)">Home(0)</MenuItem>
              <MenuItem value="Pabbly Connect">Pabbly Connect</MenuItem>
              <MenuItem value="Pabbly Subscription Billing">Pabbly Subscription Billing</MenuItem>
              <MenuItem value="Pabbly Email Marketing">Pabbly Email Marketing</MenuItem>
              <MenuItem value="Pabbly Form Builder">Pabbly Form Builder</MenuItem>
              <MenuItem value="Pabbly Hook">Pabbly Hook</MenuItem>
              <MenuItem value="Pabbly Plus">Pabbly Plus</MenuItem>
              <MenuItem value="Pabbly Subscription">Pabbly Subscription</MenuItem>
              <MenuItem value="Magnet Brains">Magnet Brains</MenuItem>
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
            Move
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
