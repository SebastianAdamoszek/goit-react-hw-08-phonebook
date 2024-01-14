import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { doubledContactNotification, addedContactNotification } from 'utils/notifications';
import Button from 'styled/Button';
import Input from 'styled/Input';
import LabelContainer from 'styled/LabelContainer';
import Form from 'styled/Form';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    let isContact;
    contacts.forEach(person => {
      if (form.name.value.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    if (isContact) {
      doubledContactNotification(form.name.value);
    }
    if (!isContact) {
      dispatch(
        addContact({
          name: form.name.value,
          number: form.number.value,
        })
      );
      addedContactNotification(form.name.value);
    }
    form.reset();
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <Form className={css.formBox} onSubmit={handleSubmit}>
      <LabelContainer>
        <label className={css.label} htmlFor={nameInputId}>
          Name
        </label>
        <Input
          id={nameInputId}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]+(([' \-][a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C])?[a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelContainer>
      <LabelContainer>
        <label className={css.label} htmlFor={numberInputId}>
          Number
        </label>
        <Input
          id={numberInputId}
          type="tel"
          name="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelContainer>
      <Button type="submit" name="submit">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
