import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

import FormError from './FormError';
import { addContact } from '../../redux/features/contacts/contactsSlice';
import {
  FormStyle,
  Label,
  Button,
  Input,
  InputNumber,
} from './ContactForm.styled';

const phoneNumberMask = [
  '(',
  /[0-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const schema = yup.object().shape({
  name: yup.string().required('Please, enter correct name'),
  number: yup
    .string()
    .required('Please, check the correctness of phone number'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const contactId = nanoid();
  const contactNumberIid = nanoid();
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormStyle>
        <Label htmlFor={contactId}>
          Name
          <Input
            placeholder="John Snow"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={contactId}
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor={contactNumberIid}>
          Number
          <Field name="number" id={contactNumberIid} type="text" required>
            {({ field }) => (
              <InputNumber
                mask={phoneNumberMask}
                {...field}
                placeholder="(___) ___-__-__"
              />
            )}
          </Field>
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
}
