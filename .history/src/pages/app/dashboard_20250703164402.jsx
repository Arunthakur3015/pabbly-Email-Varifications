import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

impo

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth='xl'>
      <PageHeader/> 
    </DashboardContent>
  );
}
