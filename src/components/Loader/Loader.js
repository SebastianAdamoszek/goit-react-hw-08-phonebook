import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Circles
      height="300px"
      width="300px"
      color="blue"
      ariaLabel="circles-loading"
      wrapperClass={css.spinner}
      visible={true}
      animationDuration="0.99"
    />
  );
};

export default Loader;
