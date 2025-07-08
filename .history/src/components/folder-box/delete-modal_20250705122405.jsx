import { Box, Dialog, Button, Typography } from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function DeleteModal({
  open,
  onClose,
  title = 'Are you sure you want to delete?',
  helper = 'Deleting this item cannot be undone.',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  onConfirm = () => {},
}) {
  const { showSnackbar } = useSnackbar();

  const handleDelete = () => {
    onConfirm(); // update folder list
    showSnackbar('Folder deleted successfully!');
    onClose(); // close modal
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          overflow: 'visible',
          borderRadius: 2,
        },
      }}
    >
      <Box sx={{ width: 444, height: 196, p: 3 }}>
        <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          {helper}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
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
              borderColor: 'grey.300',
              color: 'text.primary',
              backgroundColor: '#fff',
              borderRadius: '8px',
              px: 3,
              py: 1,
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#F5F5F5',
              },
            }}
          >
            {cancelText}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
