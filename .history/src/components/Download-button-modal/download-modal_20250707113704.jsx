import { useState } from 'react';

import { Box, Link, Modal, Button, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function DownloadModal({ open, onClose }) {
  const [selectedTab, setSelectedTab] = useState('all');

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
        {/* Heading */}
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

        {/* 3 Boxes */}
        <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
          {/* First Box */}
          <Box
            onClick={() => setSelectedTab('all')}
            sx={{
              width: 178.68,
              height: 178.67,
              border: '2px solid',
              borderColor: selectedTab === 'all' ? 'primary.main' : 'grey.300',
              backgroundColor: selectedTab === 'all' ? 'primary.lighter' : 'white',
              cursor: 'pointer',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: selectedTab === 'all' ? 'primary.lighter' : 'grey.100',
                borderColor: selectedTab === 'all' ? 'primary.main' : 'grey.400',
              },
            }}
          >
            <Typography fontWeight={700} fontSize="0.875rem" textAlign="center">
              All Emails Result
            </Typography>
          </Box>

          {/* Second Box */}
          <Box
            onClick={() => setSelectedTab('deliverable')}
            sx={{
              width: 178.68,
              height: 178.67,
              border: '2px solid',
              borderColor: selectedTab === 'deliverable' ? 'primary.main' : 'grey.300',
              backgroundColor: selectedTab === 'deliverable' ? 'primary.lighter' : 'white',
              cursor: 'pointer',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: selectedTab === 'deliverable' ? 'primary.lighter' : 'white',
                borderColor: selectedTab === 'deliverable' ? 'primary.main' : 'grey.300',
              },
            }}
          >
            <Typography fontWeight={700} fontSize="0.875rem" textAlign="center">
              Deliverable Emails
            </Typography>
          </Box>

          {/* Third Box */}
          <Box
            onClick={() => setSelectedTab('undeliverable')}
            sx={{
              width: 178.68,
              height: 178.67,
              border: '2px solid',
              borderColor: selectedTab === 'undeliverable' ? 'primary.main' : 'grey.300',
              backgroundColor: selectedTab === 'undeliverable' ? 'primary.lighter' : 'white',
              cursor: 'pointer',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: selectedTab === 'undeliverable' ? 'primary.lighter' : 'grey.100',
                borderColor: selectedTab === 'undeliverable' ? 'primary.main' : 'grey.400',
              },
            }}
          >
            <Typography fontWeight={700} fontSize="0.875rem" textAlign="center">
              Undeliverable Emails
            </Typography>
          </Box>
        </Box>

        {/* Description + Learn more */}
        <Box sx={{ px: 2, mt: 2 }}>
          <Typography fontSize="0.875rem" color="text.secondary">
            You can download email verification results by selecting one of the three tabs: All
            Emails, Deliverable Emails, or Undeliverable Emails. Simply choose a tab and click
            &quot;Download CSV&quot; to obtain the report.
            <br />
            <br />
            Note: The verified list and verification reports will be automatically deleted after 15
            days.{' '}
            <Link
              href="#"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                fontWeight: 500,
              }}
            >
              Learn more
            </Link>
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            px: 2,
            mt: 'auto',
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
