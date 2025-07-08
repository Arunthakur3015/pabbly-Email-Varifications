import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// -------------------------------------------
// Lazy-loaded pages

const Dashboard = lazy(() => import('src/pages/app/dashboard'));
const GetHelp = lazy(() => import('src/pages/app/get-help'));
const Credit = lazy(() => import('src/pages/app/credit'));
const API = lazy(() => import('src/pages/app/API'));
const TeamMembers = lazy(() => import('src/pages/app/team-members'));
const ActivityLog = lazy(() => import('src/pages/app/activity-log'));
const TimeZone = lazy(() => import('src/pages/app/time-zone'));

// -------------------------------------------
// Layout wrapper with Suspense

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

// -------------------------------------------
// Dashboard and Settings routes

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? layoutContent : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'get-help', element: <GetHelp /> },
    ],
  },
  {
    path: 'settings',
    element: CONFIG.auth.skip ? layoutContent : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { path: 'credits', element: <Credit /> },
      { path: 'api', element: <API /> },
      { path: 'team', element: <TeamMembers /> },
      { path: 'activity', element: <ActivityLog /> },
      { path: 'timezone', element: <TimeZone /> },
    ],
  },
];
