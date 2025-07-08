// src/components/bulkverify/bulk-modal.jsx

import {
  Box,
  Dialog,
  Select,
  Button,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { UploadBox } from 'src/components/uploadbox/upload-box'; // ✅ fix path as per your project

export default function BulkVerifyModal({ open, onClose }) {
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
            <InputLabel id="folder-label">Select Folder</InputLabel>
            <Select labelId="folder-label" label="Select Folder">
              <MenuItem value="folder1">Folder 1</MenuItem>
              <MenuItem value="folder2">Folder 2</MenuItem>
              <MenuItem value="folder3">Folder 3</MenuItem>
            </Select>
          </FormControl>

          <UploadBox />
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'flex-end', pt: 3 }}>
          <Button variant="contained" sx={{ mr: 1.5 }}>
            Verify
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
