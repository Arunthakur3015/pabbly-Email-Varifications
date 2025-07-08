import { useState, useEffect } from 'react';

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

import { AppCurrentDownload } from 'src/pages/app/dashboard-list/app-current-download';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

function VerificationInfo({ onClose }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
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
      <IconButton
        onClick={onClose}
        sx={{
          width: 32,
          height: 32,
          p: 0,
          bgcolor: 'transparent',
          color: '#637381',
          '&:hover': { bgcolor: '#DFE3E8' },
        }}
      >
        <Iconify icon="akar-icons:cross" width={20} height={20} />
      </IconButton>
    </Box>
  );
}

function VerificationProgress({ listName, onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 7000; // 7s
    const steps = duration / 50; // 50ms steps
    const increment = 100 / steps;

    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        onComplete();
      }
      setProgress(Math.round(current));
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 2,
        mb: 3,
        overflow: 'hidden',
        border: '1px solid #E0E0E0',
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 1.5,
          borderBottom: '1px solid #E0E0E0',
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {listName}
      </Box>

      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 1, fontWeight: 500 }}>Email Verification in Progress</Box>
        <Box
          sx={{
            width: '100%',
            height: 8,
            backgroundColor: '#E0E0E0',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: '#4CAF50',
              transition: 'width 0.2s linear',
            }}
          />
        </Box>
        <Box mt={0.5} textAlign="right">
          {progress}%
        </Box>
      </Box>
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
  const [selectedListName, setSelectedListName] = useState('');
  const [verificationDone, setVerificationDone] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('');

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

  const handleButtonClick = (label, listName) => {
    if (label === 'Start Verification') {
      setButtonLabel('Verification In Progress');
      setDrawerType('progress');
      setSelectedListName(listName);
      setDrawerOpen(true);
      setVerificationDone(false);
    } else if (
      label === 'Uploading' ||
      label === 'Download Report' ||
      label === 'Verification In Progress'
    ) {
      setDrawerType('chart');
      setSelectedListName(listName);
      setDrawerOpen(true);
      setVerificationDone(true);
    }
  };

  const handleCompleteVerification = () => {
    setVerificationDone(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setDrawerType('');
    setSelectedListName('');
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
            onClick={() =>
              handleButtonClick(
                buttonrow[buttonRowabc % buttonrow.length],
                Listnumber[userTableIndex % Listnumber.length]
              )
            }
          >
            {buttonrow[buttonRowabc % buttonrow.length] === 'Start Verification'
              ? buttonLabel || 'Start Verification'
              : buttonrow[buttonRowabc % buttonrow.length]}
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
        <VerificationInfo onClose={handleCloseDrawer} />

        <Box mt={4}>
          {!verificationDone ? (
            <VerificationProgress
              listName={selectedListName}
              onComplete={handleCompleteVerification}
            />
          ) : (
            <AppCurrentDownload
              listName={selectedListName}
              chart={{
                series: [
                  { label: 'Valid', value: 354 },
                  { label: 'Invalid', value: 123 },
                  { label: 'Disposable', value: 88 },
                  { label: 'Catch-All', value: 44 },
                ],
                colors: [],
                options: {},
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            width: '100%', // fix aligned
            bgcolor: '#FFF5CC',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1.5,
            px: '24px',
            py: '6px',
            mt: 2,
            borderRadius: 1,
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{ mt: '4px' }}>
            <Iconify icon="ic:round-warning" width="20px" height="20px" color="#FFAB00" />
          </Box>
          <Box sx={{ fontSize: '13px', lineHeight: 1.5, color: '#8A5719' }}>
            Verified email lists are automatically deleted after 60 days. Ensure you download the
            reports for verified email lists within that duration to retain access.
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
