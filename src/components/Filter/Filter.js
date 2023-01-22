import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from '../../redux/features/contacts/contactsSlice';
import { Label, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <Label>
      Find contacts by name
      <InputFilter
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </Label>
  );
};

export default Filter;
