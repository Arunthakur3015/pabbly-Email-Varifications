import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import { stylesMode } from 'src/theme/styles';

import { useNavItem } from '../hooks';
import { Iconify } from '../../iconify';
import { navSectionClasses } from '../classes';
import { stateClasses, sharedStyles } from '../styles';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  (
    {
      path,
      icon,
      info,
      title,
      caption,
      open,
      depth,
      render,
      active,
      disabled,
      hasChild,
      slotProps,
      externalLink,
      enabledRootRedirect,
      ...other
    },
    ref
  ) => {
    const navItem = useNavItem({
      path,
      icon,
      info,
      depth,
      render,
      hasChild,
      externalLink,
      enabledRootRedirect,
    });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        depth={depth}
        active={active}
        disabled={disabled}
        open={open && !active}
        title={title}
        sx={{
          ...slotProps?.sx,
          [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
          [`& .${navSectionClasses.item.info}`]: slotProps?.info,
          [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }}
        className={stateClasses({ open: open && !active, active, disabled })}
        {...navItem.baseProps}
        {...other}
      >
        {icon && (
          <Box component="span" className={navSectionClasses.item.icon}>
            {navItem.renderIcon}
          </Box>
        )}

        {title && (
          <Box component="span" className={navSectionClasses.item.title}>
            {title}
          </Box>
        )}

        {caption && (
          <Tooltip title={caption} arrow placement="right">
            <Iconify icon="eva:info-outline" className={navSectionClasses.item.caption} />
          </Tooltip>
        )}

        {info && navItem.subItem && (
          <Box component="span" className={navSectionClasses.item.info}>
            {navItem.renderInfo}
          </Box>
        )}

        {hasChild && (
          <Iconify icon="eva:arrow-ios-forward-fill" className={navSectionClasses.item.arrow} />
        )}
      </StyledNavItem>
    );
  }
);

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'active' &&
    prop !== 'open' &&
    prop !== 'disabled' &&
    prop !== 'depth' &&
    prop !== 'title',
})(({ active, open, disabled, depth, title, theme }) => {
  const rootItem = depth === 1;
  const subItem = !rootItem;

  const baseStyles = {
    item: {
      width: '100%',
      borderRadius: 'var(--nav-item-radius)',
      color: 'white',
      '&:hover': {
        color: '#078DEE',
        backgroundColor: 'var(--nav-item-hover-bg)',
        [`& .${navSectionClasses.item.title}`]: {
          color: '#078DEE',
        },
        [`& .${navSectionClasses.item.icon}`]: {
          color: '#078DEE',
        },
      },
    },
    title: {},
    caption: {
      width: 16,
      height: 16,
      color: 'var(--nav-item-caption-color)',
    },
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size)',
      height: 'var(--nav-icon-size)',
      color: title === 'Dashboard' ? '#078DEE' : 'white',
    },
    arrow: { ...sharedStyles.arrow },
    info: { ...sharedStyles.info },
  };

  return {
    ...(rootItem && {
      ...baseStyles.item,
      textAlign: 'center',
      flexDirection: 'column',
      minHeight: 'var(--nav-item-root-height)',
      padding: 'var(--nav-item-root-padding)',
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
        margin: 'var(--nav-icon-root-margin)',
        color: active || open ? '#078DEE' : title === 'Dashboard' ? '#078DEE' : 'white',
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...sharedStyles.noWrap,
        lineHeight: '16px',
        fontSize: theme.typography.pxToRem(10),
        fontWeight: active ? theme.typography.fontWeightBold : theme.typography.fontWeightSemiBold,
        color: active || open ? '#078DEE' : title === 'Dashboard' ? '#078DEE' : 'white',
      },
      [`& .${navSectionClasses.item.caption}`]: {
        ...baseStyles.caption,
        top: 11,
        left: 6,
        position: 'absolute',
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        top: 11,
        right: 6,
        position: 'absolute',
      },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },

      ...(active && {
        color: '#078DEE',
        backgroundColor: 'rgba(7, 141, 238, 0.08)',
        '&:hover': {
          backgroundColor: 'var(--nav-item-root-active-hover-bg)',
        },
        [stylesMode.dark]: {
          color: 'var(--nav-item-root-active-color-on-dark)',
        },
      }),

      ...(open && {
        color: '#078DEE',
        backgroundColor: 'var(--nav-item-root-open-bg)',
      }),
    }),

    ...(subItem && {
      ...baseStyles.item,
      color: theme.vars.palette.text.secondary,
      minHeight: 'var(--nav-item-sub-height)',
      padding: 'var(--nav-item-sub-padding)',

      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
        margin: 'var(--nav-icon-sub-margin)',
        color: active ? '#000' : '',
      },

      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...theme.typography.body2,
        fontWeight: active ? theme.typography.fontWeightBold : theme.typography.fontWeightMedium,
        flex: '1 1 auto',
        color: active ? '#000' : '',
      },

      [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        marginRight: theme.spacing(-0.5),
      },
      [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },

      ...(active && {
        backgroundColor: 'var(--nav-item-sub-active-bg)',
      }),

      ...(open && {
        color: 'var(--nav-item-sub-open-color)',
        backgroundColor: 'var(--nav-item-sub-open-bg)',
      }),
    }),

    ...(disabled && sharedStyles.disabled),
  };
});
