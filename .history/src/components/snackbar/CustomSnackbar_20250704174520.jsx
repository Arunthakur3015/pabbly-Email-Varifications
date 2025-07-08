import Portal from '@mui/material/Portal';

import { Iconify } from '../iconify';
import { StyledToaster } from './style';
import { toasterClasses } from './classes';

// ----------------------------------------------------------------------

export function CoustomSnackbar() {
  return (
    <Portal>
      <StyledToaster
        expand
        gap={12}
        closeButton
        offset={16}
        visibleToasts={4}
        position="top-right"
        className={toasterClasses.root}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: toasterClasses.toast,
            icon: toasterClasses.icon,
            content: toasterClasses.content,
            title: toasterClasses.title,
            description: toasterClasses.description,
            actionButton: toasterClasses.actionButton,
            cancelButton: toasterClasses.cancelButton,
            closeButton: toasterClasses.closeButton,
            default: toasterClasses.default,
            info: toasterClasses.info,
            error: toasterClasses.error,
            success: toasterClasses.success,
            warning: toasterClasses.warning,
          },
        }}
        icons={{
          loading: <span className={toasterClasses.loadingIcon} />,
          info: <Iconify className={toasterClasses.iconSvg} icon="solar:info-circle-bold" />,
          success: <Iconify className={toasterClasses.iconSvg} icon="solar:check-circle-bold" />,
          warning: <Iconify className={toasterClasses.iconSvg} icon="solar:danger-triangle-bold" />,
          error: <Iconify className={toasterClasses.iconSvg} icon="solar:danger-bold" />,
        }}
      />
    </Portal>
  );
}
