import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  message: '',
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotifications(state, action) {
      state.visible = true;
      state.message = action.payload;
    },
    hideNotifications(state, action) {
      state.visible = false;
    },
  },
});

export const { addNotifications, hideNotifications } =
  notificationsSlice.actions;
