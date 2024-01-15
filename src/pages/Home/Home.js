import React from 'react';
import css from './Home.module.css';
import img from './book.png';

export default function Home() {
  return (
    <div className={css.titleBox}>
      <span className={css.title}>My</span>
      <span className={css.title}>Phonebook</span>
      <img src={img} alt="Background" className={css.img} />
      <span className={css.autor}>autor: Sebastian Adamoszek</span>
    </div>
  );
}
