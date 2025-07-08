const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth',
})(({ active, open, disabled, depth, theme }) => {
  const rootItem = depth === 1;
  const subItem = !rootItem;

  const baseStyles = {
    item: {
      width: '100%',
      borderRadius: 'var(--nav-item-radius)',
      color: '#FFFFFF', // default white icon/text
      '&:hover': {
        color: '#078DEE', // blue on hover
        [`& .${navSectionClasses.item.title}`]: { color: '#078DEE' },
        [`& .${navSectionClasses.item.icon}`]: { color: '#078DEE' },
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
      color: '#FFFFFF', // default icon color white
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
        color: active ? '#078DEE' : '#FFFFFF',
      },

      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...sharedStyles.noWrap,
        lineHeight: '16px',
        fontSize: theme.typography.pxToRem(10),
        fontWeight: active
          ? theme.typography.fontWeightBold
          : theme.typography.fontWeightSemiBold,
        color: active ? '#078DEE' : '#FFFFFF',
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
      minHeight: 'var(--nav-item-sub-height)',
      padding: 'var(--nav-item-sub-padding)',
      color: '#FFFFFF',

      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
        margin: 'var(--nav-icon-sub-margin)',
        color: active ? '#078DEE' : '#FFFFFF',
      },

      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...theme.typography.body2,
        fontWeight: active
          ? theme.typography.fontWeightSemiBold
          : theme.typography.fontWeightMedium,
        color: active ? '#078DEE' : '#FFFFFF',
        flex: '1 1 auto',
      },

      [`& .${navSectionClasses.item.caption}`]: baseStyles.caption,

      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        marginRight: theme.spacing(-0.5),
      },

      [`& .${navSectionClasses.item.info}`]: baseStyles.info,

      ...(active && {
        backgroundColor: 'var(--nav-item-sub-active-bg)',
      }),

      ...(open && {
        color: '#078DEE',
        backgroundColor: 'var(--nav-item-sub-open-bg)',
      }),
    }),

    ...(disabled && sharedStyles.disabled),
  };
});
