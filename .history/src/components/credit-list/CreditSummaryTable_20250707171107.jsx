import React from 'react';

import {
  Box,
  Chip,
  Card,
  Table,
  Paper,
  Stack,
  Button,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';

import { Iconify } from '../iconify';

const STATUS_MAP = {
  'Bulk Verification': { label: 'Bulk Verification', color: '#B71D18', bgcolor: '#FFE9D5' },
  'Single Verification': { label: 'Single Verification', color: '#B71D18', bgcolor: '#FFE9D5' },
  'Email Credits Purchased': {
    label: 'Email Credits Purchased',
    color: '#118D57',
    bgcolor: '#D3FCD2',
  },
};

const verificationLogs = [
  {
    type: 'Bulk Verification',
    date: 'Oct 23, 2024 17:45:32',
    summary: 'List 1',
    subSummary: 'Pabby Connect',
    credits: -9,
  },
  {
    type: 'Bulk Verification',
    date: 'Oct 23, 2024 17:45:32',
    summary: 'List 2',
    subSummary: 'Pabby Hook',
    credits: -7,
  },
  {
    type: 'Single Verification',
    date: 'Oct 23, 2024 17:45:32',
    summary: 'ankit.mandili@pabby.com',
    subSummary: 'Email address',
    credits: -1,
  },
  {
    type: 'Email Credits Purchased',
    date: 'Oct 23, 2024 17:45:32',
    summary: 'Email Credits Allotted',
    credits: 100,
  },
];

const CreditsSummaryTable = () => (
  <Card sx={{ width: '', bgcolor: 'white', borderRadius: 2, overflow: 'hidden', mt: 4 }}>
    {/* Header Section - Unchanged */}
    <Box sx={{ padding: '24px', borderBottom: '1px solid #E0E0E0' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1C252E' }}>
        Email Verification Logs
      </Typography>
      <Typography sx={{ fontSize: '14px', color: '#637381', mt: '4px' }}>
        View all email verification activities, including type, date, summary, and credit usage. Use
        filters or search to find specific logs.
      </Typography>
    </Box>

    {/* Search Bar + Filter Button - Unchanged */}
    <Box
      sx={{
        height: '94.56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '20px',
        borderBottom: '1px solid #E0E0E0',
        gap: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '54.6px',
          display: 'flex',
          alignItems: 'center',
          px: 2,
          border: '0.5px solid #C4CDD5',
          borderRadius: '8px',
          '&:hover': { border: '0.5px solid #000' },
          '&:focus-within': { border: '1px solid #000' },
        }}
      >
        <Iconify
          icon="iconamoon:search-bold"
          width={20}
          height={20}
          style={{ color: '#637381', marginRight: '8px' }}
        />
        <input
          type="text"
          placeholder="Search by email list name..."
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            height: '100%',
            fontSize: '14px',
            backgroundColor: 'transparent',
            color: '#637381',
          }}
        />
      </Box>

      <Button
        variant="soft"
        size="medium"
        sx={{
          bgcolor: '#fff',
          color: 'info.main',
          height: '54.6px',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          '&:hover': {
            bgcolor: '#f5f5f5',
          },
        }}
        startIcon={<Iconify icon="mdi:filter" sx={{ height: 20, width: 20 }} />}
      >
        Filter
      </Button>
    </Box>

    {/* Table - Updated to remove duplicate text */}
    <TableContainer component={Paper} sx={{ boxShadow: 'none', overflow: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F4F6F8', height: '57.8px' }}>
            <TableCell sx={{ p: '16px' }}>Status/Date</TableCell>
            <TableCell sx={{ p: '16px' }}>Verification Summary</TableCell>
            <TableCell sx={{ p: '16px', textAlign: 'right' }}>Credits</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {verificationLogs.map((log, idx) => (
            <TableRow key={idx} sx={{ height: '64px' }}>
              <TableCell sx={{ p: '16px' }}>
                <Stack spacing={1}>
                  <Chip
                    label={STATUS_MAP[log.type].label}
                    size="small"
                    sx={{
                      borderRadius: '6px',
                      fontWeight: 500,
                      bgcolor: STATUS_MAP[log.type].bgcolor,
                      color: STATUS_MAP[log.type].color,
                      width: 'fit-content',
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {log.date}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell sx={{ p: '16px' }}>
                <Typography variant="body2">{log.summary}</Typography>
                {log.subSummary && (
                  <Typography variant="caption" color="text.secondary">
                    {log.subSummary}
                  </Typography>
                )}
              </TableCell>
              <TableCell sx={{ p: '16px', textAlign: 'right' }}>
                <Typography variant="body2" color="#1C252E">
                  {log.credits > 0 ? `+${log.credits}` : log.credits}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Pagination - Unchanged */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        px: 2,
        py: 1.5,
        borderTop: '1px solid #E0E0E0',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'right', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Rows per page: 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1-4 of 4
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default CreditsSummaryTable;
