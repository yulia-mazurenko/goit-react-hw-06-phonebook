import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { hideNotifications } from '../../redux/features/notifications/notificationsSlice';

export const Notifications = () => {
  const message = useSelector(state => state.notifications.message);
  const visible = useSelector(state => state.notifications.visible);
  const dispatch = useDispatch();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={visible}
      autoHideDuration={2000}
      onClose={() => dispatch(hideNotifications())}
    >
      <Alert
        onClose={() => dispatch(hideNotifications())}
        severity="info"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
