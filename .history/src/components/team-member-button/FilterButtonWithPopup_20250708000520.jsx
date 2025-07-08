import React, { useState } from 'react';

import { Box, Stack, Button, Select, Popover, Divider, MenuItem, Typography } from '@mui/material';

export default function FilterButtonWithPopup({ onApplyFilters }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [permissionType, setPermissionType] = useState('');
  const [sharedFolder, setSharedFolder] = useState('');
  const [filterApplied, setFilterApplied] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApplyFilter = () => {
    const appliedFilters = {
      permissionType,
      sharedFolder,
    };

    console.log('Applied Filters:', appliedFilters);

    if (onApplyFilters) {
      onApplyFilters(appliedFilters);
    }

    setFilterApplied(true);
    handleClose();
  };

  const handleResetFilter = () => {
    setPermissionType('');
    setSharedFolder('');
    setFilterApplied(false);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {/* Main filter button */}
      <Button
        variant="contained"
        onClick={filterApplied ? handleResetFilter : handleOpen}
        sx={{
          width: filterApplied ? '180px' : '104px',
          height: '48px',
          backgroundColor: filterApplied ? '#2196f3' : 'white',
          color: filterApplied ? 'white' : 'primary.main',
          '&:hover': {
            backgroundColor: filterApplied ? '#1976d2' : '#ECF6FE',
          },
          pl: 1.5,
          pr: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          whiteSpace: 'nowrap',
          textTransform: 'none',
        }}
      >
        {filterApplied ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 'bold' }}>
              Filter Applied
            </Typography>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="white"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.42L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              whiteSpace: 'nowrap',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z" />
            </svg>
            Filter
          </Box>
        )}
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            p: '32px',
            width: '658px',
            height: '263px',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Filter Action
          </Typography>

          <Divider
            sx={{
              borderStyle: 'dashed',
              borderColor: '#e8e8ea',
              mb: 2,
              width: '100%',
              maxWidth: '594px', // 658 - (32*2 padding) = 594
            }}
          />

          <Stack spacing={2}>
            {/* Filter 1 */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="subtitle2" sx={{ minWidth: 160 }}>
                Permission Type:
              </Typography>
              <Box
                sx={{
                  height: '38px',
                  width: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #ccc',
                  borderRadius: 1,
                  color: 'text.secondary',
                  fontSize: '14px',
                }}
              >
                equal to
              </Box>
              <Select
                size="small"
                sx={{
                  height: '38px',
                  width: '222px',
                }}
                value={permissionType}
                onChange={(e) => setPermissionType(e.target.value)}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="read">Read Access</MenuItem>
                <MenuItem value="write">Write Access</MenuItem>
              </Select>
            </Stack>

            {/* Filter 2 */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="subtitle2" sx={{ minWidth: 160 }}>
                Folder Shared:
              </Typography>
              <Box
                sx={{
                  height: '38px',
                  width: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #ccc',
                  borderRadius: 1,
                  color: 'text.secondary',
                  fontSize: '14px',
                }}
              >
                equal to
              </Box>
              <Select
                size="small"
                sx={{
                  height: '38px',
                  width: '222px',
                }}
                value={sharedFolder}
                onChange={(e) => setSharedFolder(e.target.value)}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="folder1">Folder 1</MenuItem>
                <MenuItem value="folder2">Folder 2</MenuItem>
              </Select>
            </Stack>

            <Divider
              sx={{
                borderStyle: 'dashed',
                borderColor: '#e8e8ea',
                mt: 1,
                width: '100%',
                maxWidth: '594px',
              }}
            />
          </Stack>
        </Box>

        {/* Apply Filter button aligned to right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleApplyFilter}
            disabled={!permissionType && !sharedFolder}
            sx={{
              width: '102px',
              whiteSpace: 'nowrap',
              height: '36px',
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            Apply Filter
          </Button>
        </Box>
      </Popover>
    </>
  );
}
