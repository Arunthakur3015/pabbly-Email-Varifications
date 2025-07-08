import React from 'react';

import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';

export default function FolderOptionsMenu({
  anchorEl,
  open,
  onClose,
  onRename,
  onShare,
  onDelete,
}) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          minWidth: 180,
          boxShadow: 3,
          borderRadius: 1.5,
        },
      }}
    >
      <MenuItem
        onClick={() => {
          onRename?.();
          onClose();
        }}
      >
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Rename" />
      </MenuItem>

      <MenuItem
        onClick={() => {
          onShare?.();
          onClose();
        }}
      >
        <ListItemIcon>
          <ShareIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Share" />
      </MenuItem>

      <MenuItem
        onClick={() => {
          onDelete?.();
          onClose();
        }}
        sx={{ color: 'error.main' }}
      >
        <ListItemIcon sx={{ color: 'error.main' }}>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
    </Menu>
  );
}
