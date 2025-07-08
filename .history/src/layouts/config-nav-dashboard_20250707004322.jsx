import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  Setting: icon('Settings'),
  dashboard: icon('deshboard'),
  gethelp: icon('Get-help'),
};

// ----------------------------------------------------------------------

export const navData = [
  {
    subheader: 'Overview 6.0.0',
    items: [
      {
        title: 'Dashboard',
        path: paths.dashboard.root,
        icon: ICONS.dashboard,
      },
      {
        title: 'Settings',
        path: paths.settings.root,
        icon: ICONS.Setting,
        children: [
          { title: 'Credits Summary', path: paths.settings.creditsSummary },
          { title: 'API', path: paths.settings.api },
          { title: 'Team Members', path: paths.settings.teamMembers },
          { title: 'Activity Log', path: paths.settings.activityLog },
          { title: 'Time Zone', path: paths.settings.timeZone },
        ],
      },
      {
        title: 'Get Help',
        path: paths.dashboard.getHelp,
        icon: ICONS.gethelp,
      },
    ],
  },
];
