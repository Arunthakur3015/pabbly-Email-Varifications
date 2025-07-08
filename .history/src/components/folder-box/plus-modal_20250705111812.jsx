import { Box, Dialog, Button, Divider, TextField, Typography, DialogContent } from '@mui/material';

import { useSnackbar } from 'src/components/snackbar/CustomSnackbar';

export default function CustomModal({
  open,
  onClose,
  title = 'Create Folder',
  inputLabel = 'Folder Name',
  placeholder = 'Enter folder name here.',
  helper = 'Enter the name of the folder here. Learn more',
  confirmText = 'Create Folder',
  cancelText = 'Cancel',
  value = '',
  setValue = () => {},
  onConfirm = () => {},
  width = 600,
  height = 280,
  spacing = {
    title: { pt: 3, pb: 2, px: 3 },
    input: { mt: 2, mb: 1 },
    helper: { mt: 1 },
    actions: { mt: 2, pb: 3, px: 3 },
  },
}) {
  const { showSnackbar } = useSnackbar();

  const isVerifyAction = title.toLowerCase().includes('verify');
  const isFocused = value !== '';
  const isValid = isVerifyAction ? value.includes('@') && value.includes('.') : value.trim() !== '';

  const handleAction = () => {
    if (isVerifyAction && !isValid) return;
    onConfirm?.();
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
        sx: {
          overflow: 'visible',
          borderRadius: 2,
          width,
          height,
        },
      }}
    >
      <Box sx={{ width: '100%', height: '100%' }}>
        {/* Title */}
        <Box sx={{ ...spacing.title }}>
          <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>

        <Divider sx={{ mx: spacing.title?.px || 3 }} />

        {/* Input Field */}
        <DialogContent sx={{ overflow: 'visible', px: spacing.title?.px || 3 }}>
          <TextField
            label={inputLabel}
            placeholder={placeholder}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            error={isVerifyAction && !isValid}
            helperText={
              isVerifyAction && !isValid
                ? `${inputLabel} is required`
                : ''
            }
            sx={{
              ...spacing.input,
              width: '100%',
              height: 54.56,
              '& .MuiInputBase-root': {
                height: '54.56px',
              },
            }}
          />

          {!isVerifyAction && helper && (
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', ...spacing.helper }}
            >
              {helper}
            </Typography>
          )}
        </DialogContent>

        {/* Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, ...spacing.actions }}>
          <Button
            variant="contained"
            onClick={handleAction}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': { backgroundColor: 'primary.dark' },
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
              '&:hover': { backgroundColor: 'grey.100' },
            }}
          >
            {cancelText}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
