import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocaleStorage } from './hooks/useLocaleStorage';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  PhoneBookTitle,
  ListTitle,
  Wrapper,
} from '../components/Titles/Titles.styled';

const LOCALE_STORAGE_KEY = 'contacts-list';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const savedContacts = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));

export default function App() {
  const [contacts, setContacts] = useLocaleStorage(
    LOCALE_STORAGE_KEY,
    initialContacts
  );

  // const [contacts, setContacts] = useState(
  //   () => savedContacts ?? initialContacts
  // );
  const [filter, setFilter] = useState('');

  const getId = () => nanoid();

  // useEffect(() => {
  //   localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      name,
      id: getId(),
      number,
    };

    setContacts(state => [...contacts, contact]);
  };

  const deleteContact = contactToDeleteId => {
    setContacts(state => {
      return contacts.filter(contact => contact.id !== contactToDeleteId);
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Wrapper>
      <PhoneBookTitle>PhoneBook</PhoneBookTitle>
      <ContactForm onSubmitForm={addContact} onGetId={getId} />
      <ListTitle>Contacts</ListTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
}
