import { useState } from 'react';

import {
  Box,
  Dialog,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
  DialogContent,
} from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar'; // ✅ import your snackbar hook

export default function MoveFolderModal({ open, onClose }) {
  const [folder, setFolder] = useState('');
  const { showSnackbar } = useSnackbar(); // ✅ use snackbar

  const handleMove = () => {
    if (!folder) {
      showSnackbar('Please select a folder before moving.', 'error');
      return;
    }

    showSnackbar('Moved to folder successfully!', 'success');
    onClose(); // close modal after action
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      PaperProps={{ sx: { overflow: 'visible', borderRadius: '16px' } }}
    >
      <Box sx={{ width: 600, height: 270 }}>
        <Box sx={{ px: 3, pt: 3, pb: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            Move to Folder
          </Typography>
        </Box>

        <DialogContent sx={{ px: 3, pt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="folder-label">Select Folder</InputLabel>
            <Select
              labelId="folder-label"
              value={folder}
              label="Select Folder"
              onChange={(e) => setFolder(e.target.value)}
              sx={{ height: 56 }}
            >
              <MenuItem value="Home">Home</MenuItem>
              <MenuItem value="Pabbly Connect">Pabbly Connect</MenuItem>
              <MenuItem value="Marketing">Pabbly Email Marketing</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <Box
          sx={{
            px: 3,
            pb: 3,
            mt: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleMove}
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
        </Box>
      </Box>
    </Dialog>
  );
}
