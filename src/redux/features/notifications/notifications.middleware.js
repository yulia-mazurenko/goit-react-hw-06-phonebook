import { addContact, deleteContact } from '../contacts/contactsSlice';
import { addNotifications } from '../notifications/notificationsSlice';

export const notificationsMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    const contacts = getState().contacts.contacts;

    if (addContact.match(action)) {
      if (
        !contacts.some(
          contact =>
            contact.name === action.payload.name ||
            contact.number === action.payload.number
        )
      ) {
        next(action);
        dispatch(addNotifications(`Contact ${action.payload.name} was added`));
        return;
      }
      if (contacts.some(contact => contact.name === action.payload.name)) {
        dispatch(
          addNotifications(`${action.payload.name} is already in contacts`)
        );
        return;
      }

      if (contacts.some(contact => contact.number === action.payload.number)) {
        dispatch(
          addNotifications(
            `Contact with number ${action.payload.number} is already in contacts`
          )
        );
        return;
      }
    }

    // if (
    //   addContact.match(action) &&
    //   contacts.some(contact => contact.number === action.payload.number)
    // ) {
    //   dispatch(
    //     addNotifications(
    //       `Contact with number ${action.payload.number} is already in contacts`
    //     )
    //   );
    //   return;
    // }

    if (deleteContact.match(action)) {
      const contactToDelete = contacts.find(
        contact => contact.id === action.payload
      );

      dispatch(addNotifications(`Contact ${contactToDelete.name} was deleted`));
    }

    next(action);
  };
