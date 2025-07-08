import { Box, Dialog, Button, Divider, Typography } from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function CustomModal({
  open,
  onClose,
  title = 'Create Folder',
  helper = 'Note that when a folder is deleted its email lists are moved to the home folder.',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  spacing = {
    title: { pt: 3, pb: 3, px: 3 },
    helper: { mt: 0.2, px: 3 },
    actions: { mt: 2, pb: 3, px: 3 },
  },
  onConfirm = () => {},
}) {
  const { showSnackbar } = useSnackbar();

  const handleDelete = () => {
    onConfirm();
    showSnackbar(`${confirmText} successfully!`);
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
          borderRadius: 2,
        },
      }}
    >
      <Box sx={{ width: 600, height: 220 }}>
        {/* Title */}
        <Box sx={{ ...spacing.title }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Divider sx={{ mx: 3 }} />

        {/* Helper Text */}
        <Typography
          fontSize="14px"
          color="text.secondary"
          sx={{
            ...spacing.helper,
            mt: 2,
            mb: 1,
          }}
        >
          {helper}
        </Typography>

        {/* Actions */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.8,
            ...spacing.actions,
          }}
        >
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
              borderColor: 'grey.500',
              color: 'text.primary',
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'grey.100',
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
