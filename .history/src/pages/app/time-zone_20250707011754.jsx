import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Tab, Tabs, Tooltip, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

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
        {/* SVG */}
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
        {/* SVG */}
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
        {/* SVG */}
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
        {/* SVG */}
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
        {/* SVG */}
      </Box>
    ),
    route: paths.settings.timeZone,
    tooltip: 'View and manage the time zone settings of your account.',
  },
];

export default function TimeZonePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTab = tabs.findIndex((tab) => tab.route === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].route);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Time Zone
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
          Manage your account time zone settings. Learn more
        </Typography>
      </Box>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
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
            enterDelay={100}
            leaveDelay={0}
            placement="bottom"
            PopperProps={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 8], // नीचे करें tooltip
                  },
                },
              ],
            }}
          >
            <Tab
              disableRipple
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
    </Container>
  );
}
