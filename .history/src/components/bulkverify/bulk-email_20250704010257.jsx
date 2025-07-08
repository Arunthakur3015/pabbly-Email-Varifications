// src/components/bulkverify/bulk-email.jsx

import { useState } from 'react';

import BulkVerifyModal from './bulk-modal';

export default function BulkEmail() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <>
      {/* Call this function from button/menu */}
      <BulkVerifyModal open={open} onClose={handleCloseModal} />
    </>
  );
}
