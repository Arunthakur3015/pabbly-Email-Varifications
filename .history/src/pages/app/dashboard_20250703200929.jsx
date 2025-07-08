import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';

import { CourseHoursSpent } from 'src/sections/course/course-hours-spent';

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box>
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
          buttonAction={handleToggle}
        />

        <Collapse in={open}>
          <Box sx={{ mt: 3 }}>
            <CourseHoursSpent
              title="Hours spent"
              chart={{
                series: [
                  {
                    name: 'Weekly',
                    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                    data: [{ data: [10, 41, 35, 151, 49] }],
                  },
                  {
                    name: 'Monthly',
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    data: [{ data: [83, 112, 119, 88, 103, 112, 114, 108, 93] }],
                  },
                  {
                    name: 'Yearly',
                    categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    data: [{ data: [24, 72, 64, 96, 76, 41] }],
                  },
                ],
              }}
            />
          </Box>
        </Collapse>
      </Box>
    </DashboardContent>
  );
}
