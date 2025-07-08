import {
  Box,
  Dialog,
  Button,
  Typography,
  DialogContent,
} from '@mui/material';

export default function DeleteModal({
  open,
  onClose,
  title = 'Do you really want to delete the folder?',
  helper = 'Note that when a folder is deleted its email lists are moved to the home folder.',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  onConfirm = () => {},
}) {
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
      <Box sx={{ width: 600, height: 210 }}>
        {/* Title */}
        <Box sx={{ pt: 3, px: 3, pb: 1.5 }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        {/* Helper Text */}
        <DialogContent sx={{ px: 3, pt: 0, pb: 1.5 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {helper}
          </Typography>
        </DialogContent>

        {/* Actions */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            px: 3,
            pb: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            sx={{
              backgroundColor: '#D32F2F', // red
              color: '#fff',
              boxShadow: '0px 4px 10px rgba(211, 47, 47, 0.4)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#B71C1C',
              },
              px: 3,
              py: 1,
              fontWeight: 600,
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
