import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// Drawer content component as per teri requirement
function VerificationInfo() {
  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      {/* Left Text Section */}
      <Box>
        <Box sx={{ fontSize: 18, fontWeight: 600, mb: 0.5 }}>Verification Report</Box>
        <Box sx={{ fontSize: 16 }}>
          Check the full details of email verification here.{' '}
          <Box
            component="span"
            sx={{
              color: 'primary.main',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Learn more
          </Box>
        </Box>
      </Box>

      {/* Right Close Icon */}
      <IconButton
        sx={{
          width: 32,
          height: 32,
          p: 0,
          bgcolor: 'transparent',
          color: '#637381',
          '&:hover': {
            bgcolor: '#637381', // light grey circle
          },
        }}
      >
        <Iconify icon="akar-icons:cross" width={20} height={20} />
      </IconButton>
    </Box>
  );
}

export function UserTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
  onMoveToFolder,
  userTableIndex,
  emailCredit,
  emailGreen,
  buttonRowabc,
}) {
  const confirm = useBoolean();
  const popover = usePopover();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState('');

  const Listnumber = ['List 1', 'List 2', 'List 3', 'List 4', 'List 5'];
  const emailConsumed = [
    'Contains 128 Emails',
    'Contains 65 Emails',
    'Contains 250 Emails',
    'Contains 65 Emails',
    'Contains 653343 Emails',
  ];
  const emailgreenline = [
    '',
    '65 Credit Consumed',
    '',
    '65 Credit Consumed',
    '653343 Credit Consumed',
  ];
  const buttonrow = [
    'Uploading',
    'Download Report',
    'Start Verification',
    'Verification In Progress',
    'Download Report',
  ];

  // Button click handler
  const handleButtonClick = (label) => {
    if (
      label === 'Uploading' ||
      label === 'Download Report' ||
      label === 'Verification In Progress'
    ) {
      setDrawerType(label);
      setDrawerOpen(true);
    }
    // 'Start Verification' logic baad me daal sakta hai
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setDrawerType('');
  };

  return (
    <>
      <TableRow hover selected={selected} aria-checked={selected} tabIndex={-1}>
        <TableCell padding="checkbox">
          <Checkbox id={row.id} checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Label
            variant="soft"
            color={
              (row.status === 'Verified' && 'success') ||
              (row.status === 'Processing' && 'info') ||
              (row.status === 'Uploading' && 'warning') ||
              (row.status === 'Unverified' && 'error') ||
              'default'
            }
          >
            {row.status}
          </Label>
          <Box color="inherit" onClick={onEditRow} sx={{ cursor: 'pointer' }}>
            {Listnumber[userTableIndex % Listnumber.length]}
          </Box>
          <Box component="span" sx={{ color: 'text.disabled' }}>
            Oct 23, 2024 17:45:35
          </Box>
        </TableCell>

        <TableCell>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack sx={{ typography: 'body2', flex: '1 1 auto', alignItems: 'flex-start' }}>
              <Box color="inherit" onClick={onEditRow} sx={{ cursor: 'pointer', fontSize: '14px' }}>
                {emailConsumed[emailCredit % emailConsumed.length]}
              </Box>
              <Box component="span" sx={{ color: '#22C55E', fontSize: '14px' }}>
                {emailgreenline[emailGreen % emailgreenline.length]}
              </Box>
            </Stack>
          </Stack>
        </TableCell>

        <TableCell align="right" sx={{ width: 267, pr: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleButtonClick(buttonrow[buttonRowabc % buttonrow.length])}
          >
            {buttonrow[buttonRowabc % buttonrow.length]}
          </Button>
        </TableCell>

        <TableCell sx={{ width: 52 }}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>

      {/* Popover Menu */}
      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            onMoveToFolder();
          }}
        >
          <Iconify icon="fluent:folder-swap-24-filled" />
          Move to folder
        </MenuItem>

        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>

      {/* Confirm Dialog */}
      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: 600,
            height: '100%',
            p: 3,
          },
        }}
      >
        <VerificationInfo />
      </Drawer>
    </>
  );
}
