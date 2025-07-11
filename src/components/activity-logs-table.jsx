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

import { Iconify } from './iconify';

const STATUS_MAP = {
  Created: { label: 'Created', color: '#118D57', bgcolor: '#D3FCD2' },
  Updated: { label: 'Updated', color: '#B76E00', bgcolor: '#FFF5CC' },
  Deleted: { label: 'Deleted', color: '#B71D18', bgcolor: '#FFE9D5' },
};

const activityLogs = [
  {
    action: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Hardik Pradhan',
    email: 'hardik.pradhan@pabbly.com',
    section: 'Dashboard',
    type: 'USER',
    activityData: '67/64b1fb9e6371d99c28a37',
  },
  {
    action: 'Deleted',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'Dashboard',
    type: 'USER',
    activityData: '67/64b1fb9e6371d99c28a37',
  },
  {
    action: 'Created',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Nikhil Patel',
    email: 'nikhil.patel@pabbly.com',
    section: 'Dashboard',
    type: 'API',
    activityData: '67/64b1fb9e6371d99c28a37',
  },
  {
    action: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'Team Member',
    type: 'USER',
    activityData: '67/64b1fb9e6371d99c28a37',
  },
  {
    action: 'Updated',
    date: 'Oct 23, 2024 17:45:32',
    actor: 'Ankit Mandli',
    email: 'ankit.mandli@pabbly.com',
    section: 'API',
    type: 'USER',
    activityData: '67/64b1fb9e6371d99c28a37',
  },
];

const ActivityLogsTable = () => (
  <Card
    sx={{
      width: { xs: '100%', md: '1384.8px' },
      bgcolor: 'white',
      borderRadius: 2,
      overflow: 'hidden',
      mt: 4,
      mb:4
    }}
  >
    {/* Header Section with Filter Button */}
    <Box
      sx={{
        padding: '24px',
        borderBottom: '1px solid #E0E0E0',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: 2,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1C252E' }}>
          Activity Log
        </Typography>
        <Typography sx={{ fontSize: '14px', color: '#637381', mt: '4px' }}>
          Track all activities in your Pabbly Email Verification, including user actions and API
          requests. Monitor created, updated, and deleted actions to ensure transparency and
          security.
        </Typography>
      </Box>

      <Button
        variant="soft"
        size="medium"
        sx={{
          bgcolor: '#fff',
          color: 'info.main',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          whiteSpace: 'nowrap',
          '&:hover': {
            bgcolor: '#f5f5f5',
          },
        }}
        startIcon={<Iconify icon="mdi:filter" sx={{ height: 20, width: 20 }} />}
      >
        Filter
      </Button>
    </Box>

    {/* Table */}
    <TableContainer component={Paper} sx={{ boxShadow: 'none', overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#F4F6F8', height: '57.8px' }}>
            <TableCell sx={{ p: '16px' }}>Action/Date</TableCell>
            <TableCell sx={{ p: '16px' }}>Actor</TableCell>
            <TableCell sx={{ p: '16px' }}>Section/Source</TableCell>
            <TableCell sx={{ p: '16px', textAlign: 'right' }}>Activity Data</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {activityLogs.map((log, idx) => (
            <TableRow
              key={idx}
              sx={{
                height: '64px',
                '&:hover': {
                  backgroundColor: '#F4F6F8',
                },
              }}
            >
              <TableCell sx={{ p: '16px' }}>
                <Stack spacing={1}>
                  <Chip
                    label={STATUS_MAP[log.action].label}
                    size="small"
                    sx={{
                      borderRadius: '6px',
                      fontWeight: 500,
                      bgcolor: STATUS_MAP[log.action].bgcolor,
                      color: STATUS_MAP[log.action].color,
                      width: 'fit-content',
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {log.date}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell sx={{ p: '16px' }}>
                <Typography variant="body2" fontWeight={500}>
                  {log.actor}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {log.email}
                </Typography>
              </TableCell>
              <TableCell sx={{ p: '16px' }}>
                <Typography variant="body2">{log.section}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {log.type}
                </Typography>
              </TableCell>
              <TableCell sx={{ p: '16px', textAlign: 'right' }}>
                <Typography variant="body2" color="#078DEE">
                  {log.activityData}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Pagination */}
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Rows per page: 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1–5 of 5
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default ActivityLogsTable;