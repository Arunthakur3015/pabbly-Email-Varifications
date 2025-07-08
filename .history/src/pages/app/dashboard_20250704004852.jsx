import { useState } from 'react';

import Box from '@mui/material/Box';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single';
import BulkVerifyModal from 'src/components/bulkverify/bulk-verify';

export default function Dashboard() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);
  const [openBulkEmailModal, setOpenBulkEmailModal] = useState(false); // ✅ New

  const handleOpenSingleEmailModal = () => {
    setOpenSingleEmailModal(true);
  };

  const handleCloseSingleModal = () => {
    setOpenSingleEmailModal(false);
  };

  const handleOpenBulkModal = () => {
    setOpenBulkEmailModal(true);
  };

  const handleCloseBulkModal = () => {
    setOpenBulkEmailModal(false);
  };

  return (
    <Box sx={{ pt: 1.5, px: 5 }}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={handleOpenSingleEmailModal}
        onBulkEmailClick={handleOpenBulkModal} // ✅ Important
      />

      <VerifySingleEmailModal open={openSingleEmailModal} onClose={handleCloseSingleModal} />
      <BulkVerifyModal open={openBulkEmailModal} onClose={handleCloseBulkModal} /> {/* ✅ Add this */}
    </Box>
  );
}
