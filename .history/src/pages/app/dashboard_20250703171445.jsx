import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

import { PageHeader } from 'src/components/pageheader/page-header';
import { Dashboard } from '@mui/icons-material';

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Dashboard
    </>
  );
}
