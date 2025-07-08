import { Box, Link, Modal, Typography } from '@mui/material';

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
        {/* heading */}
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

        {/* 3 boxes */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            mt: 2,
          }}
        >
          {['All Emails', 'Deliverable Emails', 'Undeliverable Emails'].map((label, idx) => (
            <Box
              key={idx}
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
              <Typography>{label}</Typography>
            </Box>
          ))}
        </Box>

        {/* note below boxes */}
        <Box sx={{ mt: 2, px: 2 }}>
          <Typography
            sx={{
              fontSize: '14px',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            You can download email verification results by selecting one of the three tabs: All
            Emails, Deliverable Emails, or Undeliverable Emails. Simply choose a tab and click
            &quot;Download CSV&quot; to obtain the report.
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              color: 'text.secondary',
              mt: 1,
            }}
          >
            Note: The verified list and verification reports will be automatically deleted after 15
            days.&nbsp;
            <Link href="#" underline="always" sx={{ color: 'primary.main', cursor: 'pointer' }}>
              Learn more
            </Link>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
