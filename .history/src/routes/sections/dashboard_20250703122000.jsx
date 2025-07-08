import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/app/one'));
const PageTwo = lazy(() => import('src/pages/app/two'));
const PageThree = lazy(() => import('src/pages/app/three'));
const PageFour = lazy(() => import('src/pages/app/four'));
const PageFive = lazy(() => import('src/pages/app/five'));
const PageTeamMembers = lazy(() => import('src/pages/app/team-members'));
const PageActivityLog = lazy(() => import('src/pages/app/activity-log'));
const PageTimeZone = lazy(() => import('src/pages/app/time-zone'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'team-members', element: <PageTeamMembers /> },
          { path: 'activity-log', element: <PageActivityLog /> },
          { path: 'time-zone', element: <PageTimeZone /> },
        ],
      },
    ],
  },
];
