import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, onClick, to }) => {
  return (
    <Link className={`${styles.link} ${styles.post}`} onClick={onClick} to={to}>
      {children}
    </Link>
  );
};

export default Button;
