import { CONFIG } from 'src/config-global';

import { PageHeader } from 'src/components/pageheader/page-header';


// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent>
      <PageHeader title="Page one" />
    </DashboardContent>
  );
}
