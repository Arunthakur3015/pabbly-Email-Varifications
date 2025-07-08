import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

import {pageheader} from 'src/components/pageheader';

// -------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <DashboardContent>
        <page-header/>
      </DashboardContent>
    </>
  );
}
