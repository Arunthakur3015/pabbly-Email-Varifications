import Alert from '@mui/material/Alert';

import { useBoolean } from 'src/hooks/use-boolean';

import Section from './section';
import { Main, Content } from './main';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export function AuthSplitLayout({ sx, section, children, hidehedder = false }) {
  const mobileNavOpen = useBoolean();

  const layoutQuery = 'md';

  return (
    <LayoutSection
      headerSection={
        /** **************************************
         * Header (conditionally rendered)
         *************************************** */
        !hidehedder && (
          <HeaderBase
            disableElevation
            layoutQuery={layoutQuery}
            onOpenNav={mobileNavOpen.onTrue}
            slotsDisplay={{
              signIn: false,
              account: false,
              purchase: false,
              contacts: false,
              searchbar: false,
              workspaces: false,
              menuButton: false,
              localization: false,
              notifications: false,
            }}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
            }}
            slotProps={{ container: { maxWidth: false } }}
            sx={{ position: { [layoutQuery]: 'fixed' } }}
          />
        )
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      sx={sx}
      cssVars={{
        '--layout-auth-content-width': '420px',
      }}
    >
      <Main layoutQuery={layoutQuery} sx={{ backgroundColor: 'white' }}>
        <Section
          title={section?.title}
          layoutQuery={layoutQuery}
          imgUrl={section?.imgUrl}
          subtitle={section?.subtitle}
        />
        <Content layoutQuery={layoutQuery}>{children}</Content>
      </Main>
    </LayoutSection>
  );
}
