import { _mock } from './_mock';

// ----------------------------------------------------------------------
export const _userLists = [
  {
    id: _mock.id(0),
    name: _mock.fullName(0),
    status: 'Unverified',
    isVerified: false,
  },
  {
    id: _mock.id(1),
    name: _mock.fullName(1),
    status: 'Unverified',
    isVerified: false,
  },
  {
    id: _mock.id(2),
    name: _mock.fullName(2),
    status: 'Verified',
    isVerified: true,
  },
  {
    id: _mock.id(3),
    name: _mock.fullName(3),
    status: 'Uploading',
    isVerified: false,
  },
  {
    id: _mock.id(4),
    name: _mock.fullName(4),
    status: 'Processing',
    isVerified: false,
  },
];
export const USER_STATUS_OPTIONS = [
  { value: 'verified', label: 'Verifide' },
  { value: 'uploading', label: 'Uploding' },
  { value: 'processing', label: 'Processing' },
  { value: 'unverified', label: 'Unverified' },
];

export const _userList = [...Array(5)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  isVerified: _mock.boolean(index), 
  status:
    (index % 2 && 'Uploading') || (index % 3 && 'Processing') || (index % 4 && 'Unverified') || 'Verified',
}));