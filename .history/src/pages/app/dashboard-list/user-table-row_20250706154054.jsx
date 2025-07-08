import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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

// ----------------------------------------------------------------------

export function UserTableRow({
  row,
  selected,
  onEditRow,
  onSelectRow,
  onDeleteRow,
  userTableIndex,
  emailCredit,
  emailGreen,
  buttonRowabc,
}) {
  const confirm = useBoolean();

  const popover = usePopover();

  const quickEdit = useBoolean();

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

  return (
    <>
      <TableRow hover selected={selected} aria-checked={selected} tabIndex={-1}>
        <TableCell padding="checkbox">
          <Checkbox id={row.id} checked={selected} onClick={onSelectRow} />
        </TableCell>
        <TableCell>
          <Label
                            variant={
                              ((tab.value === 'all' || tab.value === filters.state.status) && 'filled') ||
                              'soft'
                            }
                            color={
                              (tab.value === 'Verified' && 'success') ||
                              (tab.value === 'Processing' && 'warning') ||
                              (tab.value === 'Uploading' && 'warning') ||
                              (tab.value === 'Unverified' && 'error') ||
                              'default'
                            }
                          >
                            {['Verified', 'Processing', 'Uploading', 'Unverified'].includes(tab.value)
                              ? tableData.filter((user) => user.status === tab.value).length
                              : tableData.length}
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

        <TableCell width="267px">
          <Box>
            <Button variant="outlined" color="primary">
              {buttonrow[buttonRowabc % buttonrow.length]}
            </Button>
          </Box>
        </TableCell>

        <TableCell>
          <Stack direction="row" alignItems="center">
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

          <MenuItem
            onClick={() => {
              onEditRow();
              popover.onClose();
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
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
