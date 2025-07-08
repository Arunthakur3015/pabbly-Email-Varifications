import { useEffect, useRef } from 'react';
import {
  Box,
  Dialog,
  Button,
  Divider,
  TextField,
  Typography,
  DialogContent,
} from '@mui/material';
import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function CustomModal({
  open,
  onClose,
  title = 'Create Folder',
  inputLabel = 'Folder Name',
  placeholder = 'Enter folder name here.',
  helper = '',
  confirmText = 'Create Folder',
  cancelText = 'Cancel',
  value = '',
  setValue = () => {},
  onConfirm = () => {},
  spacing = {
    title: { pt: 3, pb: 2, px: 3 },
    input: { mt: 2, mb: 1 },
    helper: { mt: 0.5 },
    actions: { mt: 2, pb: 3, px: 3 },
  },
}) {
  const inputRef = useRef(null);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
        inputRef.current.select();
      }, 100);
    }
  }, [open]);

  const handleSubmit = () => {
    if (!value.trim()) return;

    onConfirm(); // custom logic (like renaming, creating folder)
    showSnackbar(`${confirmText} action completed successfully!`, 'success');
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
        sx: { overflow: 'visible', borderRadius: 2 },
      }}
    >
      <Box sx={{ width: 600 }}>
        <Box sx={{ ...spacing.title }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Divider sx={{ mx: 3 }} />

        <DialogContent sx={{ px: 3, py: 2, overflow: 'visible' }}>
          <TextField
            inputRef={inputRef}
            label={inputLabel}
            placeholder={placeholder}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              width: '100%',
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
              ...spacing.input,
            }}
          />

          {helper && (
            <Typography variant="body2" sx={{ color: 'text.secondary', ...spacing.helper }}>
              {helper}
            </Typography>
          )}
        </DialogContent>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            ...spacing.actions,
          }}
        >
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
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
