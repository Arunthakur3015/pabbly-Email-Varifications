import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Tab,
  Tabs,
  Tooltip,
  Container,
  Typography,
} from '@mui/material';
import { paths } from 'src/routes/paths';

// yaha aap apne route paths set kar lena
const tabs = [
  {
    label: 'Credits Summary',
    icon: (
      <Box component="span" sx={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 32 32">
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
      <Box component="span" sx={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.876.165a.25.25 0 0 1 .296-.146l1.022.279a.25.25 0 0 1 .181.276l-.127.893c.551.317.995.774 1.299 1.31l.895-.12a.25.25 0 0 1 .275.185l.27 1.024a.25.25 0 0 1-.15.295l-.836.336a3.5 3.5 0 0 1-.485 1.781l.55.715a.25.25 0 0 1-.022.33l-.751.745a.25.25 0 0 1-.33.02l-.711-.558a3.5 3.5 0 0 1-1.784.47l-.344.835a.25.25 0 0 1-.296.146l-1.022-.278a.25.25 0 0 1-.182-.277l.128-.893a3.5 3.5 0 0 1-1.299-1.31l-.895.12a.25.25 0 0 1-.275-.185l-.27-1.024a.25.25 0 0 1 .15-.295l.836-.336a3.5 3.5 0 0 1 .485-1.781l-.55-.715a.25.25 0 0 1 .022-.33l.751-.745a.25.25 0 0 1 .33-.02l.711.558A3.5 3.5 0 0 1 11.532 1zM13.43 5.025a2 2 0 1 1-3.86-1.05 2 2 0 0 1 3.86 1.05" />
        </svg>
      </Box>
    ),
    route: paths.settings.api,
    tooltip: 'Get API key and secret key to perform email verifications directly.',
  },
  {
    label: 'Team Members',
    icon: (
      <Box component="span" sx={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 28 28">
          <path d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6" />
        </svg>
      </Box>
    ),
    route: paths.settings.teamMembers,
    tooltip: 'Add team members and share folder access.',
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
        {/* Page Header */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Credits Summary
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
            View a summary of your email verification credits.{' '}
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

        {/* Sticky Tabs */}
        <Box
          sx={{
            position: 'sticky',
            top: '80px', // header ka height
            zIndex: 1100,
            bgcolor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
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
              '& .Mui-selected': {
                color: 'text.primary',
                fontWeight: 600,
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tooltip
                key={index}
                title={tab.tooltip}
                arrow
                placement="top"
                PopperProps={{
                  modifiers: [
                    { name: 'offset', options: { offset: [0, -9] } },
                  ],
                }}
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
        </Box>

        {/* Dummy scrollable content */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="body1" paragraph>
            Yaha se aapka detailed content aa sakta hai jo scroll hoga.
          </Typography>
          {Array.from({ length: 30 }).map((_, i) => (
            <Typography key={i} paragraph>
              This is content block {i + 1}. Scroll to see the sticky effect working perfectly.
            </Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
