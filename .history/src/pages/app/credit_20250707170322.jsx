import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Tab, Tabs, Tooltip, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';

import { CreditCard } from 'src/components/creditcard/credit-cards';

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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.876.165a.25.25 0 0 1 .296-.146l1.022.279a.25.25 0 0 1 .181.276l-.127.893c.551.317.995.774 1.299 1.31l.895-.12a.25.25 0 0 1 .275.185l.27 1.024a.25.25 0 0 1-.15.295l-.836.336a3.5 3.5 0 0 1-.485 1.781l.55.715a.25.25 0 0 1-.022.33l-.751.745a.25.25 0 0 1-.33.02l-.711-.558a3.5 3.5 0 0 1-1.784.47l-.344.835a.25.25 0 0 1-.296.146l-1.022-.278a.25.25 0 0 1-.182-.277l.128-.893a3.5 3.5 0 0 1-1.299-1.31l-.895.12a.25.25 0 0 1-.275-.185l-.27-1.024a.25.25 0 0 1 .15-.295l.836-.336a3.5 3.5 0 0 1 .485-1.781l-.55-.715a.25.25 0 0 1 .022-.33l.751-.745a.25.25 0 0 1 .33-.02l.711.558A3.5 3.5 0 0 1 11.532 1zm1.554 4.86a2 2 0 1 1-3.86-1.05a2 2 0 0 1 3.86 1.05"
          />
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
          <path d="M17.754 11c.966 0 1.75.784 1.75 1.75v6.749a5.501 5.501 0 0 1-11.002 0V12.75c0-.966.783-1.75 1.75-1.75zM3.75 11l4.382-.002a2.73 2.73 0 0 0-.621 1.532l-.01.22v6.749c0 1.133.291 2.199.8 3.127A4.5 4.5 0 0 1 2 18.499V12.75A1.75 1.75 0 0 1 3.751 11m16.124-.002L24.25 11c.966 0 1.75.784 1.75 1.75v5.75a4.5 4.5 0 0 1-6.298 4.127l.056-.102c.429-.813.69-1.729.738-2.7l.008-.326V12.75c0-.666-.237-1.276-.63-1.752M14 3a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m8.003 1a3 3 0 1 1 0 6a3 3 0 0 1 0-6M5.997 4a3 3 0 1 1 0 6a3 3 0 0 1 0-6" />
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
          <path d="m19.65 20.35l.7-.7l-1.85-1.85V15h-1v3.2zM10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.875-.625-1.9-.95T18 11q-2.9 0-4.95 2.05T11 18q0 .775.163 1.538T11.675 21z" />
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
          <path d="M12 2c5.078 0 9.272 3.785 9.915 8.687a8 8 0 0 0-11.228 11.228C5.785 21.272 2 17.078 2 12C2 6.477 6.477 2 12 2m0 1.833c-2.317 0-4.41.966-5.896 2.516c.177.123.331.296.437.534c.204.457.204.928.204 1.345c0 .328 0 .64.105.865c.144.308.766.44 1.315.554l.02.005c.19.04.385.08.563.13c.506.14.898.595 1.211.96c.13.151.323.374.42.43c.05-.036.211-.211.29-.498c.062-.22.044-.414-.045-.52c-.56-.66-.529-1.93-.356-2.399c.272-.739 1.122-.684 1.744-.644h.006c.23.015.446.03.608.009c.471-.06.695-.616.835-.964c.045-.111.081-.201.114-.246c.292-.4 1.186-1.003 1.74-1.375A8.1 8.1 0 0 0 12 3.833M23 17a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7 1h4v-2h-2v-2h-2z" />
        </svg>
      </Box>
    ),
    route: paths.settings.timeZone,
    tooltip: 'View and manage the time zone settings of your account.',
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
    <Container maxWidth="xl" sx={{ p: 3, ml: 2, mt: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Credits Summary
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth:'xl' }}>
          View a summary of your email verification credits. Learn more
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
            PopperProps={{
              modifiers: [{ name: 'offset', options: { offset: [0, -9] } }],
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
    </Container>
  );
}
