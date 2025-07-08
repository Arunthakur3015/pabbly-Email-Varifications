import React from 'react';

import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Checkbox, TextField, Typography, IconButton } from '@mui/material';

export default function EmailListUI() {
  return (
    <Box
      sx={{
        width: 1086,
        height: 893.14,
        backgroundColor: '#fff',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Home Section */}
      <Box
        sx={{
          height: 110.44,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderBottom: '1px solid #E0E0E0',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h6">Home</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          Verify and manage all your uploaded email lists here.
        </Typography>
      </Box>

      {/* Filter Tabs */}
      <Box sx={{ height: 48, display: 'flex', alignItems: 'center', px: 3, gap: 2 }}>
        {['All', 'Verified', 'Processing', 'Uploading', 'Unverified'].map((tab, i) => (
          <Button key={i} variant="text" sx={{ fontWeight: 600 }}>
            {tab}
          </Button>
        ))}
      </Box>

      {/* Search & Actions */}
      <Box sx={{ height: 94.57, display: 'flex', alignItems: 'center', px: 3, gap: 2 }}>
        <TextField
          placeholder="Search by email list name..."
          sx={{ width: 811, height: 54.56 }}
          size="small"
        />
        <Button variant="outlined" sx={{ width: 155, height: 48 }}>
          Select Action
        </Button>
        <IconButton sx={{ width: 64, height: 48 }}>
          <RefreshIcon sx={{ width: 24, height: 24 }} />
        </IconButton>
      </Box>

      {/* Table Headers */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 3, py: 1 }}>
        <Checkbox sx={{ width: 36, height: 36 }} />
        <Box sx={{ width: 357.6, px: 2 }}>
          <Typography variant="subtitle2">Status/Name/Date</Typography>
        </Box>
        <Box sx={{ width: 362.08, px: 2 }}>
          <Typography variant="subtitle2">Number of Emails/Credits Consumed</Typography>
        </Box>
        <Box sx={{ width: 267, px: 2, textAlign: 'right' }}>
          <Typography variant="subtitle2">Action</Typography>
        </Box>
      </Box>

      {/* List Row Example */}
      <Box
        sx={{
          height: 103.89,
          display: 'flex',
          alignItems: 'flex-start',
          px: 3,
          py: 1,
          bgcolor: '#F5F8FA',
        }}
      >
        <Checkbox sx={{ width: 36, height: 36, mt: 1 }} defaultChecked />
        <Box sx={{ width: 357.6, px: 2 }}>
          <Box
            sx={{
              bgcolor: '#F8C775',
              color: '#000',
              fontSize: 12,
              fontWeight: 700,
              px: 1,
              py: 0.5,
              borderRadius: 1,
              width: 70.46,
              textAlign: 'center',
            }}
          >
            Uploading
          </Box>
          <Typography variant="body1" fontWeight={600} mt={0.5}>
            List 1
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#637381' }}>Oct 23, 2024 17:45:32</Typography>
        </Box>
        <Box sx={{ width: 362.08, px: 2, display: 'flex', alignItems: 'center' }}>
          <Typography>Contains 128 Emails</Typography>
        </Box>
        <Box sx={{ width: 267, px: 2, textAlign: 'right' }}>
          <Button variant="outlined" sx={{ width: 93.99, height: 35.78 }}>
            Uploading
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: 3,
        }}
      >
        <Typography>Rows per page: 5 &nbsp; 1–5 of 5</Typography>
      </Box>
    </Box>
  );
}
