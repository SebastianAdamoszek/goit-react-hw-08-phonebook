import React from 'react';
import css from './Home.module.css';
import img from './background.png';

export default function Home() {
  return (
    <div className={css.container}>
      <img src={img} alt="Background" className={css.img} />
    </div>
  );
}
