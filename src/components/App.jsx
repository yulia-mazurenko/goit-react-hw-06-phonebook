import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Notifications } from './Notifications/Notification';
import {
  PhoneBookTitle,
  ListTitle,
  Wrapper,
} from '../components/Titles/Titles.styled';

export default function App() {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PhoneBookTitle>PhoneBook</PhoneBookTitle>
        <ContactForm />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ListTitle>Contacts</ListTitle>
        <Filter />
      </div>
      <ContactList />
      <Notifications />
    </Wrapper>
  );
}
