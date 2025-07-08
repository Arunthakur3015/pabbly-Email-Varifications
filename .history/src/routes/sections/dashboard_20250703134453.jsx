import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const Dashboard = lazy(() => import('src/pages/app/dashboard'));
const Gethelp = lazy(() => import('src/pages/app/get-help'));
const Creadit = lazy(() => import('src/pages/app/credit'));
const API = lazy(() => import('src/pages/app/API'));
const TeamMember = lazy(() => import('src/pages/app/team-members'));
const Activity = lazy(() => import('src/pages/app/Ac'));
const TeamMember = lazy(() => import('src/pages/app/team-members'));

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
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <Dashboard />, index: true },
      { path: 'get-help', element: <Gethelp /> },
      {
        path: 'group',
        children: [
          { element: <Creadit />, index: true },
          { path: 'API', element: <API /> },
          { path: 'team-members', element: <TeamMember /> },
        ],
      },
    ],
  },
];
