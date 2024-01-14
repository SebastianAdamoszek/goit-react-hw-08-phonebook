import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import Input from 'styled/Input';
import LabelContainer from 'styled/LabelContainer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <LabelContainer>
        <label htmlFor={filterId}>Find contacts</label>
        <Input
          id={filterId}
          type="search"
          placeholder="Enter name"
          onChange={event => handleChange(event)}
        />
      </LabelContainer>
    </div>
  );
};

export default Filter;
