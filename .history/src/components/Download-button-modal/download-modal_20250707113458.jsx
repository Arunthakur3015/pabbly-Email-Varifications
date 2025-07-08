import { useState } from 'react';

import { Box, Typography } from '@mui/material';

export default function DownloadModalContent() {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
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
        <Typography fontWeight={700} fontSize="0.875rem">
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
        <Typography fontWeight={700} fontSize="0.875rem">
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
        <Typography fontWeight={700} fontSize="0.875rem">
          Undeliverable Emails
        </Typography>
      </Box>
    </Box>
  );
}
