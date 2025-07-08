export const navData = [
  {
    subheader: 'Overview 6.0.0',
    items: [
      {
        title: 'dashboard',
        path: paths.dashboard.root,
        icon: ICONS.dashboard,
      },
      {
        title: 'Setting',
        path: paths.dashboard.group.root,
        icon: ICONS.Setting,
        children: [
          { title: 'Credits Summary', path: paths.dashboard.group.root },
          { title: 'API', path: paths.dashboard.group.api },
          { title: 'Team Members', path: paths.dashboard.group.teamMembers },
          { title: 'Activity Log', path: paths.dashboard.group.activityLog },
          { title: 'Time Zone', path: paths.dashboard.group.timeZone },
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
