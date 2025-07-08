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
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import { AppCurrentDownload } from 'src/pages/app/dashboard-list/app-current-download';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// Top section inside Drawer
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
          '&:hover': {
            bgcolor: '#DFE3E8',
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
  const theme = useTheme();
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

  const handleButtonClick = (label) => {
    if (
      label === 'Uploading' ||
      label === 'Download Report' ||
      label === 'Verification In Progress'
    ) {
      setDrawerType(label);
      setDrawerOpen(true);
    }
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

        {/* Chart Component */}
        <Box mt={4}>
          <AppCurrentDownload
            title="Download Summary"
            subheader="Total Emails Verified"
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
          #FFAB00
          color:'#8A5719
        </Box>

        <Box
  sx={{
    width: '535px',
    height: '90px',
    bgcolor: '#FFF5CC',
    display: 'flex',
    alignItems: 'flex-start', // icon top pe chipkega
    gap: 1.5,
    px: '24px',
    py: '6px',
    mt: 2,
    borderRadius: 1,
    boxSizing: 'border-box',
  }}
>
  <Box sx={{ mt: '4px' }}>
    <Iconify icon="octicon:feed-plus-16" width="16px" height="16px" />
  </Box>
  <Box
    sx={{
      fontSize: '13px',
      lineHeight: 1.5,
      color:'#8A5719',
    }}
  >
    Verified email lists are automatically deleted after 60 days. Ensure you download
    the reports for verified email lists within that duration to retain access.
  </Box>
</Box>

      </Drawer>
    </>
  );
}
