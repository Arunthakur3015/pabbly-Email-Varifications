// ----------------------------------------------------------------------

export const USER_STATUS_OPTIONS = [
  { value: 'verified', label: 'Verified' },
  { value: 'uploading', label: 'Uploading' },
  { value: 'processing', label: 'Processing' },
  { value: 'unverified', label: 'Unverified' },
];

// ----------------------------------------------------------------------

export const _userList = [
  {
    id: '1',
    name: 'User 1',
    isVerified: true,
    status: 'Verified',
  },
  {
    id: '2',
    name: 'User 2',
    isVerified: false,
    status: 'Processing',
  },
  {
    id: '3',
    name: 'User 3',
    isVerified: false,
    status: 'Uploading',
  },
  {
    id: '4',
    name: 'User 4',
    isVerified: false,
    status: 'Unverified',
  },
  {
    id: '5',
    name: 'User 5',
    isVerified: false,
    status: 'Unverified',
  },
];
