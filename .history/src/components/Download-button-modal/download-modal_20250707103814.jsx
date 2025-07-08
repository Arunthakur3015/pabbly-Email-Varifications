import { Box, Modal, Typography } from '@mui/material';

export default function DownloadModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 600,
          height: 513.46,
          bgcolor: 'background.paper',
          borderRadius: 1,
          p: 2, // 16px
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
        }}
      >
        {/* header box */}
        <Box
          sx={{
            height: 60,
            px: 2, // 16px
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Typography variant="h6">Download Report</Typography>
        </Box>

        {/* content area, for future work */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Your content goes here...</Typography>
        </Box>
      </Box>
    </Modal>
  );
}
