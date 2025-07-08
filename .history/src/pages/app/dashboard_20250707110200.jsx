import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import AppWelcome from 'src/components/AppWelcome/AppWelcome';
import FolderListBox from 'src/components/folder-box/folder-box';
import { StatsCard } from 'src/components/stats-cards/stats-cards';
import { PageHeader } from 'src/components/pageheader/page-header';
import BulkVerifyEmailModal from 'src/components/bulk-email/bulk-email';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single';

import { UserListView } from './dashboard-list/user-list-view';

const metadata = { title: `Pabbly Chatflow | Dashboard ` };
const { item, style } = ListItem;
export default function Dashboard() {
  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBulkModal, setOpenBulkModal] = useState(false);

  return (
    <DashboardContent maxWidth="xl">
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <Box>
        {/* Header Section */}
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
          onSingleEmailClick={() => setOpenSingleModal(true)}
          onBulkEmailClick={() => setOpenBulkModal(true)}
        />

        {/* Email Verification Modals */}
        <VerifySingleEmailModal open={openSingleModal} onClose={() => setOpenSingleModal(false)} />
        <BulkVerifyEmailModal open={openBulkModal} onClose={() => setOpenBulkModal(false)} />

        {/* Stats Cards */}
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={4}>
            <StatsCard
              heading="Email Credits Consumed"
              total={32}
              icon_name="consumed 1.svg"
              bg_gradient="#10CBF3"
              tooltip_title="Number of emails consumed by your account."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard
              heading="Email Credits Remaining"
              total={9968}
              icon_name="Renaming.svg"
              bg_gradient="#1D88FA"
              tooltip_title="Number of emails credits remaining in your account."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard
              heading="Total Number of Email Lists"
              total={100}
              icon_name="email.svg"
              bg_gradient="#28A745"
              tooltip_title="Number of email lists uploaded in your account."
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mt: 3.5 }}>
            <FolderListBox />
          </Box>
          <Box>
            <Box>
              <AppWelcome
                points={[
                  'Ensure all email addresses are in a single column.',
                  'Email addresses must start in the first row immediately after the header.',
                  'Remove any extra spaces or lines before and after each email address.',
                  'The email address column should be the last column in the file.',
                  'Ensure the file size does not exceed 10MB.',
                  'The file can contain a maximum of 300,000 email addresses.',
                  'Verified email lists are automatically deleted after 60 days. Ensure you download the reports for verified email lists within that duration to retain access. Learn more.',
                ]}
                img="../assets/images/email-verification-dashboard.jpg"
                videoUrl="https://www.youtube.com/embed/MIcaDmC_ngM?si=59KJGafDBWovt9El"
                buttonTitle="Verify Email"
              />
            </Box>
            <Box>
              <UserListView />
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardContent>
  );
}
