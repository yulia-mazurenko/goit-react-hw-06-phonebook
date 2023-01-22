import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';
import { deleteContact } from '../../redux/features/contacts/contactsSlice';
import { selectFilteredContacts } from '../../redux/features/contacts/selectors';

const ContactList = () => {
  const filteredFriends = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredFriends.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          id={id}
          contactName={name}
          number={number}
          onDeleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
