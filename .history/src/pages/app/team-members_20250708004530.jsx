import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Tab, Tabs, Tooltip, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { CreditCard } from 'src/components/creditcard/credit-cards';

import {TeamListView} from 'src/components/dashboard-list/team-list-view';

const metadata = { title: `Credits Summary | Pabbly Chatflow` };

const tabs = [
  {
    label: 'Credits Summary',
    icon: (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M5 5v6h22V5zm6 2h14v2H11zm-6 6v6h22v-6zm16 2h4v2h-4zM5 21v6h22v-6zm11 2h9v2h-9z" />
        </svg>
      </Box>
    ),
    route: paths.settings.creditsSummary,
    tooltip: 'Click to view credit summary',
  },
  {
    label: 'API',
    icon: (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M11.876.165a.25.25 0 0 1 .296-.146..." />
        </svg>
      </Box>
    ),
    route: paths.settings.api,
    tooltip: 'Get API key and secret key to perform email verifications directly.',
  },
  {
    label: 'Team Members',
    icon: (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 28 28"
          fill="currentColor"
        >
          <path d="M17.754 11c.966 0 1.75.784..." />
        </svg>
      </Box>
    ),
    route: paths.settings.teamMembers,
    tooltip: 'Add team members and share folder access.',
  },
  {
    label: 'Activity Log',
    icon: (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m19.65 20.35l.7-.7..." />
        </svg>
      </Box>
    ),
    route: paths.settings.activityLog,
    tooltip: 'Activity Log helps you monitor changes and keep track of all actions.',
  },
  {
    label: 'Time Zone',
    icon: (
      <Box
        component="span"
        sx={{
          width: 24,
          height: 24,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c5.078 0 9.272 3.785..." />
        </svg>
      </Box>
    ),
    route: paths.settings.timeZone,
    tooltip: 'View and manage the time zone settings of your account.',
  },
];

export default function CreditSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTab = tabs.findIndex((tab) => tab.route === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].route);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 3 }}>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Credits Summary
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 1353 }}>
          Get an overview of your credits usage and remaining balance.
        </Typography>
      </Box>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          position: 'sticky',
          zIndex: 1,
          top: 72,
          bgcolor: '#F1F7FB',
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '14px',
            lineHeight: '22px',
            mr: 1,
            color: 'text.secondary',
          },
          '& .Mui-selected': { color: 'text.primary', fontWeight: 600 },
        }}
      >
        {tabs.map((tab, index) => (
          <Tooltip
            key={index}
            title={tab.tooltip}
            arrow
            placement="top"
            PopperProps={{ modifiers: [{ name: 'offset', options: { offset: [0, -9] } }] }}
          >
            <Tab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {tab.icon}
                  {tab.label}
                </Box>
              }
            />
          </Tooltip>
        ))}
      </Tabs>

      {/* Summary Cards */}
      <Box
        sx={{
          gap: 3,
          mt: 5,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        <CreditCard
          title="Email Credits Consumed"
          total={32}
          icon_name="consumed 1.svg"
          bg_gradient="#10CBF3"
          tooltip_title="Number of emails consumed by your account."
        />

        <CreditCard
          title="Email Credits Remaining"
          total={9968}
          icon_name="Renaming.svg"
          bg_gradient="#1D88FA"
          tooltip_title="Number of emails credits remaining in your account."
        />

        <CreditCard
          title="Total Number of Email Lists"
          total={100}
          icon_name="email.svg"
          bg_gradient="#28A745"
          tooltip_title="Number of email lists uploaded in your account."
        />
      </Box>
      <TeamListView />
    </Container>
  );
}
