import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Logo } from 'src/components/logo';
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

  return (
    <HeaderSection
      sx={{
        backgroundColor: 'common.white',
        bordberBottom: '1px dashed',
        bordercolor: '#00000',
        ...sx,
      }}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

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
                    src="/logo/pabbly-email.png"
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
                flexWrap: 'nowrap',
                overflowX: 'hidden',
                overflowY: 'hidden',
                gap: { xs: 1, sm: 1.5 },
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
                    display: { xs: 'none', sm: 'block' },
                    textAlign: 'center',
                    mt: '4px',
                  }}
                >
                  Don&apos;t have a Pabbly account yet?
                </Link>
              )}

              {/* Hide searchbar on xs */}
              {searchbar && (
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Searchbar data-slot="searchbar" data={data?.nav} />
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
                      width: 81.47,
                      height: 36,
                      display: { xs: 'inline-flex', sm: 'inline-flex' },
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Upgrade
                  </Button>
                </a>
              )}

              {dropheaderbutton && (
                <Box sx={{ display: 'inline-flex' }}>
                  <DropHeaderAppsButton />
                </Box>
              )}

              {createButton && (
                <Button
                  component={RouterLink}
                  href={paths.auth.jwt.signUp}
                  variant="outlined"
                  color="info"
                  size="medium"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Create Account
                </Button>
              )}

              {account && <AccountDrawer data-slot="account" data={data?.account} />}

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
