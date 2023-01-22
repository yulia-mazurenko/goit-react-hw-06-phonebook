import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsReducer } from './features/contacts/contactsSlice';
import { notificationsSlice } from '../redux/features/notifications/notificationsSlice';
import { notificationsMiddleware } from '../redux/features/notifications/notifications.middleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    notifications: notificationsSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([notificationsMiddleware]);
  },
});

export const persistor = persistStore(store);
