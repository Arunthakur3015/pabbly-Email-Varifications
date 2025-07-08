import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const USER_STATUS_OPTIONS = [
  { value: 'verified', label: 'Verifide' },
  { value: 'uploding', label: 'Uploding' },
  { value: 'processing', label: 'Processing' },
  { value: 'unverified', label: 'Unverified' },
];

export const _userList = [...Array(20)].map((_, index) => {
  const status = index % 4 === 0? 'verified' : 'unverified';
  return {
    id:_mock.id(index),
    orderNumber: `zzzzz(index),
  }
});
