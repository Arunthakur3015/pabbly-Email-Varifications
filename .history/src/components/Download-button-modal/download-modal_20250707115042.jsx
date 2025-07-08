import { useState } from 'react';

import { Box, Link, Modal, Button, Tooltip, Typography, ButtonBase } from '@mui/material';

export default function DownloadModal({ open, onClose }) {
  const [selectedTab, setSelectedTab] = useState('');

  const boxes = [
    { key: 'all', label: 'All Emails Result', tooltip: 'Download all emails list' },
    { key: 'deliverable', label: 'Deliverable Emails', tooltip: 'Download deliverable emails' },
    {
      key: 'undeliverable',
      label: 'Undeliverable Emails',
      tooltip: 'Download undeliverable emails',
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 600,
          height: 513.46,
          bgcolor: 'white',
          p: 2,
          borderRadius: 2,
          boxShadow: 24,
          mx: 'auto',
          my: '5%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* heading box */}
        <Box
          sx={{
            height: 60,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Typography fontWeight={700} fontSize="1rem">
            Download Verification Report
          </Typography>
        </Box>

        {/* 3 clickable boxes */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            justifyContent: 'center',
          }}
        >
          {boxes.map((item) => (
            <Tooltip key={item.key} title={item.tooltip} placement="top" arrow>
              <ButtonBase
                onClick={() => setSelectedTab(item.key)}
                sx={{
                  width: 178.68,
                  height: 178.67,
                  border: selectedTab === item.key ? '2px solid' : '1px solid',
                  borderColor: selectedTab === item.key ? 'primary.main' : 'black',
                  backgroundColor: selectedTab === item.key ? '#61F3F3' : 'white',
                  borderRadius: '8px',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: selectedTab === item.key ? '#61F3F3' : 'grey.100',
                    borderColor: selectedTab === item.key ? 'primary.main' : 'black',
                  },
                }}
              >
                {item.label}
              </ButtonBase>
            </Tooltip>
          ))}
        </Box>

        {/* note text */}
        <Box sx={{ px: 2, mt: 2 }}>
          <Typography fontSize="0.875rem" color="text.secondary">
            You can download email verification results by selecting one of the three tabs: All
            Emails, Deliverable Emails, or Undeliverable Emails. Simply choose a tab and click
            Download CSV to obtain the report.
            <br />
            <br />
            <strong>Note:</strong> The verified list and verification reports will be automatically
            deleted after 15 days.{' '}
            <Link href="#" underline="always" sx={{ color: 'primary.main', cursor: 'pointer' }}>
              Learn more
            </Link>
          </Typography>
        </Box>

        {/* buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            mt: 'auto',
            pr: 2,
            pb: 2,
          }}
        >
          <Button variant="outlined" color="primary">
            Download CSV
          </Button>
          <Button
            variant="outlined"
            sx={{ color: 'black', borderColor: 'black' }}
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
