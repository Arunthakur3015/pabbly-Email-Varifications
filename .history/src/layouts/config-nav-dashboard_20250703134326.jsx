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
  /**
   * Overview
   */
  {
    subheader: 'Overview 6.0.0',
    items: [
      { title: 'dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
       {
        title: 'Setting',
        path: paths.dashboard.group.root,
        icon: ICONS.Setting,
        children: [
          { title: 'Credits Summary', path: paths.dashboard.group.root },
          { title: 'API', path: paths.dashboard.group.API },
          { title: 'Team Members', path: paths.dashboard.group.team },
          { title: 'Activity Log', path: paths.dashboard.group.six },
          { title: 'Time Zone', path: paths.dashboard.group.six },
        ],
      },
      { title: 'Get Help', path: paths.dashboard.two, icon: ICONS.gethelp },
      // { title: 'Three', path: paths.dashboard.three, icon: ICONS.analytics },
    ],
  },
  /**
   * Management
   */
  // {
  //   subheader: 'Management',
  //   items: [
     
  //   ],
  // },
];
