import { Modal, Box, Typography } from '@mui/material';

export default function DownloadModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 600,
          height: 513.46,
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 2,
          mx: 'auto',
          my: '10%',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* modal header */}
        <Box
          sx={{
            height: 60,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
          }}
        >
          <Typography variant="h6">Download Report</Typography>
        </Box>

        {/* dummy content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
          }}
        >
          <Typography>Modal content here...</Typography>
        </Box>
      </Box>
    </Modal>
  );
}
