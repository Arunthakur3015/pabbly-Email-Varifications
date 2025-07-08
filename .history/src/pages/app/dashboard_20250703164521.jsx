import { CONFIG } from 'src/config-global';
import { PageHeader  from 'src/component/pageheader';
import { DashboardContent } from 'src/layouts/dashboard';


// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth='xl'>
      <PageHeader/> 
    </DashboardContent>
  );
}
