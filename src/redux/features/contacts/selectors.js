export const selectFilteredContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
