import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Tab, Tabs, Tooltip, Typography } from '@mui/material';

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
            d="M11.876.165a.25.25 0 0 1 .296-.146l1.022.279a.25.25 0 0 1 .181.276l-.127.893c.551.317.995.774 1.299 1.31l.895-.12a.25.25 0 0 1 .275.185l.27 1.024a.25.25 0 0 1-.15.295l-.836.336a3.5 3.5 0 0 1-.485 1.781l.55.715a.25.25 0 0 1-.022.33l-.751.745a.25.25 0 0 1-.33.02l-.711-.558a3.5 3.5 0 0 1-1.784.47l-.344.835a.25.25 0 0 1-.296.146l-1.022-.278a.25.25 0 0 1-.182-.277l.128-.893a3.5 3.5 0 0 1-1.299-1.31l-.895.12a.25.25 0 0 1-.275-.185l-.27-1.024a.25.25 0 0 1 .15-.295l.836-.336a3.5 3.5 0 0 1 .485-1.781l-.55-.715a.25.25 0 0 1 .022-.33l.751-.745a.25.25 0 0 1 .33-.02l.711.558A3.5 3.5 0 0 1 11.532 1zm1.554 4.86a2 2 0 1 1-3.86-1.05a2 2 0 0 1 3.86 1.05M5.777 6.22A.25.25 0 0 0 5.53 6H4.471a.25.25 0 0 0-.248.219l-.11.88a4 4 0 0 0-1.244.515l-.7-.544a.25.25 0 0 0-.33.02l-.749.749a.25.25 0 0 0-.02.33l.544.7a4 4 0 0 0-.515 1.244l-.88.11A.25.25 0 0 0 0 10.47v1.058a.25.25 0 0 0 .219.248l.88.11c.101.448.278.867.515 1.244l-.544.7a.25.25 0 0 0 .02.33l.749.749a.25.25 0 0 0 .33.02l.7-.544c.377.237.796.414 1.244.515l.11.88a.25.25 0 0 0 .247.22h1.058a.25.25 0 0 0 .248-.219l.11-.88a4 4 0 0 0 1.244-.515l.7.544a.25.25 0 0 0 .33-.02l.749-.749a.25.25 0 0 0 .02-.33l-.544-.7c.237-.377.414-.796.515-1.244l.88-.11a.25.25 0 0 0 .22-.247v-1.058a.25.25 0 0 0-.219-.248l-.88-.11a4 4 0 0 0-.515-1.244l.544-.7a.25.25 0 0 0-.02-.33l-.75-.75a.25.25 0 0 0-.33-.02l-.7.544A4 4 0 0 0 5.887 7.1zM7.5 11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"
          />
        </svg>
      </Box>
    ),
    route: paths.settings.api,
    tooltip: 'Get API key and secret key to perform email verifications directly.',
  },
  // add other tabs as needed
];

export default function CreditsSummaryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedTab = tabs.findIndex((tab) => tab.route === location.pathname);

  const handleChange = (event, newValue) => {
    navigate(tabs[newValue].route);
  };

  return (
    <Box sx={{ p: 3, ml: 2, mt: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Credits Summary
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
          View a summary of your email verification credits. Learn more
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
    </Box>
  );
}
