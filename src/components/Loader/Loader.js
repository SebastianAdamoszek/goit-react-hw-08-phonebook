import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Circles
      height="450px"
      width="450px"
      color="blue"
      ariaLabel="circles-loading"
      wrapperClass={css.spinner}
      visible={true}
      animationDuration="0.99"
    />
  );
};

export default Loader;
