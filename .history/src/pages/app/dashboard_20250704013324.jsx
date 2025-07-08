import { useState } from 'react';

import Box from '@mui/material/Box';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifyEmailModal from 'src/components/';

export default function Dashboard() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);
  const [openBulkEmailModal, setOpenBulkEmailModal] = useState(false);

  return (
    <Box sx={{ pt: 1.5, px: 5 }}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={() => setOpenSingleEmailModal(true)}
        onBulkEmailClick={() => setOpenBulkEmailModal(true)}
      />

      {/* For Single Email */}
      <VerifyEmailModal
        open={openSingleEmailModal}
        onClose={() => setOpenSingleEmailModal(false)}
        title="Verify Single Email"
        showEmailInput
      />

      {/* For Bulk Email */}
      <VerifyEmailModal
        open={openBulkEmailModal}
        onClose={() => setOpenBulkEmailModal(false)}
        title="Verify Bulk Emails"
        showFolderSelect
        showUploadBox
      />
    </Box>
  );
}
