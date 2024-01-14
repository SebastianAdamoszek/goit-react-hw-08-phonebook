import React from 'react';
import css from './ContactsListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { FaTrashAlt } from 'react-icons/fa';

const ContactsListElement = ({ contact }) => {
  const dispatch = useDispatch();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const handleClick = () => {
    Notiflix.Confirm.show(
      'Please confirm',
      `Are you sure to delete ${contact.name}?`,
      'Yes',
      'No',
      function okCb() {
        dispatch(deleteContact(contact.id));
      }
    );
  };

  return (
    <div className={css.contactLi}>
      <p className={css.contact}>
        <span
          style={{ color: getRandomHexColor(), textShadow: '1px 1px black' }}
        >
          &#10047;
        </span>{' '}
        {contact.name}:
      </p>
      <p className={css.contact}>{contact.number}</p>
      <button type="button" className={css.buttonDel} onClick={handleClick}>
      <FaTrashAlt />
      </button>
    </div>
  );
};

ContactsListElement.propTypes = {
  contact: PropTypes.object,
};

export default ContactsListElement;
