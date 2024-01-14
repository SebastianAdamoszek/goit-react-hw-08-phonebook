import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/contacts/selectors';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return [...contacts].sort((a, b) => { return a.name.localeCompare(b.name) }).filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
