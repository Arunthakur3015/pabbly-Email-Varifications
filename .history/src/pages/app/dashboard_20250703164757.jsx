import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';
import PageHeader from 'src/component/pageheader/page-header'; // ✅ only if folder name is pageheader and file is page-header.jsx



// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <DashboardContent maxWidth='xl'>
      <PageHeader/> 
    </DashboardContent>
  );
}
