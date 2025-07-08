import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const USER_STATUS_OPTIONS = [
  { value: 'verified', label: 'Verifide' },
  { value: 'uploding', label: 'Uploding' },
  { value: 'processing', label: 'Processing' },
  { value: 'unverified', label: 'Unverified' },
];

export const _userList = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  isVerified: _mock.boolean(index),
  status:
    (index % 2 && 'Uploading') || (index % 3 && 'Processing') || (index % 4 && 'Unverified') || 'Verified',
}));
