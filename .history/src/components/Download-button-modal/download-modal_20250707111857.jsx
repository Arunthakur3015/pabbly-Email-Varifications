import { Box, Modal, Typography } from '@mui/material';

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
        {/* heading section */}
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

        {/* 3 boxes below heading */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            mt: 2,
          }}
        >
          {[1, 2, 3].map((num) => (
            <Box
              key={num}
              sx={{
                width: 178.68,
                height: 178.67,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
                backgroundColor: 'primary.lighter',
                fontWeight: 700,
                fontSize: '0.875rem',
                lineHeight: 1.7,
                textTransform: 'unset',
                cursor: 'pointer',
                userSelect: 'none',
                padding: 2,
                transition: 'all 250ms ease',
                '&:hover': {
                  boxShadow: 3,
                  backgroundColor: 'primary.light',
                },
              }}
            >
              <Typography>Box {num}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
}
