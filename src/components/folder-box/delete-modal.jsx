import { Box, Dialog, Button, Typography } from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function DeleteModal({
  open,
  onClose,
  title = 'Do you really want to delete the folder?',
  helper = 'Note that when a folder is deleted its email lists are moved to the home folder.',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  onConfirm = () => {},
}) {
  const { showSnackbar } = useSnackbar();

  const handleDelete = () => {
    showSnackbar('Folder deleted successfully!');
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
          width: 444,
          height: 196,
          borderRadius: 3,
          boxShadow: 24,
          px: 3,
          py: 3,
        },
      }}
    >
      {/* Title */}
      <Typography fontWeight={600} fontSize={18} mb={1}>
        {title}
      </Typography>

      {/* Helper text */}
      <Typography fontSize={14} color="text.secondary" mb={3}>
        {helper}
      </Typography>

      {/* Actions */}
      <Box display="flex" justifyContent="flex-end" gap={1.5}>
        <Button
          variant="contained"
          onClick={handleDelete}
          sx={{
            backgroundColor: '#D32F2F',
            color: '#fff',
            borderRadius: '8px',
            px: 3,
            py: 1,
            fontWeight: 600,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              backgroundColor: '#B71C1C',
            },
          }}
        >
          {confirmText}
        </Button>

        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            borderRadius: '8px',
            borderColor: '#ccc',
            color: '#000',
            px: 3,
            py: 1,
            fontWeight: 600,
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: '#f4f6f8',
            },
          }}
        >
          {cancelText}
        </Button>
      </Box>
    </Dialog>
  );
}
