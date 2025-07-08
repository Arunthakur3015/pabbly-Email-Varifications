import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';

import { DashboardContent } from 'src/layouts/dashboard';

import VideoCard from 'src/components/video-card/video-card';
import PageHeader from 'src/components/page-header/page-header';
import SampleButton from 'src/components/drop-down-button/sample button';
import { LearnMoreTypography } from 'src/components/learn-more/learn-more';
import BigCardGetHelp from 'src/components/big-card-get-help/big-card-get-help';

// ----------------------------------------------------------------------

const metadata = { title: Get Help | Pabbly Verification Email };

export default function Page() {
  return (
    <DashboardContent maxWidth="xl">
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
      <PageHeader
        title="Help & Tutorials"
        description={
          <>
            Tell us about your problem, and we’ll find you a solution. <LearnMoreTypography />
          </>
        }
        buttonTitle="null"
        showButton={false}
      />
      <BigCardGetHelp />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
          mb: 3,
        }}
      >
        <h2>Tutorials</h2>
        <SampleButton />
      </Box>
      <VideoCard />
    </DashboardContent>
  );
}