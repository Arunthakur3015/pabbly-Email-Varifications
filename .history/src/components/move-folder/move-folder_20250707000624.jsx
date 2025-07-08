import { useState } from 'react';

import {
  Box,
  Link,
  Dialog,
  Button,
  Select,
  Divider,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  DialogContent,
} from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function MoveFolderModal({ open, onClose, title = 'Move to Folder' }) {
  const [folder, setFolder] = useState('');
  const { showSnackbar } = useSnackbar();

  const handleVerify = () => {
    if (!folder) return;
    console.log({ folder });

    showSnackbar('Folder submitted successfully!');
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
      <Box sx={{ px: 3, pt: 3, pb: 2 }}>
        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
          {title}
        </Typography>

        <Divider sx={{ mt: 2, mb: 0 }} />

        <DialogContent sx={{ px: 0, py: 0, overflow: 'visible', mt: 2.5 }}>
          <FormControl fullWidth sx={{ position: 'relative' }}>
            <InputLabel id="folder-label">Select Folder</InputLabel>
            <Select
              labelId="folder-label"
              id="folder-select"
              value={folder}
              label="Select Folder"
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

          {/* ✅ Instruction Line with Learn more */}
          <Typography variant="body2" sx={{ pl: 1.8, mt: 1, color: 'text.secondary', fontSize: 13 }}>
            Select the folder where you want to move the list.{' '}
            <Link href="#" underline="always" color="primary">
              Learn more
            </Link>
          </Typography>
        </DialogContent>

        <Box
          sx={{
            mt: 3,
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
