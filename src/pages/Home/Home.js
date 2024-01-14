import React from 'react';
import css from './Home.module.css';
import img from './background.png';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <div>
          <p>My</p>
          <p>Phonebook</p>
        </div>
        <img src={img} alt="Background" className={css.img} />{' '}
      </h1>
    </div>
  );
}
