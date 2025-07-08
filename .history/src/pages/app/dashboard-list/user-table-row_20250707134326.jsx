// UserTableRow.js (ya jo bhi tera file hai)
import { useState, useEffect } from 'react';
import {
  Box,
  TableRow,
  TableCell,
  Checkbox,
  Button,
  Stack,
  IconButton,
  MenuItem,
  MenuList,
  Drawer,
} from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useBoolean } from 'src/hooks/use-boolean';
import Verification from 'src/components/verification'; // tera naya verification drawer

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

  const [verificationDrawerOpen, setVerificationDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const Listnumber = ['List 1', 'List 2', 'List 3', 'List 4', 'List 5'];
  const buttonrow = [
    'Uploading',
    'Download Report',
    'Start Verification',
    'Verification In Progress',
    'Download Report',
  ];

  const handleButtonClick = (label) => {
    if (label === 'Start Verification') {
      startVerificationProgress();
    } else if (
      label === 'Uploading' ||
      label === 'Download Report' ||
      label === 'Verification In Progress'
    ) {
      setVerificationDrawerOpen(true);
    }
  };

  const startVerificationProgress = () => {
    setProgress(0); // reset to 0
    const duration = Math.random() * 8000 + 7000; // 7–15s
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setVerificationDrawerOpen(true); // 100% hone par drawer khol do
      }
      setProgress(Math.round(current));
    }, intervalTime);
  };

  return (
    <>
      <TableRow hover selected={selected} aria-checked={selected} tabIndex={-1}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
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
        </TableCell>

        <TableCell>
          {/* ... tera baki emailConsumed wagaira ... */}
        </TableCell>

        <TableCell align="right" sx={{ width: 267 }}>
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

      {/* verification drawer with progress */}
      <Verification
        open={verificationDrawerOpen}
        onClose={() => setVerificationDrawerOpen(false)}
        listName={Listnumber[userTableIndex % Listnumber.length]}
        progress={progress}
      />

      {/* popover / confirm dialog wagaira */}
      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
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
    </>
  );
}
