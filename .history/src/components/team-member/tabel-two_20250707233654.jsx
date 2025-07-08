import React, { useState } from 'react';

import {
  Box,
  Card,
  Menu,
  Table,
  Paper,
  Button,
  TableRow,
  Checkbox,
  MenuItem,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  IconButton,
  TableContainer,
} from '@mui/material';

import { Iconify } from '../iconify';
import 

const rows = [
  {
    date: 'Jul 06, 2025 17:56:19',
    email: 'neeraj.agarwal@pabbly.com',
    company: 'Company A Folder',
    permission: 'Write Access',
  },
  {
    date: 'Jul 05, 2025 17:56:19',
    email: 'hardik.pradhan@pabbly.com',
    company: 'Company B',
    permission: 'Read Access',
  },
  {
    date: 'Jul 04, 2025 17:56:19',
    email: 'neeraj.agarwal@pabbly.com',
    company: 'Company B sub folder',
    permission: 'Read Access',
  },
  {
    date: 'Jul 03, 2025 17:56:19',
    email: 'nikhil.patel@pabbly.com',
    company: 'Client B',
    permission: 'Write Access',
  },
  {
    date: 'Jul 02, 2025 17:56:19',
    email: 'rajendra.jatav@pabbly.com',
    company: 'Parent Folder',
    permission: 'Read Access',
  },
];

const TeamMemberTableSecond = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [openAddMember, setOpenAddMember] = useState(false);

  const isMenuOpen = Boolean(anchorEl);

  const handleSelectAll = (event) => {
    setSelectedRows(event.target.checked ? rows.map((_, index) => index) : []);
  };

  const handleSelectRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleUpdateAccess = () => {
    setOpenAddMember(true);
    handleMenuClose();
  };

  return (
    <>
      <Card
        sx={{ width: '1352.8px', bgcolor: 'white', borderRadius: 2, overflow: 'hidden', mt: 4 }}
      >
        {/* Header Section */}
        <Box sx={{ padding: '24px', borderBottom: '1px solid #E0E0E0' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#1C252E' }}>
            Folders Shared With You
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#637381', mt: '4px' }}>
            Access and manage folders shared with you. View shared details, permission types, and
            access folders easily.
          </Typography>
        </Box>

        {/* Search Bar + Filter */}
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
              placeholder="Search by email..."
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

        {/* Table */}
        <TableContainer component={Paper} sx={{ boxShadow: 'none', overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#F4F6F8', height: '57.8px' }}>
                <TableCell padding="checkbox" sx={{ pl: 2 }}>
                  <Checkbox
                    size="small"
                    checked={selectedRows.length === rows.length}
                    onChange={handleSelectAll}
                    sx={{ width: 20, height: 20 }}
                  />
                </TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Shared On</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Folders Shared By</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600 }}>Permission Type</TableCell>
                <TableCell sx={{ color: '#637381', fontWeight: 600, verticalAlign: 'middle' }}>
                  Access Folder
                </TableCell>
                <TableCell sx={{ width: 48 }} /> {/* Empty cell for spacing */}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    height: '64px',
                    '&:hover': {
                      backgroundColor: '#F4F6F8',
                    },
                  }}
                >
                  <TableCell padding="checkbox" sx={{ pl: 2 }}>
                    <Checkbox
                      size="small"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleSelectRow(index)}
                      sx={{ width: 20, height: 20 }}
                    />
                  </TableCell>

                  <TableCell>{row.date}</TableCell>

                  <TableCell>
                    <Typography sx={{ fontSize: 14 }}>{row.email}</Typography>
                    <Typography variant="caption" sx={{ color: '#919EAB' }}>
                      {row.company}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography sx={{ fontSize: 14 }}>{row.permission}</Typography>
                  </TableCell>

                  <TableCell
                    sx={{
                      verticalAlign: 'middle',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start', // ← LEFT aligned now
                      height: '64px',
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#078dee',
                        borderColor: '#078dee',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '14px',
                        px: 2,
                        py: 0.5,
                        borderRadius: '8px',
                        mr: 1,
                      }}
                    >
                      Access Now
                    </Button>
                  </TableCell>

                  <TableCell sx={{ width: 48 }}>
                    <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                      <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
                    </IconButton>
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
          <Box sx={{ display: 'flex', alignItems: 'right', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Rows per page: 5
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1–5 of 5
            </Typography>
          </Box>
        </Box>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ sx: { width: 180 } }}
        >
          <MenuItem onClick={handleUpdateAccess} sx={{ color: '#1C252E' }}>
            <Iconify icon="solar:pen-bold" width={18} height={18} style={{ marginRight: 8 }} />
            Update Access
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
            <Iconify
              icon="material-symbols:delete-rounded"
              width={18}
              height={18}
              style={{ marginRight: 8 }}
            />
            Remove Access
          </MenuItem>
        </Menu>
      </Card>

      {/* Overlay Modal for AddTeamMember */}
      <OverlayModal open={openAddMember} onClose={() => setOpenAddMember(false)}>
        <AddTeamMember />
      </OverlayModal>
    </>
  );
};

export default TeamMemberTableSecond;