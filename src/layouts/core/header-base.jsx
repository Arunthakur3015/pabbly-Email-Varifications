import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
import MenuButton from 'src/components/menu-button';
import DropHeaderAppsButton from 'src/components/DropHeaderAppsButton';

import { HeaderSection } from './header-section';
import { Searchbar } from '../components/searchbar';
import { AccountDrawer } from '../components/account-drawer';

const StyledDivider = styled('span')(({ theme }) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': { bottom: -5, top: 'auto' },
}));

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  onOpenNav,
  layoutQuery,
  isLoginPage,

  slotsDisplay: {
    account = true,
    helpLink = true,
    purchase = true,
    searchbar = true,
    menuButton = true,
    button = true,
    dropheaderbutton = true,
    createButton = false,
  } = {},

  ...other
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeaderSection
      sx={{
        backgroundColor: 'common.white',
        borderBottom: '1px dashed',
        borderColor: '#000000',
        px: { xs: 1, sm: 3 },
        py: 1,
        ...sx,
      }}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {menuButton && (
              <MenuButton
                data-slot="menu-button"
                onClick={onOpenNav}
                sx={{
                  mr: 1,
                  ml: -1,
                  [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                }}
              />
            )}

            {isLoginPage ? (
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Logo width={120} data-slot="logo" />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    zIndex: () => theme.zIndex.drawer + 1,
                    height: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src="/logo/PEV_logo.svg"
                    alt="logo"
                    width={120}
                    sx={{ height: '100%', objectFit: 'contain' }}
                  />
                </Box>

                <Box
                  sx={{
                    display: { xs: 'flex', sm: 'none' },
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <Logo width={30} src="/pabbly-logo.svg" />
                </Box>
              </>
            )}

            <StyledDivider data-slot="divider" />

            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <Box
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                flexWrap: 'wrap',
                justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                whiteSpace: 'normal',
              }}
            >
              {helpLink && (
                <Link
                  data-slot="help-link"
                  href={paths.faqs}
                  component={RouterLink}
                  color="#637081"
                  underline="hover"
                  sx={{
                    typography: 'subtitle2',
                    fontSize: { xs: '10px', sm: '13px' },
                    maxWidth: 120,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Don&apos;t have a Pabbly account yet?
                </Link>
              )}

              {searchbar && (
                <Box
                  sx={{
                    flexShrink: 1,
                    minWidth: isSmallScreen ? 'auto' : 120,
                    maxWidth: { xs: 40, sm: 'auto' },
                  }}
                >
                  {isSmallScreen ? (
                    <Button
                      size="small"
                      sx={{
                        minWidth: 'auto',
                        padding: '6px',
                        borderRadius: '50%',
                        color: 'text.secondary',
                      }}
                    >
                      <SearchIcon fontSize="small" />
                    </Button>
                  ) : (
                    <Searchbar data-slot="searchbar" data={data?.nav} />
                  )}
                </Box>
              )}

              {button && (
                <a
                  href="https://www.pabbly.com/email-list-cleaning/#pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    sx={{
                      height: 30,
                      fontSize: '10px',
                      px: 1,
                      minWidth: 70,
                    }}
                  >
                    Upgrade
                  </Button>
                </a>
              )}

              {dropheaderbutton && (
                <Box>
                  <DropHeaderAppsButton />
                </Box>
              )}

              {createButton && (
                <Button
                  component={RouterLink}
                  href={paths.auth.jwt.signUp}
                  variant="outlined"
                  color="info"
                  size="small"
                  sx={{
                    fontSize: '11px',
                    height: 30,
                    minWidth: 100,
                  }}
                >
                  Create Account
                </Button>
              )}

              {account && (
                <Box>
                  <AccountDrawer data-slot="account" data={data?.account} />
                </Box>
              )}

              {purchase && (
                <Button
                  data-slot="purchase"
                  variant="contained"
                  rel="noopener"
                  target="_blank"
                  href={paths.minimalStore}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                      display: 'inline-flex',
                    },
                  }}
                >
                  Purchase
                </Button>
              )}
            </Box>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}
