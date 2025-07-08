// CreditsSummaryPage.js

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Tab, Tabs, Grid, Tooltip, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { StatsCard } from '../StatsCard';

const tabs = [
  {
    label: 'Credits Summary',
    route: paths.settings.creditsSummary,
    tooltip: 'Click to view credit summary',
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
        {/* credits summary icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M5 5v6h22V5zm6 2h14v2H11zm-6 6v6h22v-6zm16 2h4v2h-4zM5 21v6h22v-6zm11 2h9v2h-9z" />
        </svg>
      </Box>
    ),
  },
  {
    label: 'API',
    route: paths.settings.api,
    tooltip: 'Get API key and secret key to perform email verifications directly.',
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
        {/* api icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M11.876.165a.25.25 0 0 1 .296-.146l1.022.279a.25.25 0 0 1 .181.276l-.127.893c.551.317.995.774 1.299 1.31l.895-.12a.25.25 0 0 1 .275.185l.27 1.024a.25.25 0 0 1-.15.295l-.836.336a3.5 3.5 0 0 1-.485 1.781l.55.715a.25.25 0 0 1-.022.33l-.751.745a.25.25 0 0 1-.33.02l-.711-.558a3.5 3.5 0 0 1-1.784.47l-.344.835a.25.25 0 0 1-.296.146l-1.022-.278a.25.25 0 0 1-.182-.277l.128-.893a3.5 3.5 0 0 1-1.299-1.31l-.895.12a.25.25 0 0 1-.275-.185l-.27-1.024a.25.25 0 0 1 .15-.295l.836-.336a3.5 3.5 0 0 1 .485-1.781l-.55-.715a.25.25 0 0 1 .022-.33l.751-.745a.25.25 0 0 1 .33-.02l.711.558A3.5 3.5 0 0 1 11.532 1zm1.554 4.86a2 2 0 1 1-3.86-1.05a2 2 0 0 1 3.86 1.05" />
        </svg>
      </Box>
    ),
  },
  {
    label: 'Team Members',
    route: paths.settings.teamMembers,
    tooltip: 'Add team members and share folder access.',
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
        {/* team icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
          <path d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11" />
        </svg>
      </Box>
    ),
  },
];

export default function CreditsSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTab = tabs.findIndex((tab) => tab.route === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].route);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Box>
        {/* Heading */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Credits Summary
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
            View a summary of your email verification credits.&nbsp;
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Learn more
            </Box>
          </Typography>
        </Box>

        {/* Tabs */}
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
            <Tooltip key={index} title={tab.tooltip} arrow placement="top">
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

        {/* STATS CARDS */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                heading="Credits Used"
                total="12,540"
                tooltip_title="Total credits consumed"
                icon_name="credits.svg"
                bg_gradient="#078dee"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                heading="API Calls"
                total="2,390"
                tooltip_title="Total API calls made"
                icon_name="api.svg"
                bg_gradient="#FFA92E"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                heading="Team Members"
                total="8"
                tooltip_title="Total team members"
                icon_name="team.svg"
                bg_gradient="#4CAF50"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                heading="Active Projects"
                total="15"
                tooltip_title="Currently active projects"
                icon_name="projects.svg"
                bg_gradient="#9C27B0"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
