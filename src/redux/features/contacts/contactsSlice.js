import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '(096) 459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '(097) 443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '(096) 645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '(050) 227-91-26' },
];

const initialState = {
  contacts: initialContacts,
  filter: '',
};

const getId = () => nanoid();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const contact = {
        name: action.payload.name,
        id: getId(),
        number: action.payload.number,
      };

      state.contacts.push(contact);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
