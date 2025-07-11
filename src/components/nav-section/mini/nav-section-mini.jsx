import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { NavList } from './nav-list';
import { NavUl, NavLi } from '../styles';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';

export function NavSectionMini({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
}) {
  const theme = useTheme();

  const cssVars = {
    ...navSectionCssVars.mini(theme),
    ...overridesVars,
  };

  return (
    <Stack
      component="nav"
      className={navSectionClasses.mini.root}
      sx={{
        ...cssVars,
        ...sx,
        overflowX: { xs: 'auto', sm: 'auto', md: 'visible' },
        whiteSpace: { xs: 'nowrap', sm: 'nowrap', md: 'normal' },
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: { xs: 'center', md: 'stretch' },
        gap: { xs: 1, md: 0 },
        px: { xs: 1, md: 0 },
      }}
    >
      <NavUl
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          gap: 'var(--nav-item-gap)',
          flexDirection: { xs: 'row', md: 'column' },
        }}
      >
        {data.map((group) => (
          <Group
            key={group.subheader ?? group.items[0].title}
            render={render}
            cssVars={cssVars}
            items={group.items}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Group({ items, render, slotProps, enabledRootRedirect, cssVars }) {
  return (
    <NavLi
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: { xs: 1, md: 'var(--nav-item-gap)' },
      }}
    >
      <NavUl
        sx={{
          display: 'flex',
          gap: 'var(--nav-item-gap)',
          flexDirection: { xs: 'row', md: 'column' },
        }}
      >
        {items.map((list) => (
          <NavList
            key={list.title}
            depth={1}
            data={list}
            render={render}
            cssVars={cssVars}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </NavLi>
  );
}
