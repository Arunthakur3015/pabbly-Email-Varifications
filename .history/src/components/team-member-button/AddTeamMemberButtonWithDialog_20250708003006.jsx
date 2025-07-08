import React, { useState } from 'react';

import {
  Box,
  Stack,
  Button,
  Dialog,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Autocomplete,
  DialogContent,
  OutlinedInput,
} from '@mui/material';

const FOLDER_OPTIONS = [
  'Home',
  'About Us',
  'Services',
  'Contact',
  'Blog',
  'Careers',
  'Pricing',
  'FAQ',
  'Support',
  'Privacy Policy',
];

const ACCESS_OPTIONS = ['Read Access', 'Write Access'];

const AddTeamMemberButtonWithDialog = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);

  const [folder, setFolder] = useState(null);
  const [folderFocused, setFolderFocused] = useState(false);

  const [accessType, setAccessType] = useState(null);
  const [accessFocused, setAccessFocused] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) {
      setError(true);
      return;
    }
    const folderText = folder ? ` in folder "${folder}"` : '';
    const accessText = accessType ? ` with "${accessType}"` : '';
    alert(`Team member added: ${input}${folderText}${accessText}`);
    setError(false);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          maxWidth: '188px',
          height: '48px',
          backgroundColor: 'white',
          color: 'primary.main',
          '&:hover': { backgroundColor: '#ECF6FE' },
          justifyContent: 'flex-start',
          pl: 1.5,
          whiteSpace: 'normal',
          wordBreak: 'break-word',
          lineHeight: 1.2,
        }}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10.25v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5a.75.75 0 0 1 1.5 0"
            />
          </svg>
        }
      >
        Add Team Member
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogContent sx={{ p: 0, height: '645px', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              maxHeight: '645px',
              overflow: 'hidden',
            }}
          >
            {/* Sticky Header */}
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                backgroundColor: '#fff',
                borderBottom: '1px solid #e0e0e0',
                px: 2,
                py: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Add Team Member
              </Typography>
            </Box>

            {/* Scrollable Content */}
            <Box sx={{ flex: 1, overflowY: 'auto', px: 3, py: 3 }}>
              <FormControl fullWidth variant="outlined" error={error} sx={{ mb: 2 }}>
                <InputLabel
                  htmlFor="team-member-email"
                  shrink={focused || input !== ''}
                  sx={{ backgroundColor: '#fff', px: 0.5, mx: 0.5 }}
                >
                  Pabbly Account Email Address
                </InputLabel>

                <OutlinedInput
                  id="team-member-email"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (error) setError(false);
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder={focused ? 'sample@example.com' : ''}
                  label="Pabbly Account Email Address"
                  sx={{
                    transition: 'border-color 0.2s ease-in-out',
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                  }}
                />
              </FormControl>

              <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                Ensure that the email address is already registered with Pabbly.
              </Typography>

              <Autocomplete
                options={FOLDER_OPTIONS}
                value={folder}
                onChange={(event, newValue) => setFolder(newValue)}
                onFocus={() => setFolderFocused(true)}
                onBlur={() => setFolderFocused(false)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Folder"
                    placeholder={
                      folderFocused || folder ? 'Choose the folder this member will belong to.' : ''
                    }
                    variant="outlined"
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        transition: 'border-color 0.2s ease-in-out',
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                      },
                    }}
                  />
                )}
              />

              <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                Select folders to be shared. Use select all Folders to select all at once.
              </Typography>

              <Autocomplete
                options={ACCESS_OPTIONS}
                value={accessType}
                onChange={(event, newValue) => setAccessType(newValue)}
                onFocus={() => setAccessFocused(true)}
                onBlur={() => setAccessFocused(false)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Access Type"
                    placeholder={accessFocused || accessType ? 'Choose the level of access' : ''}
                    variant="outlined"
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        transition: 'border-color 0.2s ease-in-out',
                        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'black' },
                      },
                    }}
                  />
                )}
              />

              <Typography variant="caption" color="text.primary" display="block" mb={2}>
                Points To Remember
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                component="ul"
                sx={{
                  pl: 3,
                  lineHeight: 1.8,
                  mb:1,
                  listStyleType: 'disc',
                  '& li': {
                    display: 'list-item',
                    listStyleType: 'disc',
                  },
                }}
              >
                <li>You can share multiple folders with team members.</li>
                <li>
                  Team members can be granted either &apos;Write&apos; or &apos;Read&apos; access.
                </li>
                <li>
                  &apos;Write&apos; access allows uploading email lists, starting verification, and
                  downloading reports, but restricts folder and list management, while
                  &apos;Read&apos; access permits downloading reports only.
                </li>
                <li>
                  Team members do not have access to the &apos;Settings&apos; section, any billing
                  information, or the &apos;Trash&apos; folder.{' '}
                  <Box component="span" sx={{ color: '#078dee', cursor: 'pointer' }}>
                    Learn more
                  </Box>
                </li>
              </Typography>
            </Box>

            {/* Sticky Footer */}
            <Box
              sx={{
                position: 'sticky',
                bottom: 0,
                zIndex: 1,
                backgroundColor: '#fff',
                borderTop: '1px solid #e0e0e0',
                px: 2,
                py: 2,
              }}
            >
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ width: 64, height: 36 }}
                >
                  Add
                </Button>
                <Button variant="outlined" size="large" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTeamMemberButtonWithDialog;
